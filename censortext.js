var censorWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inputString) {
    for (index in censorWords) {
        inputString = inputString.replace(censorWords[index], "*****");
    }
    for (index in customCensoredWords) {
        inputString = inputString.replace(customCensoredWords[index], "*****");
    }

    return inputString;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censorWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
