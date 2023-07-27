// TODO
document.getElementById("settingsTrigger").addEventListener("click", () => {
    // alert("i didn't implement this yet :~)");
    let settingModalOverlay = document.getElementsByClassName("settingModalOverlay")[0]
    settingModalOverlay.style.display = "inherit";
    settingModalOverlay.className = "settingModalOverlay fadeIn";

    // set preselected theme
    let cookieTheme = document.cookie.split("; ").find((row) => row.startsWith("93e8f3ca5c740f21a8c0992="))?.split("=")[1]
    document.getElementById("themeColor").value = (cookieTheme === undefined) ? "dark" : cookieTheme;

    // process theme color change
    document.getElementById("themeColor").addEventListener("change", (e) => {
        document.cookie = `93e8f3ca5c740f21a8c0992=${e.target.value}`;
        document.body.className = e.target.value;
        console.log(e.target.value);
    });

    // reset progress button
    document.getElementById("resetProgress").addEventListener("click", (e) => {
        if (confirm("Are you sure you would like to reset your progress? This action cannot be reversed.")) {
            document.cookie = `735369a9857a9f670dea0=0`;
            alert("Progress reset successfully.");
            window.location.reload();
        } else {
            alert("Cancelled data reset.");
        }
    });

    // import save data button
    document.getElementById("importSaveData").addEventListener("change", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // export save data button
    document.getElementById("exportSaveData").addEventListener("click", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // toggle accessability / reduced transparency
    document.getElementById("reduceUITransparency").addEventListener("change", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // process close window button
    document.getElementsByClassName("closeSettingsModal")[0].onclick = () => {
        settingModalOverlay.className = "settingModalOverlay fadeOut";
    };

    // close dialog on escape key
    document.addEventListener('keypress', (e) => {
        if (e.key === "Escape") {
            settingModalOverlay.className = "settingModalOverlay fadeOut";
        }
    });
});