function solution(my_string) {
    const split = my_string.split("");
    let unique = split.reduce((acc,cur)=>acc.includes(cur)? acc : [...acc,cur],[]).join("")
    return unique;
}