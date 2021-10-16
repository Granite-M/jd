import $ from "./interface/library/jquery.js";
import cookie from "./interface/library/cookie.js";

let shop = cookie.get("shop");

if (shop) {
  shop = JSON.parse(shop);

  let idList = shop.map((el) => el.id).join();

  $.ajax({
    type: "get",
    url: "../js/interface/getshop.php",

    data: {
      idList,
    },
    dataType: "json",
  })
    .then((res) => {
      let li = "";

      res.forEach((el, i) => {
        let type = JSON.parse(el.type)[0].type[0];
        let picture = JSON.parse(el.picture);

        let current = shop.filter((elm) => elm.id === el.id);

        li += `
            <li><input type="checkbox" checked> <img src="${
              picture[0].src
            }" alt="${picture[0].alt}">
            <p>${el.title}</p>
            <div class="type">${type}</div>
            <div class="price">￥${parseFloat(el.price).toFixed(2)}</div>
             <input type="number" value="${current[0].num}" max="${
          el.num
        }" min="1">
            <div class="li_sum">￥${(el.price * current[0].num).toFixed(
              2
            )}</div> <a href="" class="del" data-id="${el.id}">删除</a>
              </li>`;
      });
      //删除一件商品
      $(".shoplist")
        .html(li)
        .find(".del")
        .on("click", function () {
          let res = shop.filter((el) => el.id !== $(this).attr("data-id"));
          cookie.set("shop", JSON.stringify(res), 1);
          // location.reload();
        });
      //修改小计
      $(".shoplist")
        .find("li")
        .find("[type=number]")
        .on("change", function () {
          let li_sum =
            $(this).val() *
            parseFloat($(this).parent().find(".price").text().slice(1));

          $(this)
            .parent()
            .find(".li_sum")
            .html(`￥${li_sum.toFixed(2)}`);
        });
      let top_num = `<h3>您有<span >${
        $(".shoplist").find("li").length
      }</span>件商品</h3>`;
      $(".top_num").html(top_num);

      $("#shop_num").html($(".shoplist li [type=checkbox]").length);

      //全选按钮  总价功能  控制单个商品是否勾选
      $(".allcheck").on("click", function () {
        //控制单个商品是否勾选
        $(".shoplist li [type=checkbox]").prop(
          "checked",
          $(this).prop("checked")
        );
        //总价功能
        if ($(this).prop("checked")) {
          jisuan();
        } else {
          $("#sum").html(`￥0.00`);
        }
      });
      jisuan();
      //单个商品勾选之后总价发生变化  判断全选按钮 是否勾选
      $(".shoplist li [type=checkbox]").on("click", function () {
        //判断全选按钮 是否勾选
        let check_all = [...$(".shoplist li [type=checkbox]")].every(function (
          ele,
          i
        ) {
          return $(ele).prop("checked") == true;
        });
        if (check_all) {
          $(".allcheck").prop("checked", true);
        } else {
          $(".allcheck").prop("checked", false);
        }

        //判断计算选中几件商品
        checked_num();
        //单个商品勾选之后总价发生变化
        let sum = parseFloat($("#sum").html().slice(1));
        if ($(this).prop("checked")) {
          //num发生变化

          sum += parseFloat($(this).parent().find(".li_sum").html().slice(1));
        } else {
          sum -= parseFloat($(this).parent().find(".li_sum").html().slice(1));
        }
        $("#sum").html(`￥${sum.toFixed(2)}`);
      });

      $(".shoplist li [type=number]").on("click", function () {
        jisuan();
      });
    })
    .catch((xhr) => {
      console.log(xhr.status);
    });
}

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

//计算总价
function jisuan() {
  let sum = 0;

  [...$(".shoplist li [type=checkbox]")].forEach(function (ele, i) {
    //选择勾选的元素 计算总价
    if ($(ele).prop("checked")) {
      sum += parseFloat($(ele).parent().find(".li_sum").html().slice(1));
      $("#sum").html(`￥${sum.toFixed(2)}`);
    }
  });
}

//计算选中几件商品
function checked_num() {
  let num = 0;
  [...$(".shoplist li [type=checkbox]")].forEach(function (ele, i) {
    if ($(ele).prop("checked")) {
      num++;
    }
  });
  $("#shop_num").html(num);
}

//结算

$("#jiesuan").on("click", function () {
  let cookie_shop =JSON.parse(cookie.get("shop"))

  let bool = confirm(`您需支付${$("#sum").html()},确认支付吗？`);
  if (bool) {

    [...$(".shoplist li [type=checkbox]")].forEach(function (ele, i) {
      console.log($(ele).prop("checked"));
      if ($(ele).prop("checked")) { 
        let del =$(ele).parent().find('.del')

        let res = cookie_shop.filter((el) => el.id !== $(del).attr("data-id"));
        console.log(res);

        cookie.set("shop", JSON.stringify(res), 1);
        cookie_shop =JSON.parse(cookie.get("shop"))

      }
    });

    location.reload()
  }
});
