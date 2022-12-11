// 読み込み後アニメーション
window.addEventListener("load", function () {
  const LoadMask = document.getElementById("load__mask");

  setTimeout(function () {
    LoadMask.classList.add("reval");
  }, 500);

  const LoaderImgs = document.querySelectorAll(".loader__img");

  LoaderImgs.forEach(function (LoaderImg, index) {
    setTimeout(function () {
      LoaderImg.classList.add("js-animated");
    }, 1100 + 300 * (index + 1));
  });

  const JsLoader = document.getElementById("js__loader");
  const LoaderImg05 = document.querySelectorAll(".loader__img05");
  const body = document.querySelector("body");

  setTimeout(function () {
    JsLoader.classList.add("js-fadeOut");
    body.classList.remove("over-hidden");
  }, 4000);

  const tl = gsap.timeline();
  const fvImg = document.querySelectorAll(".fv__img");
  const jsFvImg = document.getElementById("js-fv-img");
  const jsFvSpan01 = document.querySelectorAll(".fv-span-01");
  const jsFvSpan02 = document.querySelectorAll(".fv-span-02");
  const jsFvSpan03 = document.querySelectorAll(".fv-span-03");
  const jsHeader = document.getElementById("js-header");

  tl.to(
    fvImg,
    {
      y: 0,
      opacity: 1,
    },
    5
  )

    .to(
      jsFvImg,
      {
        scale: 1,
        opacity: 1,
      },
      5
    )

    .to(
      jsFvSpan01,
      {
        y: 0,
        opacity: 1,
        ease: Power4.out,
      },
      "-=.5"
    )

    .to(
      jsFvSpan02,
      {
        y: 0,
        opacity: 1,
        ease: Power4.out,
      },
      "-=0.4"
    )

    .to(
      jsFvSpan03,
      {
        y: 0,
        opacity: 1,
        ease: Power4.out,
      },
      "-=0.4"
    )

    .to(
      jsHeader,
      {
        y: 0,
        opacity: 1,
        ease: Circ.out,
      },
      "+=.2"
    );
});

//locomotiveScroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.refresh();
ScrollTrigger.scrollerProxy(".site__main__contents", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".site__main__contents").style.transform
    ? "transform"
    : "fixed",
});

// スクロールに合わせて画像を表示させる
gsap.registerPlugin(ScrollTrigger);

// messageの画像
const messageImgs = document.querySelectorAll(".js-message__img");

messageImgs.forEach((messageImg, index) => {
  gsap.to(messageImg, {
    scrollTrigger: {
      trigger: messageImg,
      start: "top bottom-=300",
      end: "top top",
      once: true,
      scroller: ".site__main__contents",
      onEnter: () => messageImg.classList.add("js-fadeImg"),
    },
  });
});

// messageのタイトル
const jsFadeUpTitles = document.querySelectorAll(".fade-up-ttl");

jsFadeUpTitles.forEach((jsFadeUpTitle, index) => {
  gsap.to(jsFadeUpTitle, {
    scrollTrigger: {
      trigger: jsFadeUpTitle,
      start: "top-=100 bottom",
      end: "top top",
      once: true,
      scroller: ".site__main__contents",
      onEnter: () => jsFadeUpTitle.classList.add("js-fadeUp-ttl"),
    },
  });
});

// セクション間の横線
const jsBorders = document.querySelectorAll(".border");

jsBorders.forEach((jsBorder, index) => {
  gsap.to(jsBorder, {
    scrollTrigger: {
      trigger: jsBorder,
      start: "top center",
      end: "top top",
      once: true,
      scroller: ".site__main__contents",
      onEnter: () => jsBorder.classList.add("jsBorder"),
    },
  });
});

// タイトルが3Dっぽくフェードアップ
const jsFadeUpTitle02s = document.querySelectorAll(".fade-up-ttl-02");

jsFadeUpTitle02s.forEach((jsFadeUpTitle02, index) => {
  gsap.to(jsFadeUpTitle02, {
    scrollTrigger: {
      trigger: jsFadeUpTitle02,
      start: "top bottom",
      end: "top top",
      once: true,
      scroller: ".site__main__contents",
      onEnter: () => jsFadeUpTitle02.classList.add("js-fadeUp-ttl-02"),
    },
  });
});

// 画像がスクロールに合わせて表示されて消えていく
const ProductImgs = document.querySelectorAll(".product__img");

ProductImgs.forEach((ProductImg, index) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ProductImg,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        scroller: ".site__main__contents",
      },
    })
    .to(ProductImg, {
      opacity: -0.2,
      y: 150,
    })
    .to(ProductImg, {
      opacity: 0.8,
      y: 0,
    })
    .to(ProductImg, {
      opacity: -0.2,
      y: -150,
    });
});

//スクロールに合わせて縦に線が伸びていく
const Works = document.getElementById("works");
const WorksItem06 = document.getElementById("works__item__06");
const WorksBar = document.querySelectorAll(".works__scroll__bar");

gsap.fromTo(
  WorksBar,
  {
    height: "0vh",
  },
  {
    height: "100vh",
    scrollTrigger: {
      trigger: Works,
      start: "top top",
      endTrigger: WorksItem06,
      end: "bottom bottom",
      scrub: 1,
      scroller: ".site__main__contents",
    },
  }
);

//背景がスクロールに合わせて変わっていく
ScrollTrigger.create({
  trigger: "#works__item__02",
  start: "top top",
  endTrigger: "#works__item__03",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: Works,
    className: "js-bg-change01",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__03",
  start: "top top",
  endTrigger: "#works__item__04",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: Works,
    className: "js-bg-change02",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__04",
  start: "top top",
  endTrigger: "#works__item__05",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: Works,
    className: "js-bg-change03",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__05",
  start: "top top",
  endTrigger: "#works__item__06",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: Works,
    className: "js-bg-change04",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__06",
  start: "top top",
  end: "bottom+=100% bottom",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: Works,
    className: "js-bg-change05",
  },
});
//固定してテキストと画像がスクロールに合わせて入れ替わっていく
const WorksRightList01 = document.getElementById("works__right__list1");
const WorksRightList02 = document.getElementById("works__right__list2");
const WorksRightList03 = document.getElementById("works__right__list3");
const WorksRightList04 = document.getElementById("works__right__list4");
const WorksRightList05 = document.getElementById("works__right__list5");
const WorksRightList06 = document.getElementById("works__right__list6");

ScrollTrigger.create({
  trigger: "#works__item__01",
  start: "top top",
  endTrigger: "#works__item__02",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList01,
    className: "js-active",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__02",
  start: "top top",
  endTrigger: "#works__item__03",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList02,
    className: "js-active",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__03",
  start: "top top",
  endTrigger: "#works__item__04",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList03,
    className: "js-active",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__04",
  start: "top top",
  endTrigger: "#works__item__05",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList04,
    className: "js-active",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__05",
  start: "top top",
  endTrigger: "#works__item__06",
  end: "center center",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList05,
    className: "js-active",
  },
});
ScrollTrigger.create({
  trigger: "#works__item__06",
  start: "top top",
  end: "bottom+=100% bottom",
  scroller: ".site__main__contents",
  toggleClass: {
    targets: WorksRightList06,
    className: "js-active",
  },
});
