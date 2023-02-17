// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutQuint",
  speed: 700,
  header: "[data-scroll-header]",
});
document.addEventListener("touchstart", () => {
  scroll.cancelScroll();
});

//ヘッダーナビ
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
const aboutWrapper = document.querySelector(".about-wrapper");
const aboutContainer = document.querySelector(".about-container");
const aboutH1 = document.querySelectorAll("#about-h1");
const aboutH2 = document.querySelectorAll("#about-h2");
const aboutImg = document.querySelector(".about-img");
const aboutLeadTxt = document.querySelector(".about-lead-txt");
const aboutTxt = document.querySelector(".about-txt");
/* 文字列を分割しspanで囲む */
aboutH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsText = "#about-h1 span";
aboutH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsText2 = "#about-h2 span";

gsap.set([jsText, jsText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlAboutTxt = gsap.timeline({
  scrollTrigger: {
    trigger: aboutH2,
    start: "top bottom",
    // markers: true,
  },
});
tlAboutTxt
  .to(jsText, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.in",
    },
  })
  .to(
    jsText2,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in",
      },
    },
    "<"
  );

const tll = gsap.timeline({
  scrollTrigger: {
    trigger: aboutContainer, //アニメーションが始まるトリガーとなる要素
    start: "top center+=20%",
  },
});
tll
  .fromTo(
    aboutImg,
    {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100,
    },
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    }
  )
  .fromTo(
    aboutLeadTxt,
    {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100,
    },
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    },
    "-=0.5"
  )
  .fromTo(
    aboutTxt,
    {
      autoAlpha: 0, //ここで初期状態を設定
      y: 100,
    },
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      y: 0,
      duration: 1,
    },
    "-=0.5"
  );

//Conceptアニメーション
const conceptImgCv1 = document.querySelector("#conceptImgCover1");
const conceptImgL = document.querySelector(".concept-img-left");
const conceptTxt1_1 = document.querySelector("#conceptTxt1_1");
const conceptTxt1_2 = document.querySelector("#conceptTxt1_2");
const borderY1 = document.querySelector("#border-y_1");

const conceptH1 = document.querySelectorAll("#concept-h1");
const conceptH2 = document.querySelectorAll("#concept-h2");

/* 文字列を分割しspanで囲む */
conceptH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsConceText = "#concept-h1 span";
conceptH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsConceText2 = "#concept-h2 span";

gsap.set([jsConceText, jsConceText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlConcetTxt = gsap.timeline({
  scrollTrigger: {
    trigger: conceptH1,
    start: "top bottom",
  },
});
tlConcetTxt
  .to(jsConceText, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.in",
    },
  })
  .to(
    jsConceText2,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in",
      },
    },
    "<"
  );

