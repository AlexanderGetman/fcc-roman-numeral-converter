const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

const convertNumeral = (input) => {
    for (const [key, value] of Object.entries(romanNumerals)) {
        if (input < 1) {
            return "";
        }
        else if (input >= value) {            
            return key.repeat(Math.floor(input / value)) + convertNumeral(input % value);
        }
      }
}

const returnOutput = () => {
    const inputValue = input.value
    if (!inputValue) {
        output.innerText = "Please enter a valid number";
    } else if (inputValue < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (inputValue > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        output.innerText = convertNumeral(inputValue);
    }
}

convertBtn.addEventListener("click", () => {
    returnOutput();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        returnOutput();
    }
});
