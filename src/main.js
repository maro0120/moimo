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
// const svg = document.querySelector("#svg");
// const img = document.querySelector("#img");
// const circle = document.querySelector("#circle");
// const content = document.querySelector("#content");
// const whiteLayer = document.querySelector("#whiteLayer");
// const pad = 4;
// let radius = +circle.getAttribute("r");
// let imgWidth, imgHeight;
// const tl = gsap.timeline();
// tl.to(circle, {
//   attr: {
//     r: () => radius,
//   },
//   delay: 0.5,
//   ease: "power1.in",
// })
//   .to(
//     "#whiteLayer",
//     {
//       alpha: 0,
//       ease: "power1.in",
//       duration: 1 - 0.25,
//       opacity: 0,
//     },
//     0.25
//   )
//   .to(svg, {
//     display: "none",
//   });
// init();

// function init() {
//   imgWidth = img.naturalWidth;
//   imgHeight = img.naturalHeight;
//   resize();
// }

// function resize() {
//   tl.progress(0);
//   const r = svg.getBoundingClientRect();
//   const rectWidth = r.width + pad;
//   const rectHeight = r.height + pad;
//   const rx = rectWidth / imgWidth;
//   const ry = rectHeight / imgHeight;
//   const ratio = Math.max(rx, ry);
//   const width = imgWidth * ratio;
//   const height = imgHeight * ratio;
//   const dx = rectWidth / 2;
//   const dy = rectHeight / 2;
//   radius = Math.sqrt(dx * dx + dy * dy);
//   gsap.set(img, { width, height });
// }
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
//Aboutアニメーション
    const aboutWrapper = document.querySelector('.about-wrapper');
    const aboutContainer = document.querySelector('.about-container');
    const aboutH1 = document.querySelectorAll('#aboutH1');
    const aboutH2 = document.querySelectorAll('#aboutH2');
    const aboutImg = document.querySelector('.about-img');
    const aboutLeadTxt = document.querySelector('.about-lead-txt');
    const aboutTxt = document.querySelector('.about-txt');
    /* 文字列を分割しspanで囲む */
    aboutH1.forEach(target => {
      let newText = '';
      const text = target.textContent;
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }
      target.innerHTML = newText;
    });
    const jsText = '#aboutH1 span';
    aboutH2.forEach(target => {
      let newText = '';
      const text = target.textContent;
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }
      target.innerHTML = newText;
    });
    const jsText2 = '#aboutH2 span';
    
gsap.set([jsText, jsText2], {
      autoAlpha: 0, //ここで初期状態を設定
      y: 30,
});
const tlAboutTxt = gsap.timeline({
  scrollTrigger: {
        trigger: aboutH2,
        start: "top bottom",
        markers: true,
  }
});
tlAboutTxt
  .to(jsText, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in"
      }})
  .to(jsText2, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in"
      }});

    const tll = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainer, //アニメーションが始まるトリガーとなる要素
        start: "top center+=20%",

      }
    });
    tll.fromTo(aboutImg, {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100
    }, {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    }).fromTo(aboutLeadTxt, {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100
    }, {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    }, '-=0.5')
    .fromTo(aboutTxt, {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100
    }, {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    }, '-=0.5');
//Conceptアニメーション
const conceptImgCv1 = document.querySelector("#conceptImgCover1");
const conceptImgL = document.querySelector(".concept-img-left");
const conceptTxt1_1 = document.querySelector("#conceptTxt1_1");
const conceptTxt1_2 = document.querySelector("#conceptTxt1_2");
gsap.set(conceptImgCv1, {
  autoAlpha: 0.95, //ここで初期状態を設定
  xPercent: -30,
});
gsap.set([conceptTxt1_1, conceptTxt1_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(conceptImgL, {
  xPercent: -30,
});
const tlConcept = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv1,
    start: "top center+=30%",
  },
});
tlConcept
  .to([conceptImgCv1,conceptImgL], {
    xPercent:0,
    // duration: 1,
  })
  .to(conceptImgCv1, {
    width: "0%",
    // duration: 1,
  },"-=0.5")
  .to(
    [conceptTxt1_1, conceptTxt1_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );
const conceptImgCv2 = document.querySelector("#conceptImgCover2");
const conceptImgR = document.querySelector(".concept-img-right");
const conceptTxt2_1 = document.querySelector("#conceptTxt2_1");
const conceptTxt2_2 = document.querySelector("#conceptTxt2_2");
gsap.set(conceptImgCv2, {
  autoAlpha: 0.95, //ここで初期状態を設定
  xPercent: 30,
});
gsap.set([conceptTxt2_1, conceptTxt2_2], {
  autoAlpha: 0, //ここで初期状態を設定
  yPercent: 100,
});
gsap.set(conceptImgR, {
  xPercent: 30,
});
const tlConcept2 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv2, 
    start: "top center+=30%",
    // markers:true
  },
});
tlConcept2
  .to([conceptImgCv2,conceptImgR], {
    xPercent:0,
    // duration: 1,
  })
  .to(conceptImgCv2, {
    width: "0%",
    // duration: 1,
  },"-=0.5")
  .to(
    [conceptTxt2_1, conceptTxt2_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "<"
  );
const conceptImgCv3 = document.querySelector("#conceptImgCover3");
const conceptImgL2 = document.querySelector(".concept-img-left2");
const conceptTxt3_1 = document.querySelector("#conceptTxt3_1");
const conceptTxt3_2 = document.querySelector("#conceptTxt3_2");
gsap.set(conceptImgCv3, {
  autoAlpha: 0.95, //ここで初期状態を設定
  xPercent: -30,
});
gsap.set([conceptTxt3_1, conceptTxt3_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(conceptImgL2, {
  xPercent: -30,
});
const tlConcept3 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv3,
    start: "top center+=30%",
  },
});
tlConcept3
  .to([conceptImgCv3,conceptImgL2], {
    xPercent:0,
    // duration: 1,
  })
  .to(conceptImgCv3, {
    width: "0%",
    // duration: 1,
  },"-=0.5")
  .to(
    [conceptTxt3_1, conceptTxt3_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "<"
  );
