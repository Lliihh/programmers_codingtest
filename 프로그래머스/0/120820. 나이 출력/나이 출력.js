function solution(age) {
    var now = new Date();
    var answer = (now.getFullYear()-2)-age+1;
    //2022-23 +1
    
    return answer;
}