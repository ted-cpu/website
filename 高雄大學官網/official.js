let last_btn = document.querySelector("#last");
let next_btn = document.querySelector("#next");
let index = 0;
const images= ["https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_973_7707186_86516.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_2795_9780389_03801.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_973_7707186_86516.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_952_3672268_97039.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_965_4598991_14636.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_972_4230459_86501.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_3086_6811961_64939.jpg",
    "https://www.nuk.edu.tw/var/file/0/1000/randimg/mobileadv_3017_1625653_16504.png"
];
let image_exhibition = document.querySelector(".images-exhibition");
last_btn.addEventListener("click", function(){
    if(index == 0){
        index = images.length - 1;
    }else{
        index = index - 1;
    }
    image_exhibition.style.backgroundImage = `url(${images[index]})`; //有dash的屬性在js中打成camel-case
});

next_btn.addEventListener("click", function(){
    if(index == images.length - 1){
        index = 0;
    }else{
        index = index + 1;
    }
    image_exhibition.style.backgroundImage = `url(${images[index]})`;
})