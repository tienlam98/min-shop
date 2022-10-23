// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];

//doi mau banner 
let header = document.getElementsByTagName("header");
function changeColor(color) {
  header[0].style.background = color;
}
let label = document.getElementsByTagName("label");
for (let i = 0; i < label.length; i++) {
  label[i].onclick = function(event) {
    console.log(getComputedStyle(event.target).backgroundColor);
  }
}
// label[0].onclick = function() {
//   changeColor("#fcbf16");
// }
// label[1].onclick = function() {
//   changeColor("#992154");
// }
// label[2].onclick = function() {
//   changeColor("#173451");
// }
// label[3].onclick = function() {
//   changeColor("linear-gradient(to right, #fcbf16, #992154)");
// }

//an phim enter
let searchInput = document.getElementById('search');
searchInput.onkeyup = function(event) {
  if (event.key == "Enter") {
    deleteAllBooks();
    let newBookArray = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].name.includes(searchInput.value)) {
        newBookArray.push(books[i]);
      }
    }
    console.log(newBookArray);
    // tao phan tu html chua' data
    for (let i = 0; i < newBookArray.length; i++) {
      const inBook = newBookArray[i] 
      let div1 = document.createElement("div");
      div1.classList.add("item");

      let h2 = document.createElement("h2");
      h2.textContent = inBook.name;
      div1.appendChild(h2);

      let price = document.createElement("price");
      price.textContent = inBook.price; 
      div1.appendChild(price);

      let list = document.getElementById("list");
      list.appendChild(div1);

    }
  }
}


function deleteAllBooks() {
  let list = document.getElementById("list");
    while (list.firstChild) {
  list.removeChild(list.firstChild);
}
}
