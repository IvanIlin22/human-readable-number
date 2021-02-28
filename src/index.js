module.exports = function toReadable (number) {
    let sing = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let dec = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozen = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred","eight hundred","nine hundred"];
    let ans = "";
    let num = number;

    if (number / 100 >= 1) {
        if (number % 100 > 0)
            ans += hundred[Math.trunc(number / 100)  - 1] + " ";
        else
            ans += hundred[Math.trunc(number / 100)  - 1];
        number %= 100; 
        
    }
    if (number / 10 >= 1 && number < 20) {
        ans += dec[number % 10];
        return ans;
    }
    if (number >= 20 && number / 10 >= 1) {
        if (number % 10 > 0)
            ans += dozen[Math.trunc(number / 10) - 1] + " ";
        else
            ans += dozen[Math.trunc(number / 10) - 1];
        number %= 10; 
    }
    if (num > 10 && number == 0)
        return ans;
    ans += sing[number % 10]; 
    return ans;
}