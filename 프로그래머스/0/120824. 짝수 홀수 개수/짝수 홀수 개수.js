function solution(num_list) {
    var answer = [];
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < num_list.length; i++){
    if (num_list[i]%2 === 0){
        evencount ++;
    } else oddcount ++;
}
    answer = [evencount, oddcount];
    return answer;
}