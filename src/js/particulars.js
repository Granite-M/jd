import $ from "./interface/library/jquery.js";
import cookie from "./interface./library/cookie.js";

(async function () {
  let id = location.search.split("=")[1];

  await $.ajax({
    type: "get",
    url: "../js/interface/getItem.php",
    data: { id },
    dataType: "json",
  })
    .then((res) => {
      let picture = JSON.parse(res.picture);
      let type = JSON.parse(res.type);


      let li_img = `
            <li class="current" data-src="${picture[0].src}" bigImg-src="${picture[0].src}"><img
                    data-src="${picture[0].src}" src="${picture[0].src}" alt=""></li>
            <li data-src="${picture[1].src}" bigImg-src="${picture[1].src}"><img data-src="${picture[1].src}"
                    src="${picture[1].src}" alt=""></li>
            <li data-src="${picture[2].src}" bigImg-src="${picture[2].src}"><img data-src="${picture[2].src}"
                    src="${picture[2].src}" alt=""></li>
            <li data-src="${picture[3].src}" bigImg-src="${picture[3].src}"><img data-src="${picture[3].src}"
                    src="${picture[3].src}" alt=""></li>
            <li data-src="${picture[4].src}" bigImg-src="${picture[4].src}"><img data-src="${picture[4].src}"
                    src="${picture[4].src}" alt=""></li>`;
      let gs_bigbox_img = `<img src="${picture[0].src}" alt="">`;
      let small_img = `
                  <li class="current   "><a href=" javascript:; "><img src="${picture[5].src}" alt=""><span>${type[0].color}</span></a></li>
                  <li><a href=" javascript:; "><img src="${picture[6].src}" alt=""><span>${type[1].color}</span></a></li>`;

      let mask_img = `
              <div class="gsl_img">
                  <div class="mask"></div><i class="iconfont icon-sousuo"></i><img src="${picture[0].src}"
                      alt="">
              </div>`;

      let pri_l = `
            <i class="pritxt ">京东价</i><span class="price ">￥${
              res.price
            }</span> <s>[￥${res.price * 1 + 300}]</s>&nbsp;<a href="#"
                class="tongzhi">降价通知</a>`;
      let xinhao = `     
                <li class="li">${type[1].type[0]}</li>
                <li class="li">${type[1].type[1]}</li>
                <li class="li">${type[1].type[2]}</li>
                <li> <i class="iconfont icon-wenhao"></i></li>
                `;

      let fenqi = `
      <li class="li current" id="nofq">不分期</li>
      <li class="li"> ￥${(res.price / 3).toFixed(2)}x 3期 </li>
      <li class="li"> ￥${(res.price / 12).toFixed(2)}x 6期 </li>
      <li class="li"> ￥${(res.price / 12).toFixed(2)} x 12期 </li>
      <li class="li"> ￥${(res.price / 24).toFixed(2)} x 24期 </li>
      <li> <i class="iconfont icon-wenhao"></i></li>`;

      if(cookie.get("shop")){

        $(".c0").html(JSON.parse(cookie.get("shop")).length);
      }



      $(".details_img").html(res.details);
      $(".shop_fenqi").html(fenqi);
      $(".shop_xinhao").html(xinhao);
      $(".pri_l").html(pri_l);
      $("#shop_title").html(`${res.title}`);

      $(".shop_price").html(pri_l);
      $(".big_img").html(li_img);
      $(".gs_bigbox").html(gs_bigbox_img);
      $(".small_img").html(small_img);
      $(".gsl_img").html(mask_img);
      $("#addItem").on("click", function () {
        addItem(res.id, $("#num").val());

        $(".c0").html(JSON.parse(cookie.get("shop")).length);
      });
      $("#shop_num").html(`还剩${res.num}件`);

      //给型号绑定点击事件



      $(".shop_xinhao li").on("click", function () {
        $(".shop_xinhao li").removeClass("current");

        $(this).toggleClass("current");
      });

      //给款式绑定点击事件
      $(".small_img li").on("click", function () {
        $(".small_img li").removeClass("current");

        $(this).toggleClass("current");
      });

      /* 给导航栏的地址区域添加点击改变事件*/
      var aDdres = document.querySelectorAll(".top_ul .item a");
      var aDdsho = document.querySelectorAll(".top_ul .add span")[0];
      for (var i = 0; i < aDdres.length; i++) {
        aDdres[i].onclick = function () {
          for (var j = 0; j < aDdres.length; j++) {
            aDdres[j].className = "";
          }
          aDdsho.innerText = this.innerText;
          this.className = "seaon";
        };
      }

      // 获取分期样式
      var fenQi = document.querySelectorAll(".fenqi .li");
      var baiTiao = document.querySelector(".baitiao");

      //获取商品图片展示的图片元素和上一张下一张按钮
      var imgList = document.querySelectorAll(".gs_l .gsl_list li");
      var imgShow = document.querySelector(".gs_l .gsl_img img");
      var prev = document.querySelector(".gs_l .icon-Group-");
      var next = document.querySelector(".gs_l .icon-you");
      var index = 0;

      //给分期样式绑定点击事件
      for (var i = 0; i < fenQi.length; i++) {

        fenQi[i].onclick = function () {
          for (var j = 0; j < fenQi.length; j++) {
            if (fenQi[j] == this) {
              this.className = "current";
            } else {
              fenQi[j].className = "";
            }
          }
          if (this.id != "nofq") {
            baiTiao.style.display = "block";
          } else {
            baiTiao.style.display = "none";
          }
        };
      }
  

      //放大镜
      var bigImg = document.querySelector(".gs_bigbox img");
      //给商品展示小图片绑定点击事件
      for (var i = 0; i < imgList.length; i++) {
        //给所有的li绑定一个index索引
        imgList[i].setAttribute("index", i);
        imgList[i].onclick = function () {
          index = this.getAttribute("index"); //每次点击给index重新复制下标
          imgShow.src = this.getAttribute("data-src");
          bigImg.src = imgShow.src;

          for (var j = 0; j < imgList.length; j++) {
            if (imgList[j] == this) {
              this.className = "current";
            } else {
              imgList[j].className = "";
            }
          }
        };
      }

      //上一张下一张切换事件
      prev.onclick = function () {
        index--;
        if (index < 0) {
          index = imgList.length - 1;
        }
        changeImg();
      };
      next.onclick = function () {
        index++;
        if (index > imgList.length - 1) {
          index = 0;
        }
        changeImg();
      };
      //封装改变图片样式的的方法
      function changeImg() {
        for (var j = 0; j < imgList.length; j++) {
          imgList[j].className = "";
        }
        imgList[index].className = "current";
        imgShow.src = imgList[index].getAttribute("data-src");
        bigImg.src = imgList[index].getAttribute("bigImg-src");
      }

      /* 商品图片放大展示效果 */
      var gsBigbox = document.querySelector(".gs_bigbox");
      var mask = document.querySelector(".mask");
      var gslImgbox = document.querySelector(".gsl_img");
      var gscontent = document.querySelector("#gscontent");
      gslImgbox.onmouseover = function () {
        gsBigbox.style.display = "block";
        mask.style.display = "block";
      };
      gslImgbox.onmouseout = function () {
        gsBigbox.style.display = "none";
        mask.style.display = "none";
      };
      //绑定鼠标移动事件
      gslImgbox.onmousemove = function (e) {
        e = e || window.event;
        var w =
          getPagePoint().pageX - gscontent.offsetLeft - mask.offsetWidth / 2;
        var h =
          getPagePoint().pageY - gscontent.offsetTop - mask.offsetHeight / 2;

        //边界检测
        w = w < 0 ? 0 : w;
        w = w > 112 ? 112 : w;
        h = h < 0 ? 0 : h;
        h = h > 112 ? 112 : h;
        mask.style.left = w + "px";
        mask.style.top = h + "px";

        //大图显示对应位置
        bigImg.style.left =
          (-w * gslImgbox.offsetWidth) / mask.offsetWidth + "px";
        bigImg.style.top =
          (-h * gslImgbox.offsetHeight) / mask.offsetHeight + "px";
      };
    })
    .catch((xhr) => {
      console.log(xhr.status);
    });
})();

