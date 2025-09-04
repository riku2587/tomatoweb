// header


// トマトクイズ

let answered = false;
  function checkAnswer(isCorrect, choiceElement) {
    if(answered) return;

    answered = true;

    // まず全てのマークを非表示
    document.querySelectorAll(".mark").forEach(el => el.style.display = "none");

    // 選択肢の親要素からマークを探す
    const mark = choiceElement.parentElement.querySelector(".mark");

    if (isCorrect) {
      mark.textContent = "〇";
      mark.style.color = "green";
    } else {
      mark.textContent = "×";
      mark.style.color = "red";
    }

    mark.style.display = "block"; // 表示する

    document.getElementById("explaination").style.display="block"
  }


// おすすめレシピ
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
      slidesPerView:1
    },
    620:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    }
  }
});


//トマト御籤
  const textArea = document.getElementById('textArea');
  const imageArea = document.getElementById('imageArea');
  const urlArea = document.getElementById('urlArea');
  const texts = ["トマトとふわふわ卵のマヨソテー","簡単おいしい♪基本のミネストローネ","トマトときゅうりの中華風サラダ","<span class='lucky'>大吉！</span><br>今夜はトマト祭りじゃ!!!","<span class='luck'>大凶！</span><br>お前は一人で生で食え"];
  const urls = ['https://www.kewpie.co.jp/recipes/recipe/QP00010931/','https://delishkitchen.tv/recipes/377048994112602606','https://macaro-ni.jp/157315#heading-3408272','https://www.amazon.co.jp/dp/B096TL6XN7','https://www.amazon.co.jp/dp/B00WQNZPY0']
  const images = ['./tomato_dish1.jpg', './tomato_dish2.png', './tomato_dish3.png','./ChatGPT Image 2025年9月4日 15_51_51.png','./ChatGPT Image 2025年9月4日 16_17_14.png'];
  
  const No = Math.floor( Math.random() * images.length);
  textArea.innerHTML = texts[No];
  urlArea.href = urls[No];
  imageArea.src = images[No];
               