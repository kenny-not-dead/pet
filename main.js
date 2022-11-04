const models = document.getElementById("models");
sentence = document.getElementById("sentence");
service = document.getElementById("service");
news = document.getElementById("news");
navbarList = document.querySelector(".navbar-list");
contentInfo = document.querySelector(".content-info");
btnup = document.querySelector(".btnup");
btndown = document.querySelector(".btndown");
contentbtn = document.querySelectorAll(".content-btn");

model = [
  {
    id: 1,
    img: "img/model/dargo.png",
    model: "HAVAL DARGO",
    price: "от 2 999 000 ₽*",
    available: "Haval Dargo",
  },

  {
    id: 2,
    img: "img/model/jolion.png",
    model: "HAVAL JOLION",
    price: "от 1 899 000 ₽*",
    available: "Haval Jolion",
  },

  {
    id: 3,
    img: "img/model/f7.png",
    model: "HAVAL F7",
    price: "от 2 299 000 ₽*",
    available: "Haval F7",
  },

  {
    id: 4,
    img: "img/model/f7.png",
    model: "HAVAL F7X",
    price: "от 2 399 000 ₽*",
    available: "Haval F7X",
  },

  {
    id: 5,
    img: "img/model/f7.png",
    model: "HAVAL H9",
    price: "от 4 099 000 ₽*",
    available: "Haval H9",
  },
];

sentenceArray = [
  {
    id: 1,
    img: "img/sentence/1.jpg",
    h3: "Все cпециальные предложения",
  },

  {
    id: 2,
    img: "img/sentence/2.jpg",
    h3: "Для корпоративных клиентов",
  },

  {
    id: 3,
    img: "img/sentence/3.jpg",
    h3: "Обеспечьте надежную защиту вашего автомобиля в постгарантийный период",
  },

  {
    id: 4,
    img: "img/sentence/4.jpg",
    h3: "HAVAL Direct: ставка на надежность. Кредит 0,01%*",
  },
];

newsArray = [
  {
    id: 1,
    mainnews: {
      h: "GWM представляет новый гибридный HAVAL H6 PHEV",
      img: "./img/news/1.jpg",
    },

    secondnews1: {
      h: "GWM демонстрирует рост продаж в сентябре",
      img: "./img/news/2.jpg",
    },

    secondnews2: {
      h: "GWM представил новые автомобили ORA и WEY",
      img: "./img/news/3.jpg",
    },
  },

  {
    id: 2,
    mainnews: {
      h: "Новая коллекция одежды и аксессуаров HAVAL Dargo",
      img: "./img/news/4.jpg",
    },

    secondnews1: {
      h: "HAVAL по программе господдержки",
      img: "./img/news/5.jpg",
    },

    secondnews2: {
      h: "GWM в первой половине 2022 года: факторы и точки роста",
      img: "./img/news/6.jpg",
    },
  },
];

serviceArray = [
  {
    id: 1,
    img: "./img/service/1.jpg",
    h3: "ГАРАНТИЯ",
  },

  {
    id: 2,
    img: "./img/service/2.jpg",
    h3: "ЭПТС",
  },

  {
    id: 3,
    img: "./img/service/3.jpg",
    h3: "ПОМОЩЬ НА ДОРОГЕ",
  },

  {
    id: 4,
    img: "./img/service/4.jpg",
    h3: "РЕГЛАМЕНТЫ ТО",
  },
];

const removeActive = () => {
  for (let i = 0; i < navbarList.children.length; i++) {
    navbarList.children[i].classList.remove("active");
  }
};

const showNavig = () => {
  for (let i = 0; i < contentbtn.length; i++) {
    contentbtn[i].classList.add("active");
  }
};

const removeNavig = () => {
  for (let i = 0; i < contentbtn.length; i++) {
    contentbtn[i].classList.remove("active");
  }
};

models.addEventListener("click", () => {
  removeActive();
  models.classList.add("active");
  modelList();
  showmenup.innerHTML = `Модельный ряд`
  if( window.innerWidth <= 768 ){
    hidemenu()
}
});

sentence.addEventListener("click", () => {
  removeActive();
  sentence.classList.add("active");
  sentenceList();
  showmenup.innerHTML = `Специальные предложения`
  if( window.innerWidth <= 768 ){
    hidemenu()
}
});

