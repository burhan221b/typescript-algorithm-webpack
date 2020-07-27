// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str: string): boolean => {
    //! Option 1
    let filteredString: string = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
    return filteredString.split("").reverse().join('') === filteredString;
}

export default isPalindrome;