gsap.set(conceptImgCv1, {
  autoAlpha: 1, //ここで初期状態を設定
  xPercent: -0,
});
gsap.set([conceptTxt1_1, conceptTxt1_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(conceptImgL, {
  // backgroundPositionX: "-50px",
});
const tlConcept = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv1,
    start: "top center+=30%",
  },
});
tlConcept
  .to(
    [conceptImgL],
    {
      backgroundPositionX: "0",
      ease: Power2.easeInOut,
      duration: 1,
    },
    "<"
  )
  .to(
    conceptImgCv1,
    {
      width: "0%",
      duration: 1,
    },
    "-=0.5"
  )
  .to(
    [conceptTxt1_1],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=0.5"
  )
  .to(
    borderY1,
    {
      width: "100%",
      duration: 1,
    },
    "-=0.2"
  )
  .to(borderY1, {
    width: "0%",
    left: "100%",
    duration: 1,
  })
  .to(
    [conceptTxt1_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=1.5"
  );
const conceptImgCv2 = document.querySelector("#conceptImgCover2");
const conceptImgR = document.querySelector(".concept-img-right");
const conceptTxt2_1 = document.querySelector("#conceptTxt2_1");
const conceptTxt2_2 = document.querySelector("#conceptTxt2_2");
const borderY2 = document.querySelector("#border-y_2");
gsap.set(conceptImgCv2, {
  autoAlpha: 1, //ここで初期状態を設定
  xPercent: 0,
});
gsap.set([conceptTxt2_1, conceptTxt2_2], {
  autoAlpha: 0, //ここで初期状態を設定
  yPercent: 100,
});
gsap.set(conceptImgR, {
  // xPercent: 100,
});
const tlConcept2 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv2,
    start: "top center+=30%",
  },
});
tlConcept2
  .to(
    [conceptImgR],
    {
      backgroundPositionX: "0",
      ease: Power2.easeInOut,
      duration: 1,
    },
    "<"
  )
  .to(
    conceptImgCv2,
    {
      width: "0%",
      duration: 1,
    },
    "-=0.5"
  )
  .to(
    [conceptTxt2_1],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=0.5"
  )
  .to(
    borderY2,
    {
      width: "100%",
      duration: 1,
    },
    "-=0.2"
  )
  .to(borderY2, {
    width: "0%",
    left: "100%",
    duration: 1,
  })
  .to(
    [conceptTxt2_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=1.5"
  );
const conceptImgCv3 = document.querySelector("#conceptImgCover3");
const conceptImgL2 = document.querySelector(".concept-img-left2");
const conceptTxt3_1 = document.querySelector("#conceptTxt3_1");
const conceptTxt3_2 = document.querySelector("#conceptTxt3_2");
const borderY3 = document.querySelector("#border-y_3");
gsap.set([conceptTxt3_1, conceptTxt3_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(conceptImgL2, {
  // xPercent: -100,
});
const tlConcept3 = gsap.timeline({
  scrollTrigger: {
    trigger: conceptImgCv3,
    start: "top center+=30%",
  },
});
tlConcept3
  .to(
    [conceptImgL2],
    {
      backgroundPositionX: "0",
      ease: Power2.easeInOut,
      duration: 1,
    },
    "<"
  )
  .to(
    conceptImgCv3,
    {
      width: "0%",
      duration: 1,
    },
    "-=0.5"
  )
  .to(
    [conceptTxt3_1],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=0.5"
  )
  .to(
    borderY3,
    {
      width: "100%",
      duration: 1,
    },
    "-=0.2"
  )
  .to(borderY3, {
    width: "0%",
    left: "100%",
    duration: 1,
  })
  .to(
    [conceptTxt3_2],
    {
      autoAlpha: 1, //ここでアニメーションさせたい内容を書く
      yPercent: 0,
    },
    "-=1.5"
  );


// productアニメーション
const productImgCv1 = document.querySelector("#productImgCover");
const productH1 = document.querySelectorAll("#product-h1");
const productH2 = document.querySelectorAll("#product-h2");

/* 文字列を分割しspanで囲む */
productH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsProdText = "#product-h1 span";
productH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsProdText2 = "#product-h2 span";

gsap.set([jsProdText, jsProdText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlProdTxt = gsap.timeline({
  scrollTrigger: {
    trigger: productH1,
    start: "top bottom",
  },
});
tlProdTxt
  .to(jsProdText, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.in",
    },
  })
  .to(
    jsProdText2,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in",
      },
    },
    "<"
  );

gsap.set(productImgCv1, {
  xPercent: 0,
});
const tlProduct = gsap.timeline({
  scrollTrigger: {
    trigger: productImgCv1,
    start: "top center+=30%",
  },
});
tlProduct.to(productImgCv1, {
  xPercent: 100,
  ease: Power2.easeInOut,
  duration: 1,
});
// productマウスホバー
const productImg = document.querySelector(".product-img");
const productLnk = document.querySelector(".product-lnk");
productLnk.addEventListener("mouseover", () => {
  gsap.to(productImg, {
    filter: "grayscale(0%)",
    duration: 0,
  });
});
productLnk.addEventListener("mouseout", () => {
  gsap.to(productImg, {
    filter: "grayscale(80%)",
    duration: 0,
  });
});

// shopアニメーション
const shopImgCv1 = document.querySelector("#shopImgCover");
const shopH1 = document.querySelectorAll("#shop-h1");
const shopH2 = document.querySelectorAll("#shop-h2");

/* 文字列を分割しspanで囲む */
shopH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsShopText = "#shop-h1 span";
shopH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsShopText2 = "#shop-h2 span";

gsap.set([jsShopText, jsShopText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlShopTxt = gsap.timeline({
  scrollTrigger: {
    trigger: shopH1,
    start: "top bottom",
  },
});
tlShopTxt
  .to(jsShopText, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.in",
    },
  })
  .to(
    jsShopText2,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in",
      },
    },
    "<"
  );
