$("#main").prepend(`
   <div class="col-lg-5 col-md-5 additionalByScript" id="twitchChat">
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/pwgood/chat?parent=synchtube.ru&darkpopout">
      </iframe>
   </div>
`);

console.log("🟣 Создан чат Twitch");

rollScreen = true;

bRoller = function() {
  var s = document.body.style;
  s.setProperty("-moz-transform", "rotate(7200deg)");
  s.setProperty("-moz-transition-duration", "4s");
  s.setProperty("-moz-transition-property", "all");
  s.setProperty("-webkit-transform", "rotate(7200deg)");
  s.setProperty("-webkit-transition-duration", "4s");
  s.setProperty("-webkit-transition-property", "all");
  s.setProperty("-o-transform", "rotate(7200deg)");
  s.setProperty("-o-transition-duration", "4s");
  s.setProperty("-o-transition-property", "all");
  s.setProperty("transform", "rotate(7200deg)");
  s.setProperty("transition-duration", "4s");
  s.setProperty("transition-property", "all");
  s.setProperty("overflow", "hidden");

  setTimeout(function() {
    s.removeProperty("-moz-transform");
    s.removeProperty("-moz-transition-duration");
    s.removeProperty("-moz-transition-property");
    s.removeProperty("-webkit-transform");
    s.removeProperty("-webkit-transition-duration");
    s.removeProperty("-webkit-transition-property");
    s.removeProperty("-o-transform");
    s.removeProperty("-o-transition-duration");
    s.removeProperty("-o-transition-property");
    s.removeProperty("transform");
    s.removeProperty("transition-duration");
    s.removeProperty("transition-property");
    s.removeProperty("overflow");
    rollScreen = true;
  }, 4000);
};

doBarrelRoll = function() {
  if (rollScreen) {
    rollScreen = false;
    bRoller();
  }
};

$("#leftcontrols").append(
  '<button class="btn btn-sm btn-default additionalByScript" id="doabarrelroll">Поржать <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/rolling-on-the-floor-laughing_1f923.png" height="17px"></button>'
);

$("#leftcontrols").append(
  `<div class="btn-group additionalByScript" role="group" aria-label="chat">
        <button class="btn btn-sm btn-default btn-disabled disabled" disabled>Высота чата</button>
        <button class="btn btn-sm btn-default" id="plus10">+</button>
        <button class="btn btn-sm btn-default" id="minus10">-</button>
  </div>`
);
$("#leftcontrols").append(
  `<div class="btn-group ml-2 additionalByScript" role="group" aria-label="chat">
        <button class="btn btn-sm btn-default btn-disabled disabled" disabled>Чат</button>
        <button class="btn btn-sm btn-default" id="twitchChatShow">Twitch</button>
        <button class="btn btn-sm btn-default" id="synchChatShow">Synch</button>
  </div>`
);

$("#rightcontrols").append(
  `<div class="btn-group additionalByScript" role="group" aria-label="chat">
          <button class="btn btn-sm btn-default btn-disabled disabled" disabled>Дистанция</button>
          <button class="btn btn-sm btn-default" id="plus10player">+</button>
          <button class="btn btn-sm btn-default" id="minus10player">-</button>
    </div>`
);
 

$("#twitchChatShow").click(function() {
  $("#chatwrap").hide();
  $("#twitchChat").show();
});

$("#synchChatShow").click(function() {
  $("#chatwrap").show();
  $("#twitchChat").hide();
});

function makeAHeight() {
  $("#userlist").height(localStorage.getItem("chatHeight") - 100);
  $("#messagebuffer").height(localStorage.getItem("chatHeight") - 90);
}

if (localStorage.getItem("chatHeight") !== null) {
  $("#chat_embed").height(localStorage.getItem("chatHeight"));
  console.log(`🤓 Высота чата: ${localStorage.getItem("chatHeight")}px`)
  setTimeout(makeAHeight, 3000);
}


$("#plus10").click(function() {
  $("#chat_embed").height($("#chat_embed").height() + 10);
  localStorage.setItem("chatHeight", $("#chat_embed").height());
  $("#userlist").height(localStorage.getItem("chatHeight") - 100);
  $("#messagebuffer").height(localStorage.getItem("chatHeight") - 90);
  console.log(`🤓 Увеличение на 10px, теперь высота чата - ${localStorage.getItem("chatHeight")}px`)
});
$("#minus10").click(function() {
  $("#chat_embed").height($("#chat_embed").height() - 10);
  localStorage.setItem("chatHeight", $("#chat_embed").height());
  $("#userlist").height(localStorage.getItem("chatHeight") - 100);
  $("#messagebuffer").height(localStorage.getItem("chatHeight") - 90);
  console.log(`🤓 Уменьшение на 10px, теперь высота чата - ${localStorage.getItem("chatHeight")}px`)
});

if (localStorage.getItem("videocontrolDistance") !== null) {
  $("#rightcontrols").css("margin-top", localStorage.getItem("videocontrolDistance"));
  $("#rightpane-inner").css("margin-top", localStorage.getItem("videocontrolDistance"));
  console.log(`🤓 Между видео и управлением плейлистом - ${localStorage.getItem("videocontrolDistance")}px`)
}

