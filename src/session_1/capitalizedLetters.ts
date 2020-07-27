// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

const capitalizedLetters = (str: string): string => {
    //! Option 1
    return str.toLowerCase().split(" ").map((word: string): string => word[0].toUpperCase() + word.substr(1)).join(" ");

    //! Option 2
    // return str.toLowerCase().split(" ").reduce((total: string, word: string): string => total + " " + word[0].toUpperCase() + word.substr(1))
}

export default capitalizedLetters;