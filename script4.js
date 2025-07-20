

// // const change = document.getElementById("text")

// // function onClick() {
// //     console.log(change, 'change');
// //     change.textContent = 'hhhhhhhhhhhhh'

// // }

// // const btn = document.getElementById("btn1")
// // btn.addEventListener("click", () => {

// //     const items = document.querySelectorAll("ul li");
// //     console.log(items, 'items');
// //     items.forEach(item => {
// //         item.style.color = "green";
// //     })
// // })


// // for (let i = 1; i < items.length; i++) { items[i].style.color = rgb(163, 1, 1); }

// // const btnmeme = document.getElementsById("product")
// // btnmeme.addEventlistener("click", () => { })

// const items = document.querySelector(".item");
// setTimeout(() => {
//     items.style.color = "blue";
// }, 2000);
// // items[0].computedStyleMap.color = "red";


const mainTitle = document.getElementById('main_title');
mainTitle.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const description = document.getElementById("description");
description.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";

const inputname = document.getElementById("username");
const outputname = inputname.value;

const ketqua = document.getElementById("name");

const hienthi = document.getElementById('btn');
hienthi.addEventListener("click", () => {
    ketqua.innerText = "Xin chao" + outputname;

})
