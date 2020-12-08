var hideMedia = function () {
    $("img,video,canvas,svg").remove();
    $(".html5-video-player").remove();
    $('[type="application/x-shockwave-flash"]').remove();
    $("*")
        .filter(function () {
            if (this.currentStyle) { 
                return this.currentStyle["backgroundImage"] !== "none";
            }
            else if (window.getComputedStyle) {
                return document.defaultView.getComputedStyle(this, null).getPropertyValue("background-image") !== "none";
            }
        })
        .each(function () {
            this.style.setProperty("background-image", "none", "important");
        });
};
hideMedia();
setInterval(function () {
    hideMedia();
}, 2000);