service.addEventListener("click", () => {
  removeActive();
  service.classList.add("active");
  serviceList();
  showmenup.innerHTML = `Сервисное обслуживание`
  if( window.innerWidth <= 768 ){
    hidemenu()
}
});

news.addEventListener("click", () => {
  removeActive();
  news.classList.add("active");
  newsList();
  showmenup.innerHTML = `Новости HAVAL`
  if( window.innerWidth <= 768 ){
    hidemenu()
}
});

(i1 = 0), (i2 = 2);
(n1 = 0), (n2 = 1);

const modelList = () => {
  contentInfo.innerHTML = `<ul class="cards"></ul>`;
  const card = document.querySelector(".cards");
  card.innerHTML = model
    .map(
      (i) =>
        ` <li class="card">
    <img src="${i.img}" class='card-img' alt="Photo">
    <div class="info">
        <h3 class="info-h3">${i.model}</h3>
        <p class="info-price">${i.price}</p>
        <a href="#" class="more">
            <p class="info-p">Подробнее о модели</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="info-svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
        </a>
        <a href="#" class="more">
            <p class="info-p">${i.available} в наличии</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="info-svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
        </a>
    </div>
    </li>
    `
    )
    .join("");
  removeNavig();
};

const sentenceList = () => {
  contentInfo.innerHTML = `<ul class="sentences"></ul>`;
  sentences = document.querySelector(".sentences");
  sentences.innerHTML = sentenceArray
    .slice(i1, i2)
    .map(
      (i) =>
        ` <li class="sentence">
                <img class="sentence-img" src="${i.img}" alt="">
                <div class="sentence-info">
                    <h3 class="info-h3">${i.h3}</h3>
                    <a href="#" class="more">
                        <p class="info-p sentence-info-p-size">ПОДРОБНЕЕ</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="info-svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </div>
            </li>
        `
    )
    .join("");
  showNavig();
};

const newsList = () => {
  contentInfo.innerHTML = newsArray
    .slice(n1, n2)
    .map(
      (i) => `
    <div class="news-wrapper">
                            <div class="main-news">
                                <img src=${i.mainnews.img} class='news-img' alt="">
                                    <div class="main-news-info">
                                        <p  class="news-p">${i.mainnews.h}</p>
                                        <button  class="news-btn">Подробнее</button>
                                    </div>
                            </div>
                            <div class="second-news">
                                <div class="news">
                                    <img src=${i.secondnews1.img}  class="second-news-img" alt="">
                                    <div class="news-info">
                                        <p  class="news-p">${i.secondnews1.h}</p>
                                        <button  class="news-btn">Подробнее</button>
                                    </div>
                                </div>
                                <div class="news">
                                    <img src=${i.secondnews2.img}  class="second-news-img" alt="">
                                    <div class="news-info">
                                        <p  class="news-p">${i.secondnews2.h}</p>
                                        <button  class="news-btn">Подробнее</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    `
    )
    .join("");
  showNavig();
};

const serviceList = () => {
  contentInfo.innerHTML = `<ul class="cards service"></ul>`;
  const card = document.querySelector(".cards");
  card.innerHTML = serviceArray
    .map(
      (i) =>
        ` <li class="card">
    <img src=${i.img} class='card-img' alt="Photo">
    <div class="info">
        <h3 class="info-h3">${i.h3}</h3>
        <a href="#" class="more">
            <p class="info-p">Подробнее</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="info-svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
        </a>
    </div>
    </li>
    `
    )
    .join("");
  removeNavig();
};

modelList();

btndown.addEventListener("click", () => {
  if (sentence.classList.contains("active")) {
    if (i2 < 4) {
      i1++, i2++;
      sentenceList();
    } else {
      (i1 = 0), (i2 = 2);
      sentenceList();
    }
  } else if (news.classList.contains("active")) {
    if (n2 < 2) {
      n1++, n2++;
      newsList();
    } else {
      (n1 = 0), (n2 = 1);
      newsList();
    }
  }
});

btnup.addEventListener("click", () => {
  if (sentence.classList.contains("active")) {
    if (i1 > 0) {
      i1--, i2--;
      sentenceList();
    } else {
      (i1 = 2), (i2 = 4);
      sentenceList();
    }
  } else if (news.classList.contains("active")) {
    if (n1 > 0) {
      n1--, n2--;
      newsList();
    } else {
      (n1 = 1), (n2 = 2);
      newsList();
    }
  }
});


