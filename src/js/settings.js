// TODO
document.getElementById("settingsTrigger").addEventListener("click", () => {
    // alert("i didn't implement this yet :~)");
    let settingModalOverlay = document.getElementsByClassName("settingModalOverlay")[0]
    settingModalOverlay.style.display = "inherit";
    settingModalOverlay.className = "settingModalOverlay fadeIn";
    document.getElementsByClassName("closeSettingsModal")[0].onclick = () => {
        settingModalOverlay.className = "settingModalOverlay fadeOut";
    };
    document.addEventListener('keypress', (e) => {
        if (e.key === "Escape") {
            settingModalOverlay.className = "settingModalOverlay fadeOut";
        }
    });
});