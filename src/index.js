module.exports = function longestConsecutiveLength(array) {
    //выстроим всё по порядку
    array.sort((a,b) => a-b); 
    // удалим повторяющиеся члены массива
  var arraySingle = [array[0]];
  for (var n = 1; n< array.length; n++){
if (array[n] != array[n-1]){
  arraySingle.push(array[n]);
};
  };
   //в массиве muu будем смотреть сколько длина цепочек
   var muu = [array.length];
  
  for (var i = 0; i <arraySingle.length-1; i++){
  muu[i]=1;
    for (var j = i; j<arraySingle.length; j++){
    if (arraySingle[j]===arraySingle[j+1]-1){
      muu[i]++;
    } else {
      break
    };
    };
  };
    // найдем в массиве muu самое большое число
  muu.sort((a,b) => b-a);

  return muu[0];
}
