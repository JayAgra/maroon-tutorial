function loadPage(pnum = 0) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `src/pages/${pageManifest[pnum].src}`, true);

    xhr.onreadystatechange = async () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log("200 ok");
            document.getElementById("articleContentElement").innerHTML =
                xhr.responseText;
            hljs.highlightAll();
            window.currentPage = pnum;
            setPageAsRead(pageManifest[pnum].id, pnum);
            return;
        } else if (xhr.status === 401) {
            console.log("401 failure");
        } else if (xhr.status === 400) {
            console.log("400 failure");
        } else if (xhr.status === 500) {
            console.log("500 failure");
        } else {
            console.log("awaiting response");
        }
    };

    xhr.send();
}