// slider

const   headerWrapper = document.querySelector(".header-wrapper"),
        dots = document.querySelectorAll(".dot"),
        btnprev = document.getElementById("btn-prev"),
        btnnext = document.getElementById("btn-next");
        h1 = document.getElementById('h1')
        offerP = document.querySelector('.offer-p')
        offer = document.querySelector('.offer')

let index = 0;

backgroundSlider = [
  {
    id: 1,
    img: "url('./img/header/1.jpg') no-repeat center top / cover",
    h: "ПРИОБРЕТАЙТЕ ВЫГОДНО",
    p: "СО СКИДКОЙ 20% ПО ПРОГРАММЕ ГОСПОДДЕРЖКИ",
    up: false
  },

  {
    id: 2,
    img: "url('./img/header/2.jpg') no-repeat center top / cover",
    h: "НОВЫЙ <br> HAVAL DARGO",
    p: "ПОВОД ПРОЯВИТЬ ХАРАКТЕР <br> ЦЕНА ОТ 2 999 000 ₽*",
    up: true
  },

  {
    id: 3,
    img: "url('./img/header/3.jpg') no-repeat center top / cover",
    h: "КРЕДИТ <br> 0.01%",
    p: "СТАВКА НА НАДЕЖНОСТЬ <br> БЕЗ ДОПОЛНИТЕЛЬНЫХ УСЛОВИЙ <br> БЕЗ СКРЫТЫХ ПЕРЕПЛАТ",
    up: true
  },
  {
    id: 4,
    img: "url('./img/header/4.jpg') no-repeat center top / cover",
    h: "РАСШИРЕННАЯ <br> ПОДДЕРЖКА HAVAL",
    p: "ПРОЙДИТЕ ТО - ПОЛУЧИТЕ ГОД <br> БЕСПЛАТНОЙ «ПОМОЩИ НА ДОРОГЕ»",
    up: false
  },
  {
    id: 5,
    img: "url('./img/header/5.jpg') no-repeat center top / cover",
    h: "НОВАЯ КОЛЛЕКЦИЯ <br> HAVAL DARGO",
    p: "",
    up: false
  },
];

const activedot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const changebackground = (n) => {
  headerWrapper.style.background = backgroundSlider[n].img;
  h1.innerHTML = backgroundSlider[n].h;
  offerP.innerHTML = backgroundSlider[n].p;
  backgroundSlider[n].up === true ? offer.style.marginTop = "-571px" : offer.style.marginTop = "-345px"
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    slider(index);
  });
});

const slider = (ind) => {
  activedot(index);
  changebackground(index);
};

const nextslide = () => {
  if (index == backgroundSlider.length - 1) {
    index = 0;
    slider(index)
  } else {
    index++;
    slider(index);
  }
};

const prevslide = () => {
  if (index == 0) {
    index = backgroundSlider.length - 1;
    slider(index)
  } else {
    index--;
    slider(index);
  }
};

btnnext.addEventListener('click', nextslide);
btnprev.addEventListener('click', prevslide);
setInterval(() => {nextslide (index)}, 5000);



const showMenuBtn = document.querySelector('.show-menu');
      hideMenuBtn = document.querySelector('.hide-menu')
      navbar = document.querySelector('.navbar')
      showmenup = document.querySelector('.show-menu-p')



showMenuBtn.addEventListener('click', () => {
    showMenuBtn.style.display = 'none';
    hideMenuBtn.style.display = 'flex';
    navbar.style.display = 'flex'
})

hideMenuBtn.addEventListener('click', () => {
    hidemenu()
    }
)





 let hidemenu = () => {
    showMenuBtn.style.display = 'block';
    hideMenuBtn.style.display = 'none';
    navbar.style.display = 'none'
    

 }


 const hamburger = document.querySelector('.hamburger')
       nav = document.querySelector('.nav')
       closehamburger = document.querySelector('.bi-x-lg')

hamburger.addEventListener('click', () => {
    nav.style.display = 'block'
    closehamburger.style.display = 'block'
})

closehamburger.addEventListener('click', () => {
    nav.style.display = 'none'
    closehamburger.style.display = 'none'
})
