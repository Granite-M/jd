import $ from "./interface/library/jquery.js";
import animate from "./interface/library/animate.0.5.js";
import cookie from "./interface/library/cookie.js";
import { getPagePoint } from "./interface/library/common.js";
// import Swiper from "../swiper-master/package/swiper-bundle.js";

$("header").load("../html/index/header.html");
$("footer").load("index/footer.html");
$.ajax({
  type: "get",
  url: "../js/interface/getItems.php",
  dataType: "json",
})
  .then((res) => {
    let template = "";
    res.forEach((elm, i) => {
      let picture = JSON.parse(elm.picture);
      template += `
      <a href="./particulars.html?item=${elm.id}">
        <div class="img"><img src="${picture[0].src}" alt=""></div>
        <p class="title">${elm.title}</p>
        <div class="price">￥<span>${elm.price}</span>.00</div>
     </a>`;
    });

    $("#shop").html(template);
    let num_shop = JSON.parse(cookie.get("shop")).length;

    $(".num_shop").html(`&nbsp;${num_shop}&nbsp;`);
  })
  .catch((xhr) => {
    console.log(xhr.status);
  });
//banner 轮播图
(function () {
  const animate = function (ele, obj, callback) {
    let step = 0;
    let nowstyle;
    clearInterval(ele.timer);
    ele.timer = setInterval(() => {
      let flag = true;
      for (let lay in obj) {
        if (lay == "opacity") {
          nowstyle = parseInt(getComputedStyle(ele)[lay] * 100);
          console.log(obj[lay]);
        } else {
          nowstyle = parseInt(getComputedStyle(ele)[lay]);
        }
        step = (obj[lay] - nowstyle) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (nowstyle != obj[lay]) {
          flag = false;
        }

        if (lay == "opacity") {
          ele.style[lay] = (nowstyle + step) / 100;
        } else {
          ele.style[lay] = nowstyle + step + "px";
        }
        if (flag) {
          clearInterval(ele.timer);
          if (callback) {
            callback();
          }
        }
      }
    }, 20);
  };

  const box = document.querySelector(".box");
  const imgright = document.querySelector(".imgright");
  const imgleft = document.querySelector(".imgleft");
  const imgs = box.querySelectorAll("img");
  const list1 = document.querySelector(".list1");
  const list2 = document.querySelector(".list2");
  let lis2 = list2.children;
  let lis1 = list1.children;
  let flag = true;
  for (let index = 0; index < imgs.length; index++) {
    let li = document.createElement("li");
    li.date_index = index;
    list2.appendChild(li);
    li.style.backgroundColor = "white";
    li.addEventListener("click", function () {
      flag = false;
      for (let i = 0; i < imgs.length; i++) {
        lis2[i].style.backgroundColor = "white";
      }
      let that = this.date_index;
      this.style.backgroundColor = "tomato";

      let x = -that * lis1[that].offsetWidth;

      animate(list1, { left: x }, function () {
        flag = true;
      });
    });
  }

  let first = lis1[0].cloneNode(true);
  list1.appendChild(first);
  imgleft.addEventListener("click", function () {
    if (flag) {
      flag = false;

      if (-parseInt(getComputedStyle(list1).left) < lis1[0].offsetWidth) {
        list1.style.left = -(lis1.length - 1) * lis1[0].offsetWidth + "px";
      }
      let x = parseInt(getComputedStyle(list1).left);
      let i = Math.abs(x / lis1[0].offsetWidth);
      i = Math.round(i);

      for (let i = 0; i < imgs.length; i++) {
        lis2[i].style.backgroundColor = "white";
      }

      if (i == 0) {
        lis2[lis2.length - 1].style.backgroundColor = "tomato";
      } else {
        lis2[i - 1].style.backgroundColor = "tomato";
      }

      x = x + lis1[0].offsetWidth;
      animate(list1, { left: x }, function () {
        flag = true;
      });
    }
  });
  function toright() {
    if (flag) {
      flag = false;
      let x = parseInt(getComputedStyle(list1).left);

      x = x - lis1[0].offsetWidth;
      let i = Math.abs(x / lis1[0].offsetWidth);
      i = Math.round(i);
      i = i % 7;

      for (let i = 0; i < imgs.length; i++) {
        lis2[i].style.backgroundColor = "white";
      }
      lis2[i].style.backgroundColor = "tomato";
      animate(list1, { left: x }, function () {
        flag = true;

        if (
          parseInt(getComputedStyle(list1).left) ==
          -lis1[0].offsetWidth * (lis1.length - 1)
        ) {
          list1.style.left = "0px";
        }
      });
    }
  }
  imgright.addEventListener("click", function () {
    toright();
  });
  box.addEventListener("mouseover", function (ev) {
    imgleft.style.display = "block";
    imgright.style.display = "block";
    clearInterval(box.timer);
  });
  box.addEventListener("mouseout", function (ev) {
    imgleft.style.display = "none";
    imgright.style.display = "none";
    box.timer = setInterval(() => {
      toright();
    }, 1000);
  });
  lis2[0].style.backgroundColor = "tomato";
  box.timer = setInterval(() => {
    toright();
  }, 1000);
})();
//banner img 切换
(function () {
  const banner_img = $("#banner-img");
  const span = banner_img.find("span");
  const ul = banner_img.find("ul");
  let flag = false;
  span.on("click", function () {
    flag = !flag;
    if (flag) {
      $(ul[1]).fadeOut(500, function () {
        $(ul[0]).fadeIn(200);
      });
    } else {
      $(ul[0]).fadeOut(500, function () {
        $(ul[1]).fadeIn(200);
      });
    }
  });
})();

