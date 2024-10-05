   
//var arr = [];
//var set = new Set(array);
//var newarray = [...set];
//var count = 0;

//console.log(newarray);
  //  var search = newarray[j];
  //  for (var j = 0; j < newarray.length; j++){
  //    for (var i = 0; i < array.length; i++){
  //        if (search === array[i]) count++;
 //    console.log (`${array[i]}=${count}개`);
//  var count = 0;
//array.forEach((element) => {
 //   if (newarray.includes(element)) {
  //      count++;
  //  } console.log(count);
//});
//    const result = {};
//    array.forEach((x) => {
//    result[x] = (result[x] || 0)+1;//
//}); console.log(result);
 //const frequency = Object.values(result);
 //const max = Math.max(...frequency)
 //const selected = Object.keys(result).filter((key) => {
 // return result[key] === max;
//}); 
// }
    const solution = (array) => {
    const counter = array.reduce((acc, cur) => ({
        ...acc,
        [cur]: (acc[cur] || 0) + 1
    }), {})

    const items = Object.keys(counter).map((key) => [
        Number(key), counter[key]
    ]).sort((a, b) => b[1] - a[1])

    if (items[0][1] === items?.[1]?.[1]) {
        return -1
    }

    return items[0][0];
}
    