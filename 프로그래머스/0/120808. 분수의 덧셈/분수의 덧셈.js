function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let 분자 = numer1*denom2+numer2*denom1;
    let 분모 = denom1*denom2;
    let 최대공약수=1;
    
    for ( let i = 1; i <= Math.min(분자,분모); i++) {
        if (분자 % i === 0 && 분모 % i === 0){
         최대공약수 = i;
            console.log(최대공약수);
        
    }
    }
    answer = [분자/최대공약수, 분모/최대공약수];
        return answer;
}