/* part1_main  滑动效果*/
var oBanner3 = document.querySelector(".mslist");
var oUl3 = document.querySelectorAll(".mslist .msUl")[0];
var ul = document.querySelectorAll(".mslist .msUl ul")[0];
var aLi3 = document.querySelectorAll(".mslist .msUl ul");
var aBtn3 = document.querySelectorAll(".mslist .mp");
oUl3.style.width = 800 * (aLi3.length + 1) + "px";
oUl3.appendChild(aLi3[0].cloneNode(true));
var length3 = aLi3.length;
var tindex = 0;
var timert = setInterval(next3, 10000);
oBanner3.onmouseenter = function () {
  clearInterval(timert);
};
oBanner3.onmouseleave = function () {
  timert = setInterval(next3, 10000);
};

function next3() {
  if (oUl3.isanimate) return;
  tindex++;
  animate(oUl3, { left: -797.32 * tindex }, 797.32, function () {
    if (tindex === length3) {
      tindex = 0;
      oUl3.style.left = 0;
    }
  });
}
/*next*/
aBtn3[1].onclick = function () {
  next3();
};
/*pre*/
aBtn3[0].onclick = function () {
  if (oUl3.isanimate) return;
  tindex--;
  if (tindex < 0) {
    tindex = length3 - 1;
    oUl3.style.left = -797.32 * length3 + "px";
  }
  animate(oUl3, { left: -797.32 * tindex }, 797.32);
};

/* part1 right */
var oBanner2 = document.querySelector(".msban .wban");
var oUl2 = document.querySelectorAll(".msban .wban")[0];
var aLi2 = document.querySelectorAll(".msban .db");
var aDot2 = document.querySelectorAll(".dbUl li");
oUl2.style.width = 180 * (aLi2.length + 1) + "px";
oUl2.appendChild(aLi2[0].cloneNode(true));
var length2 = aLi2.length;

var yindex = 0;
var timerr = setInterval(next2, 4000);
oBanner2.onmouseenter = function () {
  clearInterval(timerr);
};
oBanner2.onmouseleave = function () {
  timerr = setInterval(next2, 4000);
};

