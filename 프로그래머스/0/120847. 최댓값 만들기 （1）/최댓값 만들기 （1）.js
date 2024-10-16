function solution(numbers) {
    const newarr = numbers.sort(function(a,b){
              return  b-a}) 
    let answer = newarr[0]*newarr[1]
    return answer;
}