# Fuzzy Coordinates Matching
Fuzzy coordinates matching proof of concept

Compares fuzzy coordinates matching algorithms: 
  - slowCoordinatesMatching: Computes distance for all possible combination of elements between sources.
  - fastCoordinatesMatching: Computes distance only for nearby elements of opposite source.
  
 ## Instructions
 
- Clone repository.
- Run npm install
- Fill sourceALength, sourceBLength and maxDistanceMeters (max distance allowed between elements) in index.mjs
- Run npm start

## Example results

- sourceALength: 3000
- sourceBLength: 4000
- maxDistanceMeters: 200

```
SlowMatching: 20637.344ms
Made 12000000 distance computation between elements

FastMatching: 66.746ms
Made 18699 distance computation between elements
```

