$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];
  const hello = "Привет, я бот Вася!";
  const goodbye = "До свидания!";
  const bye = "Пока!";

  $("h1").css("color", "red");

  $("#answers").append(`<div class="bot_answ">${hello}</div>`);

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#question").click(function () {
    return false;
  });

  $("#answers").click(function () {
    return false;
  });

  $("#ok").click(function () {
    let q = $("#question").val();

    if (q.trim() != "") {
      $("#answers").append(`<div class="human_answ">${q.trim()}</div>`);
      let ql = q.toLowerCase();
      let bl = bye.substr(0, bye.length - 1).toLowerCase();
      $("#chatbot").scrollTop(chatbot.scrollHeight - chatbot.clientHeight);
      setTimeout(function () {
        if (ql.search(bl) != -1) {
          $("#answers").append(`<div class="bot_answ">${bye}</div>`);
        } else {
          $("#answers").append(`<div class="bot_answ">!!!</div>`);
        }

        let chatbot = document.getElementById("chatbot");
        $("#chatbot").scrollTop(chatbot.scrollHeight - chatbot.clientHeight);
        // $("#chatbot").animate(
        //   {
        //     scrollTop: chatbot.scrollHeight - chatbot.clientHeight,
        //   },
        //   500
        // );
      }, 1000);
    }
    return false;
  });

  $("#question").keypress("keyup", function (event) {
    if (event.keyCode == 13) {
      console.log(event.keyCode);
      $("#ok").click();
      return false;
    }
  });
});