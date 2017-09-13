var streamers = ["ESL_SC2", 
				"OgamingSC2", 
				"cretetion", 
				"freecodecamp", 
				"storbeck", 
				"habathcx", 
				"RobotCaleb", 
				"noobs2ninjas"];

const SAMPLE_API_RESP = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
]


// Perform information from JSON raw to twitch channels desk
var mainChannels = document.getElementById('main-channels-id');
var mainChannelName = document.getElementsByClassName("main-channels-box-name");
var channelState = document.getElementsByClassName('main-channels-box-state');
var mainChannelDescription = document.getElementsByClassName('main-channels-box-desc');

for (var i = 0; i < SAMPLE_API_RESP.length; i++) {
	mainChannels.appendChild(addChannelRaw());
  
  if (SAMPLE_API_RESP[i].error == "Not Found") {
  	mainChannelDescription[i].textContent = SAMPLE_API_RESP[i].message;
  	channelState[i].setAttribute("data-state", "notexist");

  } else if (SAMPLE_API_RESP[i].stream === null) {
			var channelBoxDiv = document.getElementsByClassName("main-channels-box");
			mainChannelName[i].textContent = SAMPLE_API_RESP[i].display_name;
			channelState[i].className += " offline";
			channelState[i].setAttribute("data-state", "offline");	

		} else {
			mainChannelName[i].textContent = SAMPLE_API_RESP[i].stream.display_name;
			channelState[i].className += " online";
			channelState[i].setAttribute("data-state", "online");
			mainChannelDescription[i].textContent = SAMPLE_API_RESP[i].stream.status;

		}
}


// Add filter functinality to buttjns
var btnAll = document.getElementById("button-all");
var btnOn = document.getElementById("button-on");
var btnOff = document.getElementById("button-off");

btnAll.addEventListener("click", function() {
	var channelBoxDiv = document.getElementsByClassName("main-channels-box");

	for (var i = 0; i < channelBoxDiv.length; i++) {
		if (channelBoxDiv[i].style.display === 'none') {
		channelBoxDiv[i].style.display = 'block';
		}
	}	
});

btnOn.addEventListener("click", function() {
	var channelBoxDiv = document.getElementsByClassName("main-channels-box");

	for (var i = 0; i < channelBoxDiv.length; i++) {
		if (channelState[i].getAttribute("data-state") === 'online') {
			channelBoxDiv[i].style.display = 'block';
		}
		else {
			channelBoxDiv[i].style.display = 'none';
		}
	}	
});

btnOff.addEventListener("click", function() {
	var channelBoxDiv = document.getElementsByClassName("main-channels-box");

	for (var i = 0; i < channelBoxDiv.length; i++) {
		if (channelState[i].getAttribute("data-state") === 'offline') {
			channelBoxDiv[i].style.display = 'block';
		}
		else {
			channelBoxDiv[i].style.display = 'none';
		}
	}	
});



function addChannelRaw() {
	var channelBoxDiv = document.createElement("div");
	channelBoxDiv.className = "main-channels-box";
	channelBoxDiv.innerHTML += 
		'<h3 class="main-channels-box-name" id="channel-name"></h3>' +
		'<p class="main-channels-box-state" id="channel-state"></p>' +
		'<p class="main-channels-box-desc" id="channel-description">channel is offline.</p>';

	return channelBoxDiv;
}