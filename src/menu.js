//Menuアニメーション
const menuImgTitle1 = document.querySelector("#menuImgTitle1");
const menuImgPrice1 = document.querySelector("#menuImgPrice1");

const menuImgL = document.querySelector(".menu-img-left");
const menuTxt1_1 = document.querySelector("#menuTxt1_1");
const menuTxt1_2 = document.querySelector("#menuTxt1_2");

    const menuH1 = document.querySelectorAll('#menu-h1');
    const menuH2 = document.querySelectorAll('#menu-h2');

    /* 文字列を分割しspanで囲む */
    menuH1.forEach(target => {
      let newText = '';
      const text = target.textContent;
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }
      target.innerHTML = newText;
    });
    const jsMenuText = '#menu-h1 span';
    menuH2.forEach(target => {
      let newText = '';
      const text = target.textContent;
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }
      target.innerHTML = newText;
    });
    const jsMenuText2 = '#menu-h2 span';
    
gsap.set([jsMenuText, jsMenuText2], {
      autoAlpha: 0, //ここで初期状態を設定
      y: 30,
});
const tlMenutTxt = gsap.timeline({
  scrollTrigger: {
        trigger: menuH1,
        start: "top center",
  }
});
tlMenutTxt
  .to(jsMenuText, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in"
      }})
  .to(jsMenuText2, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "sine.in"
      }},"<");
      
gsap.set([menuImgTitle1,menuImgPrice1], {
  width:"0%",
});
gsap.set([menuTxt1_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL, {
  width:"0%",
});
const tlMenu = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle1,
    start: "top center+=30%",
  },
});
tlMenu
  .to([menuImgL], {
    width:"100%",
    ease: Power2.easeInOut,
    duration: 1,
  })
  .to(menuImgTitle1, {
    width: "250px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
    .to(menuImgPrice1, {
    width: "200px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
  .to(
    [ menuTxt1_2],
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

gsap.set([menuImgTitle2,menuImgPrice2], {
  width:"0%",
});
gsap.set([menuTxt2_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL2, {
  width:"0%",
});
const tlMenu2 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle2,
    start: "top center+=30%",
  },
});
tlMenu2
  .to([menuImgL2], {
    width:"100%",
    ease: Power2.easeInOut,
    duration: 1,
  })
  .to(menuImgTitle2, {
    width: "250px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
    .to(menuImgPrice2, {
    width: "200px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
  .to(
    [ menuTxt2_2],
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

gsap.set([menuImgTitle3,menuImgPrice3], {
  width:"0%",
});
gsap.set([menuTxt3_2], {
  autoAlpha: 0,
  yPercent: 100,
});
gsap.set(menuImgL3, {
  width:"0%",
});
const tlMenu3 = gsap.timeline({
  scrollTrigger: {
    trigger: menuImgTitle3,
    start: "top center+=30%",
  },
});
tlMenu3
  .to([menuImgL3], {
    width:"100%",
    ease: Power2.easeInOut,
    duration: 1,
  })
  .to(menuImgTitle3, {
    width: "250px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
    .to(menuImgPrice3, {
    width: "200px",
    ease: Power2.easeInOut,
    duration: 1,
  },"-=0.5")
  .to(
    [ menuTxt3_2],
    {
      autoAlpha: 1,
      yPercent: 0,
    },
    "<"
  );