gsap.set(shopImgCv1, {
  xPercent: 0,
});
const tlShop = gsap.timeline({
  scrollTrigger: {
    trigger: shopImgCv1,
    start: "top center+=30%",
  },
});
tlShop.to(shopImgCv1, {
  xPercent: -100,
  ease: Power2.easeInOut,
  duration: 1,
});
// shopマウスホバー
const shopImg = document.querySelector(".shop-img");
const shopLnk = document.querySelector(".shop-lnk");
shopLnk.addEventListener("mouseover", () => {
  gsap.to(shopImg, {
    filter: "grayscale(0%)",
    duration: 0,
  });
});
shopLnk.addEventListener("mouseout", () => {
  gsap.to(shopImg, {
    filter: "grayscale(80%)",
    duration: 0,
  });
});

// noufukuアニメーション
const noufukuImgCv1 = document.querySelector("#noufukuImgCover");
const noufukuH1 = document.querySelectorAll("#noufuku-h1");

/* 文字列を分割しspanで囲む */
noufukuH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsNoufukuText = "#noufuku-h1 span";

gsap.set([jsNoufukuText], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlNfkTxt = gsap.timeline({
  scrollTrigger: {
    trigger: noufukuH1,
    start: "top bottom",
  },
});
tlNfkTxt.to(jsNoufukuText, {
  autoAlpha: 1,
  y: 0,
  duration: 0.5,
  stagger: {
    amount: 0.5,
    from: "start",
    ease: "sine.in",
  },
});

gsap.set(noufukuImgCv1, {
  xPercent: 0,
});
const tlNoufuku = gsap.timeline({
  scrollTrigger: {
    trigger: noufukuImgCv1,
    start: "top center+=30%",
  },
});
tlNoufuku.to(noufukuImgCv1, {
  xPercent: 100,
  ease: Power2.easeInOut,
  duration: 1,
});
// noufukuマウスホバー
const noufukuImg = document.querySelector(".noufuku-img");
const noufukuLnk = document.querySelector(".noufuku-lnk");
noufukuLnk.addEventListener("mouseover", () => {
  gsap.to(noufukuImg, {
    filter: "grayscale(0%)",
    duration: 0,
  });
});
noufukuLnk.addEventListener("mouseout", () => {
  gsap.to(noufukuImg, {
    filter: "grayscale(80%)",
    duration: 0,
  });
});

// Accessアニメーション
const accessH1 = document.querySelectorAll("#access-h1");
const accessH2 = document.querySelectorAll("#access-h2");

/* 文字列を分割しspanで囲む */
accessH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsAccessText = "#access-h1 span";
accessH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsAccessText2 = "#access-h2 span";

gsap.set([jsAccessText, jsAccessText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlAccessTxt = gsap.timeline({
  scrollTrigger: {
    trigger: accessH1,
    start: "top bottom",
  },
});
tlAccessTxt
  .to(jsAccessText, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.in",
    },
  })
  .to(
    jsAccessText2,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in",
      },
    },
    "<"
  );

// Instagramアニメーション

const instaH1 = document.querySelectorAll("#instagram-h1");

/* 文字列を分割しspanで囲む */
instaH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsInstaText = "#instagram-h1 span";

gsap.set([jsInstaText], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlInstaTxt = gsap.timeline({
  scrollTrigger: {
    trigger: instaH1,
    start: "top bottom",
  },
});
tlInstaTxt.to(jsInstaText, {
  autoAlpha: 1,
  y: 0,
  duration: 0.5,
  stagger: {
    amount: 0.5,
    from: "start",
    ease: "sine.in",
  },
});
