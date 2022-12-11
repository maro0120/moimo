var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutQuint",
  speed: 1000,
  header: "[data-scroll-header]",
});
jQuery(document).ready(function ($) {
  $(".toggle-btn").on("click", function () {
    $(".toggle-btn__line").toggleClass("active");
    $(".global-nav").fadeToggle();
  });
});
jQuery(document).ready(function ($) {
  $(".global-nav__item").on("click", function () {
    $(".toggle-btn__line").toggleClass("active");
    $(".global-nav").fadeToggle();
  });
});
const svg = document.querySelector("#svg");
const img = document.querySelector("#img");
const circle = document.querySelector("#circle");
const content = document.querySelector("#content");
const whiteLayer = document.querySelector("#whiteLayer");
const pad = 4;
let radius = +circle.getAttribute("r");
let imgWidth, imgHeight;
const tl = gsap.timeline();
tl.to(circle, {
  attr: {
    r: () => radius,
  },
  delay: 0.5,
  ease: "power1.in",
})
  .to(
    "#whiteLayer",
    {
      alpha: 0,
      ease: "power1.in",
      duration: 1 - 0.25,
      opacity: 0,
    },
    0.25
  )
  .to(svg, {
    display: "none",
  });
init();

function init() {
  imgWidth = img.naturalWidth;
  imgHeight = img.naturalHeight;
  resize();
}

function resize() {
  tl.progress(0);
  const r = svg.getBoundingClientRect();
  const rectWidth = r.width + pad;
  const rectHeight = r.height + pad;
  const rx = rectWidth / imgWidth;
  const ry = rectHeight / imgHeight;
  const ratio = Math.max(rx, ry);
  const width = imgWidth * ratio;
  const height = imgHeight * ratio;
  const dx = rectWidth / 2;
  const dy = rectHeight / 2;
  radius = Math.sqrt(dx * dx + dy * dy);
  gsap.set(img, { width, height });
}
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("li.l-gnav__item").forEach((element) => {
    // 親要素に data-overwrite 属性が適用されているかで判断
    const useFlag = element.parentElement.dataset.overwrite === "true";
    const overwrite = useFlag ? "auto" : false;
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.2,
        duration: 0.5,
        overwrite,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        scale: 1.0,
        duration: 0.5,
        overwrite,
      });
    });
  });
});
const myDelay = 7000;
let timer;
const switchAnimation = () => {
  clearTimeout(timer);
  let activeSlide = document.querySelectorAll(".swiper-slide[class*=-active]");
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-finished");
    activeSlide[i].classList.add("anm-started");
  }
  timer = setTimeout(() => {
    for (let i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.remove("anm-started");
      activeSlide[i].classList.add("anm-finished");
    }
  }, myDelay - 1000);
};
const finishAnimation = () => {
  let activeSlide = document.querySelectorAll(".swiper-slide.anm-started");
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-started");
    activeSlide[i].classList.add("anm-finished");
  }
};
const mySwiper = new Swiper(".swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: myDelay,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
  on: {
    slideChange: () => {
      finishAnimation();
    },
    slideChangeTransitionStart: () => {
      switchAnimation();
    },
  },
});
//Conceptアニメーション
const conceptImg1 = document.querySelector("#conceptImg1");
const conceptTxt1_1 = document.querySelector("#conceptTxt1_1");
const conceptTxt1_2 = document.querySelector("#conceptTxt1_2");
gsap.set(conceptImg1, {
  autoAlpha: 0, //ここで初期状態を設定
  xPercent: -100,
  filter: "grayscale(100%)",
});
gsap.set([conceptTxt1_1, conceptTxt1_2], {
  autoAlpha: 0, //ここで初期状態を設定
  yPercent: 100,
});
const tlConcept = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImg1, //アニメーションが始まるトリガーとなる要素
    start: "top bottom",
    markers: true,
  },
});
tlConcept
  .to(conceptImg1, {
    autoAlpha: 1, //ここでアニメーションさせたい内容を書く
    xPercent: 0,
    filter: "grayscale(0%)",
    duration: 1,
  })
  .to(
    [conceptTxt1_1, conceptTxt1_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "<"
  );
const conceptImg2 = document.querySelector("#conceptImg2");
const conceptTxt2_1 = document.querySelector("#conceptTxt2_1");
const conceptTxt2_2 = document.querySelector("#conceptTxt2_2");
gsap.set(conceptImg2, {
  autoAlpha: 0, //ここで初期状態を設定
  xPercent: 100,
  filter: "grayscale(100%)",
});
gsap.set([conceptTxt2_1, conceptTxt2_2], {
  autoAlpha: 0, //ここで初期状態を設定
  yPercent: 100,
});
const tlConcept2 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImg2, //アニメーションが始まるトリガーとなる要素
    start: "top bottom",
    markers: true,
  },
});
tlConcept2
  .to(conceptImg2, {
    autoAlpha: 1, //ここでアニメーションさせたい内容を書く
    xPercent: 0,
    filter: "grayscale(0%)",
    duration: 1,
  })
  .to(
    [conceptTxt2_1, conceptTxt2_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "<"
  );
const conceptImg3 = document.querySelector("#conceptImg3");
const conceptTxt3_1 = document.querySelector("#conceptTxt3_1");
const conceptTxt3_2 = document.querySelector("#conceptTxt3_2");
gsap.set(conceptImg3, {
  autoAlpha: 0, //ここで初期状態を設定
  xPercent: -100,
  filter: "grayscale(100%)",
});
gsap.set([conceptTxt3_1, conceptTxt3_2], {
  autoAlpha: 0, //ここで初期状態を設定
  yPercent: 100,
});
const tlConcept3 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImg3, //アニメーションが始まるトリガーとなる要素
    start: "top bottom",
    markers: true,
  },
});
tlConcept3
  .to(conceptImg3, {
    autoAlpha: 1, //ここでアニメーションさせたい内容を書く
    xPercent: 0,
    filter: "grayscale(0%)",
    duration: 1,
  })
  .to(
    [conceptTxt3_1, conceptTxt3_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "<"
  );