function next2() {
  if (oUl2.isanimate) return;
  yindex++;
  animate(oUl2, { left: -180 * yindex }, 180, function () {
    if (yindex === length2) {
      yindex = 0;
      oUl2.style.left = 0;
    }
  });
  change();
}
/*小圆点*/
for (var i = 0; i < length2; i++) {
  (function (m) {
    aDot2[m].onmouseover = function () {
      for (var i = 0; i < length2; i++) {
        aDot2[i].className = "";
      }
      yindex = m;
      aDot2[yindex].className = "dbon";
      animate(oUl2, { left: -180 * yindex }, 180);
    };
  })(i);
}

function change() {
  var n = yindex;
  if (n === length2) n = 0;
  for (var i = 0; i < length2; i++) {
    aDot2[i].className = "";
  }
  aDot2[n].className = "dbon";
}

//秒杀倒计时
var Hour = document.getElementsByClassName("hours")[0];
var Mins = document.getElementsByClassName("mins")[0];
var Seconds = document.getElementsByClassName("seconds")[0];

var cdtime = setInterval(function () {
  var date = new Date();
  var fhour = 0;
  var fmin = 60 - date.getMinutes();
  var fsed = 60 - date.getSeconds();
  if (fsed < 10) {
    Seconds.innerText = "0" + fsed;
  } else if (fsed == 60) {
    Seconds.innerText = "00";
  } else {
    Seconds.innerText = fsed;
  }
  if (fmin < 10) {
    Mins.innerText = "0" + fmin;
  } else if (fmin == 60) {
    Mins.innerText = "00";
  } else {
    Mins.innerText = fmin;
  }
  if (date.getHours() >= 20) {
    fhour = 23 - (date.getHours() - 20);
  } else {
    fhour = 19 - date.getHours();
  }
  if (fhour < 10) {
    Hour.innerText = "0" + fhour;
  } else if (fhour == 60) {
    Hour.innerText = "00";
  } else {
    Hour.innerText = fhour;
  }
}, 100);

//part2 选项卡 切换
(function () {
  const p2_ul_li = $(".part2 .left .top li");
  p2_ul_li.on("mouseover", function () {
    p2_ul_li.removeClass("active");
    $(this).addClass("active");
    let index = $(this).index();

    const divs = $(".tabs>div");
    divs.css("display", "none");

    $(divs[index]).css("display", "flex");
  });
})();
//part3 轮播图

var findban = document.querySelector(".findban");
var findwrap = document.querySelector(".findban .findwrap");
var scrollwrap = document.querySelector(".scrollbar");
var scrollbar = document.querySelector(".scrollbar span");
var step = 0;
var step2 = 0;
var isEnd = true;
var maxleft = scrollwrap.offsetWidth - scrollbar.offsetWidth; //滚动条的最大宽度

//将第1,2,3,4,5张克隆一组到最后
var findbanList = document.querySelectorAll(".findban .findwrap a");
for (var i = 0; i < 5; i++) {
  var a = document.createElement("a");
  a.innerHTML = findbanList[i].innerHTML;
  findwrap.appendChild(a);
}

//开启自动轮播
var timeID = setInterval(function () {
  sportBan();
}, 30);

//鼠标移入清除定时器
findban.onmouseover = function () {
  scrollwrap.style.visibility = "visible";
  clearInterval(timeID);
};
//鼠标移出wrap就重新开始定时器
findban.onmouseout = function (e) {
  //鼠标移出的时候判断scrollbar 是否onmousedown了
  if (isEnd) {
    scrollwrap.style.visibility = "hidden";
    timeID = setInterval(function () {
      sportBan();
    }, 30);
  }
};

