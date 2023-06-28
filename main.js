// function generateList(array) {
//   let ul = document.createElement("ul");
//   for (let element of array) {
//     if (Array.isArray(element)) {
//       generateList(element);
//     } else {
//       let li = document.createElement("li");
//       li.textContent = element;
//       ul.append(li)
//     }
//     document.body.append(ul);
//   }
// }


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


generateList([1, 2, 3]);
generateList( [1,2, [1.1,1.2,1.3], 3]);
generateList([1, 2, [1.1, 1.2, 1.3, [3, 4, 5]], 3]);
