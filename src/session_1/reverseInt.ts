// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (int: number): number => {
    //! Option 1
    return parseInt(int.toString().split("").reverse().join(""));

    //! Option 2
    // return parseInt(int.toString().split("").reduce((total: string, nextItem: string): string => nextItem + total));
}

export default reverseInt;