function solution(my_string, letter) {
  
    let array = my_string.split("");
    let filtered = array.filter(el=>el!=letter)
    let joined = filtered.join('');
   return joined;  
}