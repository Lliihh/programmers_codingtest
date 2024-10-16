function solution(rsp) {
    var answer = '';
    const 가위 = '2';
    const 바위 = '0';
    const 보 = '5';
    for (let i =0 ; i<rsp.length; i ++){
    if (rsp[i] === 가위) 
        answer += 바위
    else if (rsp[i]===바위) answer+= 보
    else if (rsp[i]===보) answer +=가위;
    }
 return answer;
}