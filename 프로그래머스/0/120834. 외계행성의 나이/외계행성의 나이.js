function solution(age) {
    let ailienage = '';
    const ageStr = age.toString(); // Convert the age to a string

    for (let i = 0; i < ageStr.length; i++) {
        const digit = Number(ageStr[i]); // Get the current digit as a number
        switch (digit) {
            case 0: ailienage += 'a'; break;
            case 1: ailienage += 'b'; break;
            case 2: ailienage += 'c'; break;
            case 3: ailienage += 'd'; break;
            case 4: ailienage += 'e'; break;
            case 5: ailienage += 'f'; break;
            case 6: ailienage += 'g'; break;
            case 7: ailienage += 'h'; break;
            case 8: ailienage += 'i'; break;
            case 9: ailienage += 'j'; break;
        }
    }
    return ailienage;
}