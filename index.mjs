import createMockData from './src/createMockData.mjs';
import slowCoordinatesMatching from './src/slowCoordinatesMatching';
import fastCoordinatesMatching from './src/fastCoordinatesMatching';

const sourceALength = 3000;
const sourceBLength = 2000;
const maxDistanceMeters = 600;

const sourceA = createMockData({ length: sourceALength });
const sourceB = createMockData({ length: sourceBLength });

console.time('SlowMatching');
const { distanceComputationsSlow } = slowCoordinatesMatching({ sourceA, sourceB, maxDistanceMeters });
console.log(`Made ${distanceComputationsSlow} distance computation between elements`);
console.timeEnd('SlowMatching');

console.time('FastMatching');
const { distanceComputationsFast } = fastCoordinatesMatching({ sourceA, sourceB, maxDistanceMeters });
console.log(`Made ${distanceComputationsFast} distance computation between elements`);
console.timeEnd('FastMatching');
