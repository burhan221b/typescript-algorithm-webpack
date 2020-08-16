// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

const maxCharacter = (str: string): string[] | string => {
    //! Option 1
    interface ObjectLiteral {
        [key: string]: number;
    }
    let maxChar: string[] = [];
    let maxNumber: number = 0;
    const stringHashTable: ObjectLiteral = {};
    let STRING: string[] = str.toLowerCase().replace(/\W/gi, "").split("");
    STRING.forEach(char => {
        if (stringHashTable[char] > 0) stringHashTable[char]++;
        else stringHashTable[char] = 1
    })
    maxNumber = Object.entries(stringHashTable).sort(([key1, value1], [key2, value2]) => value2 - value1)[0][1];
    for (let character in stringHashTable) {
        if (stringHashTable[character] === maxNumber) maxChar.push(character);
    }
    return maxChar.length > 1 ? maxChar : maxChar[0];
}

export default maxCharacter;