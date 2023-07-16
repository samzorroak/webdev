let movies = [
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider 1.PNG"
  },
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider 2.PNG"
  },
  {
    name: "Wanda Vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider 4.PNG"
  },
  {
    name: "Luca",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider 5.PNG"
  },
  {
    name: "Jujutsu Kaisen",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio sed a animi nam. Explicabo!",
    image: "Images/slider6.jpg"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (slideIndex <= movies.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 5; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = document.querySelectorAll(".video-card .card-video");
for (let i = 0; i < 5; i++) {
  videoCards[i].addEventListener("mouseenter", function (e) {
    videoCards[i].play();
  });
  videoCards[i].addEventListener("mouseout", function (e) {
    videoCards[i].pause();
  });
}

//Card Sliders
let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
