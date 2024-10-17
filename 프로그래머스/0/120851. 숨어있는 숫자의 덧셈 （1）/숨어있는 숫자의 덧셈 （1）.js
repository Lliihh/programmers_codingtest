function solution(my_string) {
    var answer = 0;
    const number= [1,2,3,4,5,6,7,8,9];
    const array =my_string.split('').filter((el)=>number.some(v=>el.includes(v))).map(Number);  
    const sumarray = array.reduce((a,b) =>a+b);
    return sumarray;
}