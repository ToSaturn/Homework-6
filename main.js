//----------------------Work-1--------------------

// function getSevenCol(elm) {
//   var col = 0;
//   var str = elm.join("");  //Переводит массив в строку без запятых
//  //console.log(str);
//   var splt = str.split(""); //Делит массив на символы
//  // console.log(splt);
//   splt.forEach(function(el) {
//     if (el == 7) {            //Сранивает каждый символ с семеркой,
//       col = col + 1;          //если есть совпадение увеличивает переменную на один,
//     }                         //которая является количеством семерок
//   });
//   return col;
// }
// console.log("Количество семерок в массиве = ",getSevenCol([1, 7, 4, 77, 73, 973, 32, 27]));

// ------------------------------------------------Второй вариант выполнения первого задания

// function getSevenCol(elm) {
//   var str = elm.join("");
//   var col = str.match(/7/g).length;  //Возвращает длину массива из искомых символов, что и является количеством
//   return col;
// }
// console.log("Количество семерок в массиве = ",getSevenCol([1, 7, 4, 77, 73, 973, 32, 27]));

//-------------------Work-2------------------------

function arrToStr(arr) {
  var arr1 = "";
  var length = arr.length;
  if (length % 2 == 0) {              //Проверка массива на четность
    for (var i = 0; i <= arr.length; i++) {      //Если четный
      arr1 += arr.shift();
      arr1 += arr.pop();
    }
  } else {
    for (var i = 0; i <=length-1; i++) {         //Если нечетный
      if (!!(i%2)){
        arr1 += arr.pop();} else{
      arr1 += arr.shift();}
  }
  }return arr1;
}

console.log(arrToStr(["a", "b", "c", "d", "e", "f", "g"]));
