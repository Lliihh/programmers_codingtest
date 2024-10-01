function solution(array) {
    
    array.sort(function (a, b) {
    return a - b;
});
    var i ;
    array[i] = array[((array.length)-1)/2];
    return array[i];
}