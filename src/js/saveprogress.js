function setPageAsRead(pageUID = 0, elementNumber = 0) {
    let cookieValue = document.cookie.split("; ").find((row) => row.startsWith("735369a9857a9f670dea0="))?.split("=")[1];
    if (cookieValue === undefined || window.completepages === undefined) {
        window.completepages = cookieValue === undefined ? [pageUID] : cookieValue.split(",").map(element => {return Number(element)});
        if (cookieValue === undefined) {
            document.cookie = `735369a9857a9f670dea0=${pageUID}`;
            document.getElementsByClassName("tocItem")[elementNumber].firstChild.className = "tocItemHalign tocComplete";
        }
    } else {
        if (!cookieValue.split(",").map(element => {return Number(element)}).includes(pageUID)) {
            window.completepages.push(pageUID);
            document.cookie = `735369a9857a9f670dea0=${window.completepages.join(",")}`;
            document.getElementsByClassName("tocItem")[elementNumber].firstChild.className = "tocItemHalign tocComplete";
            document.getElementById("progressIndicator").textContent = Math.round((cookieValue.split(",").length / pageManifest.length) * 100)
        }
    }
}