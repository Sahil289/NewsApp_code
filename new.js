/* The input is the array arr given below. It is an array of numbers
The ouput has to be a string of the number in words.
Eg. 1234 will be One thousand two hundred and thirty four.
*/

const arr = [10563, 8524, 307, 52, 9, 0, 99902, 25091];

function main() {
    for (var i = 0; i < arr.length; i++) {
        var string = INR(arr[i]);
        Logger.log(arr[i] + " - " + string);
    }
}
function INR(input) {
    var a, b, c, d, e, output, outputA, outputB, outputC, outputD, outputE;
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (input == "") {
        output = "Null";
    }
    if (input === 0) {
        // Zero
        output = "Zero";
    } else if (input === 1) {
        // One
        output = "One";
    } else {
        // More than one
        // Tens
        outputA = oneToHundred_(a);

        // Hundreds
        if (b > 0 && b < 10) {
            outputB = ones[b];
            console.log(outputB);
        }

        // Thousands
        if (c > 10 && c < 100) {
            outputC = oneToHundred_(c);
        }

        // Lakh
        if (d > 100 && d < 1000) {
            outputD = oneToHundred_(d);
        }

        // Crore
        if (e > 1000 && e < 10000) {
            outputE = oneToHundred_(e);
        }

        // Make string
        output;
        if (e > 0) {
            outputE = outputE + " Lakh";
        }
        if (d > 0) {
            outputD = outputD + " Thousand";
        }
        if (c > 0) {
            outputC = outputC + " Hundred";
        }
        if (b > 0) {
            outputB = outputB + " " + ones[b];
        }
        if (input > 100 && a > 0) {
        }
        if (a > 0) {
        }
        output = output + " only";
    }
    return output;
}

function oneToHundred_(num) {
    var outNum;
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    var teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    return outNum;
}
