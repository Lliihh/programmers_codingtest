function solution(numbers, direction) {
    const clonedNumbers = [].concat(numbers);
    if (direction === 'right')
    {clonedNumbers.pop()
      clonedNumbers.unshift(numbers[numbers.length-1])}
     else if (direction === 'left')
        { clonedNumbers.shift()
         clonedNumbers.push(numbers[0])}
    return clonedNumbers;
}