$("#plus10player").click(function() {
  $("#rightcontrols").css("margin-top", "+=10");
  $("#rightpane-inner").css("margin-top", "+=10");
  localStorage.setItem("videocontrolDistance", $("#rightpane-inner").css("margin-top"));
  console.log(`🤓 Уменьшение на 10px, теперь между видео и управлением плейлистом - ${localStorage.getItem("videocontrolDistance")}`)
});
$("#minus10player").click(function() {
  $("#rightcontrols").css("margin-top", "-=10");
  $("#rightpane-inner").css("margin-top", "-=10");
  localStorage.setItem("videocontrolDistance", $("#rightpane-inner").css("margin-top"));
  console.log(`🤓 Уменьшение на 10px, теперь между видео и управлением плейлистом - ${localStorage.getItem("videocontrolDistance")}`)
});

$("#doabarrelroll").click(function() {
  doBarrelRoll();
});

$("#wrap > nav > div.navbar-header > a > img").attr(
  "src",
  "https://cdn.betterttv.net/emote/5e1bd08688e62a5f14dc6316/3x"
);
$("#nav-collapsible > ul > li:nth-child(4) > a").html(
  "Кастомизация <b class='caret'></b>"
);
$("#nav-collapsible > ul > li:nth-child(4) > ul > li:nth-child(1) > a").html(
  "Убрать всё, кроме чата"
);
$("#nav-collapsible > ul > li:nth-child(4) > ul > li:nth-child(2) > a").html(
  "Убрать плеер"
);
$("#nav-collapsible > ul > li:nth-child(4) > ul").append(
  '<li><a id="hideChat" class="additionalByScript" href="#">Убрать чат</a></li>'
);
$("#nav-collapsible > ul > li:nth-child(4) > ul").append(
  '<li><a id="hideBottom" class="additionalByScript" href="#">Убрать нижнюю часть</a></li>'
);

function hideChat() {
  $("#leftcontrols").hide();
  $("#chatwrap").hide();
  $("#twitchChat").hide();
  $("#videowrap")
    .removeClass("col-lg-7")
    .removeClass("col-md-7")
    .removeClass("col-12");
  $("#rightpane")
    .removeClass("col-lg-7")
    .removeClass("col-md-7")
    .removeClass("col-12");
  $("#leftpane").remove();
}

function hideBottom() {
  $("#playlistrow").remove();
  $("#rightcontrols").remove();
  $("#footer").remove();
}

$("#hideChat").click(function() {
  hideChat();
});
$("#hideBottom").click(function() {
  hideBottom();
});

console.log("🔧 Созданы дополнительные кнопки управления");
  
// if (filmMode == true) {
 
//   setInterval($("#currenttitle").text("Фильм: " + filmName), 1000);
//   $(".embed-responsive").append(`
// <div class="embed-responsive embed-responsive-16by9 additionalByScript filmModeThing">
// <iframe
//   src=${filmURL}
//   referrerpolicy="origin"
//   scrolling="no"
//   class="filmModeThing"
//   allowfullscreen>
// </iframe>
// </div>`);
//   $("#ytapiplayer").hide();
//   $("#playlistrow").hide();
//   $("#rightpane").hide();
//   $("#rightcontrols").hide();
//   setFilmName();
//   //$(".filmModeThing").css("padding-bottom", "60.25%");
// } else {
//   $(".filmModeThing").remove();
//   $("#ytapiplayer").show();
//   $("#playlistrow").show();
//   $("#rightpane").show();
//   $("#rightcontrols").show();
//   $("#currenttitle").show();
//   $("#currenttitle").text("N/A");
// }

function setQuality(quality) {
      document.querySelector("video.vjs-tech").src=(document.querySelector("video.vjs-tech").src).replace(/[0-9]*.mp4/, `${quality}.mp4`);
      document.querySelector("video.vjs-tech>source").src=(document.querySelector("video.vjs-tech").src).replace(/[0-9]*.mp4/, `${quality}.mp4`);
}

var filmNative = false;

function filmMode() {
    if (filmNative === false && $("#currenttitle").text().toLowerCase().substring(0,8) == "videocdn") {
        var filmNative = true;
        $("#rightcontrols").append(
        `<div class="dropdown qualityGroup additionalByScript ml-2">
           <button class="btn btn-default dropdown-toggle" type="button" id="qMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             Качество
             <span class="caret"></span>
           </button>
           <ul class="dropdown-menu" aria-labelledby="qMenu1">
             <li><a href="#" class="qualityBtn 240">240 рублей</a></li>
             <li><a href="#" class="qualityBtn 360">360 рублей</a></li>
             <li><a href="#" class="qualityBtn 480">480 рублей</a></li>
             <li><a href="#" class="qualityBtn 720">720 рублей</a></li>
           </ul>
          </div>`
        );
    }
    else if (filmNative == true && $("#currenttitle").text().toLowerCase().substring(0,8) !== "videocdn") {
        var filmNative = false;
        $("#qualityGroup").remove();
    }
}


setInterval(filmMode, 5000);

function setQuality(quality) {
      document.querySelector("video.vjs-tech").src=(document.querySelector("video.vjs-tech").src).replace(/[0-9]*.mp4/, `${quality}.mp4`)
      document.querySelector("video.vjs-tech>source").src=(document.querySelector("video.vjs-tech").src).replace(/[0-9]*.mp4/, `${quality}.mp4`)
}

console.log("🎥 Создано управление фильмом");

