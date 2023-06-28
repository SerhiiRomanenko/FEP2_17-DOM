function generateList(array) {
  let ul = document.createElement("ul");
  let innerHTML = '';

  function generateItems(arr) {
    for (let i of arr) {
      innerHTML += "<li>";
      if (Array.isArray(i)) {
        innerHTML += "<ul>";
        generateItems(i);
        innerHTML += "</ul>";
      } else {
        innerHTML += i;
      }
      innerHTML += "</li>";
    }
  }

  generateItems(array);

  ul.innerHTML = innerHTML;
  document.body.append(ul);
}


//    Інший варіант даної функції


// function generateList(array) {
//   let ul = document.createElement("ul");
//
//   for (let item of array) {
//     if (!Array.isArray(item)) {
//       let li = document.createElement("li");
//       li.textContent = item;
//       ul.append(li);
//     } else {
//       let innerUl = document.createElement("li");
//       ul.append(innerUl);
//       innerUl.append(generateList(item));
//     }
//   }
//
//   document.body.append(ul);
//   return ul;
// }


generateList([1, 2, 3]);
generateList([1, 2, [1.1, 1.2, 1.3], 3]);
generateList([1, 2, [1.1, 1.2, 1.3, [3, 4, 5]], 3]);
