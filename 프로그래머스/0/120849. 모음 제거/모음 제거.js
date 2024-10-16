function solution(my_string) {
    const vowel =["a", "e", "i", "o", "u"];
    const split = my_string.split('');
    let filtered = split.filter(el => !vowel.some(v=> el.includes(v)));
    let makeString = filtered.join('')
    return makeString;
}