/* 滚动条拖拽事件 */
scrollbar.onmousedown = function (e) {
  isEnd = false;
  var x =
    getPagePoint().pageX -
    findban.offsetLeft -
    scrollwrap.offsetLeft -
    scrollbar.offsetLeft;
  e.stopPropagation();
  document.onmousemove = function (e) {
    var x1 =
      getPagePoint().pageX - findban.offsetLeft - scrollwrap.offsetLeft - x;
    //边界值检测
    x1 = x1 < 0 ? 0 : x1;
    x1 = x1 > maxleft ? maxleft : x1;
    scrollbar.style.left = x1 + "px";
    step2 = x1;
    step = (x1 * 1980) / maxleft;
    findwrap.style.left = -step + "px";
  };
  window.onmouseup = function () {
    //先清除上一次的定时器
    clearInterval(timeID);
    isEnd = true;
    scrollwrap.style.visibility = "hidden";
    document.onmousemove = null;
    if (isEnd) {
      timeID = setInterval(function () {
        sportBan();
      }, 30);
    }
  };
  findban.onmouseup = function (e) {
    isEnd = true;
    document.onmousemove = null;
    e.stopPropagation(); //阻止冒泡
  };
};

function sportBan() {
  step += 1;
  step2 += maxleft / 1980;
  findwrap.style.left = -step + "px";
  scrollbar.style.left = step2 + "px";
  if (parseInt(findwrap.style.left) <= -1980) {
    scrollbar.style.left = 0 + "px";
    findwrap.style.left = 0 + "px";
    step2 = 0;
    step = 0;
  }
}

//part 4轮播图
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//part 4选项卡
(function () {
  const p4_2 = $(".part4>div:nth-of-type(2)>ul>li");

  p4_2.on("mouseover", function () {
    p4_2.removeClass("active");
    $(this).addClass("active");
    let index = $(this).index();

    const p4_2_divs = $(".part4>div:nth-of-type(2)>.tabs>div");
    p4_2_divs.css("display", "none");

    $(p4_2_divs[index]).css("display", "block");
  });
})();
//登陆后修改用户名
$(function () {
  if (cookie.get("isLogined")) {
    let login = `<a href="login.html">你好，${cookie.get("username")}</a>`;
    $("#login").html(login);
    let exit = `<a href="">退出登录</a><span>|</span>`;
    $("#register").html(exit);
    $("#register").on("click", function () {
      cookie.set("isLogined", " ");
      location.reload();
    });
  }
});

$(function () {
  if (cookie.get("isLogined")) {
    let w_logo = `<a href="login.html">${cookie.get("username")}</a>
    <span>|</span>
    <a href="index.html"  id='exit' >退出</a>`;
    $(".w_logo").html(w_logo);

    $("#exit").on("click", function () {
      cookie.set("isLogined", " ");
      location.reload();
    });
  }
});

//slider-bar

$(function () {
  const totop = document.querySelector("#totop");

  totop.onclick = function () {};
  document.onscroll = function (ev) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 800) {
      $(".header_search").slideDown(500);
    } else {
      $(".header_search").slideUp(500);
    }
    if (window.pageYOffset < 600) {
      $(".slider-bar li").removeClass("active");
      $(".slider-bar li").eq(0).addClass("active");
    }
    if (window.pageYOffset > 800) {
      $(".slider-bar li").removeClass("active");
      $(".slider-bar li").eq(1).addClass("active");
    }
    if (window.pageYOffset > 1700) {
      $(".slider-bar li").removeClass("active");
      $(".slider-bar li").eq(2).addClass("active");
    }
    if (window.pageYOffset > 2700) {
      $(".slider-bar li").removeClass("active");
      $(".slider-bar li").eq(3).addClass("active");
    }

    if (window.pageYOffset > 500) {
      totop.style.display = "block";
      totop.onclick = function () {
        let top = window.pageYOffset;
        let timer = setInterval(() => {
          let step = window.pageYOffset / 10;
          let y = Math.floor(window.pageYOffset - step);
          window.scroll(0, y);
          if (y <= 0) {
            clearInterval(timer);
          }
        }, 20);
        console.log(top);
      };
    } else {
      totop.style.display = "none";
    }
  };
  $(".logo").on("click", function () {
    location.href = "../html/index.html";
  });
});
