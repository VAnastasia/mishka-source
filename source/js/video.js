var video = document.querySelector(".video");
var videoButton = video.querySelector(".video__button");

videoButton.addEventListener("click", function () {
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/F6gnmChf7fM?enablejsapi=1&rel=0";
  iframe.className = "video__iframe";
  video.appendChild(iframe);
})
