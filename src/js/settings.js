// TODO
document.getElementById("settingsTrigger").addEventListener("click", () => {
    let settingModalOverlay = document.getElementsByClassName(
        "settingModalOverlay"
    )[0];
    settingModalOverlay.style.display = "inherit";
    settingModalOverlay.className = "settingModalOverlay fadeIn";

    // set preselected theme
    let cookieTheme = document.cookie
        .split("; ")
        .find((row) => row.startsWith("93e8f3ca5c740f21a8c0992="))
        ?.split("=")[1];
    document.getElementById("themeColor").value =
        cookieTheme === undefined ? "dark" : cookieTheme;

    // process theme color change
    document.getElementById("themeColor").addEventListener("change", (e) => {
        document.cookie = `93e8f3ca5c740f21a8c0992=${e.target.value}`;
        document.body.className = e.target.value;
        console.log(e.target.value);
    });

    // reset progress button
    document.getElementById("resetProgress").addEventListener("click", (e) => {
        if (
            confirm(
                "Are you sure you would like to reset your progress? This action cannot be reversed."
            )
        ) {
            document.cookie = `735369a9857a9f670dea0=0`;
            alert("Progress reset successfully.");
            window.location.reload();
            throw new Error("reloading");
        } else {
            alert("Cancelled data reset.");
        }
    });

    // import save data button
    document
        .getElementById("importSaveData")
        .addEventListener("change", (e) => {
            if (e.target.files.length) {
                var saveReader = new FileReader();
                saveReader.onload = function (readerE) {
                    document.cookie = atob(readerE.target.result);
                    alert("Done!");
                    window.location.reload();
                    throw new Error("reloading");
                };
                saveReader.readAsBinaryString(e.target.files[0]);
            }
        });

    // export save data button
    document.getElementById("exportSaveData").addEventListener("click", (e) => {
        var dLink = document.createElement("a");
        dLink.setAttribute(
            "href",
            "data:application/octet-stream;charset=utf-8," +
                encodeURIComponent(btoa(document.cookie))
        );
        dLink.setAttribute("download", Date.now() + ".maroonsave");
        dLink.style.display = "none";
        document.body.appendChild(dLink);
        dLink.click();
        document.body.removeChild(dLink);
    });

    // process close window button
    document.getElementsByClassName("closeSettingsModal")[0].onclick = () => {
        settingModalOverlay.className = "settingModalOverlay fadeOut";
    };

    // install service worker
    document.getElementById("installSw").addEventListener("click", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // update service worker
    document.getElementById("updateSw").addEventListener("click", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // uninstall service worker
    document.getElementById("uninstallSw").addEventListener("click", (e) => {
        alert("i didn't implement this yet :~)");
    });

    // close dialog on escape key
    document.addEventListener("keypress", (e) => {
        if (e.key === "Escape") {
            settingModalOverlay.className = "settingModalOverlay fadeOut";
        }
    });
});