function addItem(id, num) {
  // 获取购物车数据

  let shop = cookie.get("shop");
  let product = { id, num };

  if (shop) {
    // 判断是否已经有属性
    shop = JSON.parse(shop); // cookie中已经有数据情况 将数据转成数组
    // shop.push(product);

    // 判断当前商品在购物车数据中是否已经存在 如果存在则修改数量 不存在则添加
    if (shop.some((el) => el.id == id)) {
      let index = shop.findIndex((elm) => elm.id == id); // 获得当前商品id在数组中的索引
      let count = parseInt(shop[index].num); // 获得当前数量
      count += parseInt(num);
      shop[index].num = count;
    } else {
      shop.push(product);
    }
  } else {
    shop = [];
    shop.push(product);
  }

  cookie.set("shop", JSON.stringify(shop), 1);
  alert("您已成功加入购物车");
}

function getPageScroll() {
  var scrollLeft =
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0;
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  return {
    scrollLeft: scrollLeft, //左边是对象属性名，右边是属性值
    scrollTop: scrollTop,
  };
}

function getClientSize() {
  return {
    clientWidth:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      0,
    clientHeight:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0,
  };
}

function getPagePoint(e) {
  e = e || window.event; //事件对象兼容
  return {
    pageX: e.pageX || getPageScroll().scrollLeft + e.clientX,
    pageY: e.pageY || getPageScroll().scrollTop + e.clientY,
  };
}
$(function(){
  $('.logo').on('click',function(){
    location.href='../html/index.html'
  })
})


//登陆后修改用户名
$(function () {
  if (cookie.get("isLogined")) {
    let login = `<a href="login.html">你好，${cookie.get("username")}</a>`;
    $("#login").html(login);
    let exit = `<a href="login.html">退出登录</a><span>|</span>`;
    $("#register").html(exit);
    $("#register").on("click", function () {
      cookie.set("isLogined", " ");
      location.reload();
    });
  }
  $('.logo').on('click',function(){
    location.href='../html/index.html'
  })
});
