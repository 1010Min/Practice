const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //JS에서 HTML element 생성하는 함수

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body에 html 추가

bgImage.id = 'bgImage';