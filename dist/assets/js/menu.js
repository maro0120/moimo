//Menuアニメーション
const menuImgTitle1 = document.querySelector("#menuImgTitle1");
const menuImgText1 = document.querySelector("#menuImgText1");
const menuImgPrice1 = document.querySelector("#menuImgPrice1");
const menuImgPriceText1 = document.querySelector("#menuImgPriceText1");

const menuImgL = document.querySelector(".menu-img-left");
const menuTxt1_1 = document.querySelector("#menuTxt1_1");
const menuTxt1_2 = document.querySelector("#menuTxt1_2");

const menuH1 = document.querySelectorAll("#menu-h1");
const menuH2 = document.querySelectorAll("#menu-h2");

/* 文字列を分割しspanで囲む */
menuH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsMenuText = "#menu-h1 span";
menuH2.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsMenuText2 = "#menu-h2 span";

gsap.set([jsMenuText, jsMenuText2], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlMenutTxt = gsap.timeline({
  scrollTrigger: {
    trigger: menuH1,
    start: "top bottom",
    // markers:true,
  },
});
tlMenutTxt
  .to(jsMenuText, {
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
    jsMenuText2,
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

gsap.set([menuImgTitle1, menuImgPrice1], {
  width: "0%",
});
gsap.set(menuImgText1, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText1, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt1_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL, {
  width: "0%",
});
const tlMenu = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle1,
    start: "top center+=30%",
  },
});
tlMenu
  .to([menuImgL], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle1,
    {
      width: "180px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText1,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice1,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText1,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt1_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );

const menuImgTitle2 = document.querySelector("#menuImgTitle2");
const menuImgPrice2 = document.querySelector("#menuImgPrice2");
const menuImgL2 = document.querySelector(".menu-img-left2");
const menuTxt2_2 = document.querySelector("#menuTxt2_2");
const menuImgText2 = document.querySelector("#menuImgText2");
const menuImgPriceText2 = document.querySelector("#menuImgPriceText2");

gsap.set([menuImgTitle2, menuImgPrice2], {
  width: "0%",
});
gsap.set(menuImgText2, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText2, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt2_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL2, {
  width: "0%",
});
const tlMenu2 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle2,
    start: "top center+=30%",
  },
});
tlMenu2
  .to([menuImgL2], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle2,
    {
      width: "180px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText2,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice2,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText2,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt2_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );

const menuImgTitle3 = document.querySelector("#menuImgTitle3");
const menuImgPrice3 = document.querySelector("#menuImgPrice3");
const menuImgL3 = document.querySelector(".menu-img-left3");
const menuTxt3_2 = document.querySelector("#menuTxt3_2");
const menuImgText3 = document.querySelector("#menuImgText3");
const menuImgPriceText3 = document.querySelector("#menuImgPriceText3");

gsap.set([menuImgTitle3, menuImgPrice3], {
  width: "0%",
});
gsap.set(menuImgText3, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText3, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt3_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL3, {
  width: "0%",
});
const tlMenu3 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle3,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL3], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle3,
    {
      width: "180px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText3,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice3,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText3,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt3_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );

const menuMoreH1 = document.querySelectorAll("#menu-more-h1");

/* 文字列を分割しspanで囲む */
menuMoreH1.forEach((target) => {
  let newText = "";
  const text = target.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += "<span>" + result[i] + "</span>";
  }
  target.innerHTML = newText;
});
const jsMenuMoreText = "#menu-more-h1 span";

gsap.set([jsMenuMoreText], {
  autoAlpha: 0, //ここで初期状態を設定
  y: 30,
});
const tlMenutMoreTxt = gsap.timeline({
  scrollTrigger: {
    trigger: menuMoreH1,
    start: "top bottom",
  },
});
tlMenutMoreTxt.to(jsMenuMoreText, {
  autoAlpha: 1,
  y: 0,
  duration: 0.5,
  stagger: {
    amount: 0.5,
    from: "start",
    ease: "sine.in",
  },
});


const menuImgTitle4 = document.querySelector("#menuImgTitle4");
const menuImgPrice4 = document.querySelector("#menuImgPrice4");
const menuImgL4 = document.querySelector(".menu-img-left4");
const menuTxt4_2 = document.querySelector("#menuTxt4_2");
const menuImgText4 = document.querySelector("#menuImgText4");
const menuImgPriceText4 = document.querySelector("#menuImgPriceText4");

gsap.set([menuImgTitle4, menuImgPrice4], {
  width: "0%",
});
gsap.set(menuImgText4, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText4, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt4_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL4, {
  width: "0%",
});
const tlMenu4 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle4,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL4], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle4,
    {
      width: "180px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText4,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice4,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText4,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt4_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );

const menuImgTitle5 = document.querySelector("#menuImgTitle5");
const menuImgPrice5 = document.querySelector("#menuImgPrice5");
const menuImgL5 = document.querySelector(".menu-img-left5");
const menuTxt5_2 = document.querySelector("#menuTxt5_2");
const menuImgText5 = document.querySelector("#menuImgText5");
const menuImgPriceText5 = document.querySelector("#menuImgPriceText5");

gsap.set([menuImgTitle5, menuImgPrice5], {
  width: "0%",
});
gsap.set(menuImgText5, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText5, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt5_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL5, {
  width: "0%",
});
const tlMenu5 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle5,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL5], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle5,
    {
      width: "280px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText5,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice5,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText5,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt5_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );
  
  const menuImgTitle6 = document.querySelector("#menuImgTitle6");
const menuImgPrice6 = document.querySelector("#menuImgPrice6");
const menuImgL6 = document.querySelector(".menu-img-left6");
const menuTxt6_2 = document.querySelector("#menuTxt6_2");
const menuImgText6 = document.querySelector("#menuImgText6");
const menuImgPriceText6 = document.querySelector("#menuImgPriceText6");

gsap.set([menuImgTitle6, menuImgPrice6], {
  width: "0%",
});
gsap.set(menuImgText6, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText6, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt6_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL6, {
  width: "0%",
});
const tlMenu6 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle6,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL6], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle6,
    {
      width: "180px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText6,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice6,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText6,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt6_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );
  
  const menuImgTitle7 = document.querySelector("#menuImgTitle7");
const menuImgPrice7 = document.querySelector("#menuImgPrice7");
const menuImgL7 = document.querySelector(".menu-img-left7");
const menuTxt7_2 = document.querySelector("#menuTxt7_2");
const menuImgText7 = document.querySelector("#menuImgText7");
const menuImgPriceText7 = document.querySelector("#menuImgPriceText7");

gsap.set([menuImgTitle7, menuImgPrice7], {
  width: "0%",
});
gsap.set(menuImgText7, {
  xPercent: -100,
  autoAlpha: 0,
});
gsap.set(menuImgPriceText7, {
  xPercent: 100,
  autoAlpha: 0,
});
gsap.set([menuTxt7_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL7, {
  width: "0%",
});
const tlMenu7 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle7,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL7], {
    width: "100%",
    ease: Power2.easeInOut,
    duration: 0.7,
  })
  .to(
    menuImgTitle7,
    {
      width: "320px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgText7,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPrice7,
    {
      width: "160px",
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    menuImgPriceText7,
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power2.easeInOut,
      duration: 0.7,
    },
    "-=0.5"
  )
  .to(
    [menuTxt7_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );