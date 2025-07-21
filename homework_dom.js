const mainTitle = document.getElementById('main_title');
mainTitle.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const description = document.getElementById("description");
description.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";




const hienthi = document.getElementById('btn');

hienthi.addEventListener('click', () => {
    const inputvalue = document.getElementById('username').value;

    const ketqua = document.getElementById('display');

    ketqua.textContent = "Xin chao" + inputvalue;
})