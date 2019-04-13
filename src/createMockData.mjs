const createMockData = ({ length }) => {
    return Array(length).fill().map((item,index) => ({ lat: Math.random(), lon: Math.random(), id: index }));
};

export default createMockData;