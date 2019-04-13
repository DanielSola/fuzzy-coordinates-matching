import cheapRuler from 'cheap-ruler';

class CoordinatesMatchingService {
  _distanceMatrixBuilder({ sourceA, sourceB }) {
    if(!sourceA.length || !sourceB.length){
      return [];
    };
    const ruler = cheapRuler(sourceA[0].lat);
    const distanceMatrix = [];
    for (const elementB of sourceB) {
      for (const elementA of sourceA) {
        const distance =
          this._getDistance({
            lat1: elementA.lat,
            lon1: elementA.lon,
            lat2: elementB.lat,
            lon2: elementB.lon,
            ruler
          }) * 1000;
        distanceMatrix.push({ elementA, elementB, distance });
      }
    }
    return distanceMatrix;
  }

  _getDistance({ lat1, lon1, lat2, lon2, ruler }) {
    return ruler.distance([lat1, lon1], [lat2, lon2]);
  }

  _findUniqueMatches({ distanceMatrix, maxDistanceMeters }) {
    const sortedDistanceMatrix = distanceMatrix.sort((a, b) => a.distance - b.distance);
    const alreadyMatchedSourceA = [];
    const alreadyMatchedSourceB = [];
    const uniqueMatches = [];

    for (const asociation of sortedDistanceMatrix) {
      if (asociation.distance > maxDistanceMeters) {
        break;
      }
      if (!alreadyMatchedSourceA.includes(asociation.elementA.id) && !alreadyMatchedSourceB.includes(asociation.elementB.id)) {
        uniqueMatches.push(asociation);
        alreadyMatchedSourceA.push(asociation.elementA.id);
        alreadyMatchedSourceB.push(asociation.elementB.id);
      }
    }

    return uniqueMatches;
  }

  _getNearbyElements({ elementA, source, coordinatesDiffRadius }) {
    const nearbyElements = [];
    for (const elementB of source) {
      if (
        Math.abs(elementA.lat - elementB.lat) < coordinatesDiffRadius &&
        Math.abs(elementA.lon - elementB.lon) < coordinatesDiffRadius
      ) {
        nearbyElements.push(elementB);
      }
    }

    return nearbyElements;
  }
}

export default new CoordinatesMatchingService();
