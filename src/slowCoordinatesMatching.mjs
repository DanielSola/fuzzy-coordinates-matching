import CoordinatesMatchingService from './CoordinatesMatchingService.mjs';

const slowCoordinatesMatching = ({ sourceA, sourceB, maxDistanceMeters }) => {
    const distanceMatrix = CoordinatesMatchingService._distanceMatrixBuilder({ sourceA, sourceB });
    const matchedElements = CoordinatesMatchingService._findUniqueMatches({ distanceMatrix, maxDistanceMeters });
    const distanceComputationsSlow = distanceMatrix.length;
    return { matchedElements, distanceComputationsSlow };
};

export default slowCoordinatesMatching;