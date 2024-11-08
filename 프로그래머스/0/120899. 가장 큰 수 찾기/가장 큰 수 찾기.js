function solution(array) {
    var answer = [];
    let max = array.reduce((max,num)=> max>num? max:num)
   let index = array.indexOf(max)
return [max,index]

}