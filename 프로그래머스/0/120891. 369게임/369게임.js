function solution(order) {
    const tostring = order+''
    const toarray=tostring.split('')
    const tonumber=toarray.map(v=>Number(v))
    const tofilter = tonumber.filter((el)=>el===3|el===6|el===9)
    let answer = tofilter.length
    return answer;
}