$(".menu>ul").click(function () {
  // 현재 클릭한 ul이 이미 활성화되어 있는지 확인
  if ($(this).hasClass("on")) {
    // 이미 활성화되어 있다면 제거하여 다시 클릭 가능하도록 함
    $(this).removeClass("on");
    // 활성화된 .menu-bar도 제거
    $(".menu-bar").removeClass("active");
  } else {
    // 현재 클릭한 ul에 on 클래스 추가하여 활성화
    $(".menu>ul").removeClass("on");
    this.classList.add("on");

    // 모든 .menu-bar에서 active 클래스 제거
    $(".menu-bar").removeClass("active");

    // 현재 클릭한 ul에 해당하는 .menu-bar에 active 클래스 추가
    var mynum = this.dataset.tab;
    $(".menu-bar").eq(mynum).addClass("active");

    // .menu-bar가 ul 아래에서 더 아래에 나타나도록 처리
    var topOffset = $(this).position().top + $(this).outerHeight() + 40; // 조정된 값
    $(".menu-bar").css("top", topOffset + "px");
  }
});
