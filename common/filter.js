const string = "Привет как дела?";

const vowels = ["и", "е", "а","у","ы","о","э","ю"];

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i];

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }
    return extractedVowels;
}

console.log(getVowels(string));