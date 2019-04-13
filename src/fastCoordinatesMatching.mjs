import CoordinatesMatchingService from './CoordinatesMatchingService.mjs';

const fastCoordinatesMatching = ({ sourceA, sourceB }) => {
    const partialDistanceMatrix = [];
    sourceA.forEach(elementA => {
        const nearbyElements = CoordinatesMatchingService._getNearbyElements({ elementA, source: sourceB, coordinatesDiffRadius: 0.02 });
        const elementDistanceMatrix = CoordinatesMatchingService._distanceMatrixBuilder({ sourceA: [elementA], sourceB: nearbyElements });
        partialDistanceMatrix.push(...elementDistanceMatrix);
    });

    const distanceComputationsFast = partialDistanceMatrix.length;
    const matchedElements = CoordinatesMatchingService._findUniqueMatches({ distanceMatrix: partialDistanceMatrix, maxDistanceMeters: 600 });
    return { matchedElements, distanceComputationsFast };
};

export default fastCoordinatesMatching;