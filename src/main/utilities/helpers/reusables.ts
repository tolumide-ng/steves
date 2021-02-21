export const returnArr = (start: number, end: number, increaseBy: number) => {
    const arr = [];
    for (let i = start; i <= end; i += increaseBy) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
};

export default returnArr;
