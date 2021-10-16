import $ from "./interface/library/jquery.js";

$(function () {
  let username = document.querySelector("#username");
  let password1 = document.querySelector("#password1");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  phone.reg =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  email.reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  password.reg =
    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  username.reg = /^[a-zA-Z0-9_-]{4,16}$/;
  function test(ele) {
    ele.addEventListener("blur", function () {
      if (ele.parentElement.nextElementSibling.nodeName === "P") {
        ele.parentElement.nextElementSibling.remove();
      }
      let val = ele.value;
      //清除空格
      val = val.replace(/[\s]*/gi, "");
      let flag = ele.reg.test(val);
      if (!flag) {
        let p = document.createElement("p");
        if (val) {
          p.innerHTML = "格式不正确";
        } else {
          p.innerHTML = "请输入正确的内容";
        }
        ele.parentElement.after(p);
      }
    });
  } //------------------------------------------------------------------------------

  //ajax请求

  $("#username").on("input", function () {
    $.get(
      "../js/interface/hasuser.php",
      {
        username: $(username).val(),
      },
      function (response) {
        if (username.parentElement.nextElementSibling.nodeName === "P") {
          username.parentElement.nextElementSibling.remove();
        }
        if (response.has) {
          let p = document.createElement("p");
          p.innerHTML = "用户名已存在";
          username.parentElement.after(p);
        }
      },
      "json"
    );
  });

  //------------------------------------------------------------------------------

  test(username);
  test(password);
  test(email);
  test(phone);
  password1.onblur = function () {
    if (password1.parentElement.nextElementSibling.nodeName === "P") {
      password1.parentElement.nextElementSibling.remove();
    }
    if (!(password1.value === password.value)) {
      let p = document.createElement("p");
      p.innerHTML = "两次输入的密码不一致";
      password1.parentElement.after(p);
    }
  };

  $('.logo').on('click',function(){
    location.href='../html/index.html'
  })
});

function   random_6(){
 
  let arr=[]
  for (let i = 0; i < 6; i++) {
   
    arr.push(Math.floor(Math.random()*10))
    
    
  }
  let str=arr.join('')
  return str
}

$('#get_phone_test').on('click',function(){
  $('#phonetest').val(random_6())
})
$('#get_email_test').on('click',function(){
  $('#emailtest').val(random_6()) 
})