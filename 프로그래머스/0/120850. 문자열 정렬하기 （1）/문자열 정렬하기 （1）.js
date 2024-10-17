function solution(my_string) {
    const split = my_string.split("")
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const numberFiltered = split.filter((el)=>numbers.some(v=> el.includes(v)));
    const sortNumber= numberFiltered.sort(function(a,b){
        return a-b;
    }); 
    const arrayofnumber = sortNumber.map(Number);
    
    return arrayofnumber;
}