function solution(sides) {
    const sorting =sides.sort((a,b)=> b-a)
    let answer =sorting[0]<sorting[1]+sorting[2]? 1:2
    return answer;
}