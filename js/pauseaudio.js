var audios = document.getElementsByTagName("audio");
// 暂停函数
function pauseAll() {
    var currentAudio = this;
    [].forEach.call(audios, function(audio) {
        // 将audios中其他的audio全部暂停
        if (audio !== currentAudio && !audio.paused) {
            audio.pause();
        }
    });
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function(audio) {
    audio.addEventListener("play", pauseAll);
});