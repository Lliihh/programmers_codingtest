function solution(my_string) {
  let result =''
  for (let i = 0; i < my_string.length; i++){
  let char = my_string.charAt(i)
  result += char === char.toUpperCase()? char.toLowerCase():char.toUpperCase()}
  return result
}