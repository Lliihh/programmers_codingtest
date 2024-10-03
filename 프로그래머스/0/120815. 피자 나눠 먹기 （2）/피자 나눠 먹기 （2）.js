function solution(n) {
    //var answer = 0;
    var pizzapiece = 6;
    var gcd = 1;
    for( var i = 1; i <= Math.min(n,pizzapiece); i ++){
        if(n%i === 0 && pizzapiece%i === 0 ){
            gcd = i;
        }
    }
    var 곱하기 = n * pizzapiece;
    var 최소공배수 = 곱하기 / gcd;
    var 피자개수 = 최소공배수 / pizzapiece;
    
    return 피자개수;
    
}  
