// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'


const reverseString = (str: string): string => {
    //! Option 1
    return str.split('').reduce((total: string, inc: string): string => inc + total);

    //! Option 2
    // return str.split("").reverse().join('');

    //! Option 3
    // let returnString: string = "";
    // for (let i: number = str.length - 1; i >= 0; i--) {
    //     returnString += str[i];
    // }
    // return returnString;
}

export default reverseString;