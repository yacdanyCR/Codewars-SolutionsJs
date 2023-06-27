// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const wordSaceArray = str.split(' ');
    let reverseWord = "";
    let i = 1;

    for (let index = 0; index < wordSaceArray.length; index++) {
        for (let index_2 = wordSaceArray[index].length; index_2 >= 0; index_2--) {
            reverseWord += wordSaceArray[index].split('').join('').charAt(i);
            i++;
        }
        reverseWord += wordSaceArray[index].split('').join('').charAt(0);
        if (!wordSaceArray[index].includes("?") && !wordSaceArray[index].includes("!")) reverseWord += "ay";

        reverseWord += " ";
        i = 1;
    }

    return reverseWord.trim()
}