$(document).ready(function () {
  var pos = ["40px", "152px", "264px", "376px", "488px"];
  $(".main_menu > .menu_item").mouseover(function () {
    var i = $(this).index(); //0,1,2,3,4
    console.log(pos[i]);
    $(".menu_line").css("opacity", "1").css("left", pos[i]);
    $(".sub_menu").eq(i).css("height", "56px");
  });
  $(".main_menu > .menu_item").mouseout(function () {
    $(".sub_menu").css("height", "");
    $(".menu_line").css("opacity", ""); // 설정된 값 제거
  });
  $(".sub_menu").mouseover(function () {
    $(this).css("height", "56px");
  });
  $(".sub_menu").mouseout(function () {
    $(this).css("height", "");
  });
});
