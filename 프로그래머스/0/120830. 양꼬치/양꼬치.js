function solution(n, k) {
    var answer = 0;
    const foodserving = n;
    const drink = k;
    const food_price = 12000;
    const drink_price = 2000;
    const totalprice = foodserving*food_price + drink*drink_price
    const drinkservice = drink_price*Math.floor(n/10)
    answer = foodserving < 10? totalprice : totalprice-drinkservice;
    return answer;
}