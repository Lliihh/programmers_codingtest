function solution(money) {
    var answer = [];
    let cupofcoffee = 0;
    let coffeeprice = 5500;
    let leftmoney = money;
    while (true){
       if (leftmoney < coffeeprice)
           {break} 
        ++cupofcoffee
        leftmoney -= coffeeprice
    }   answer = [cupofcoffee, leftmoney];
     return answer;
}