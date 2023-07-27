document.body.className = document.cookie.split("; ").find((row) => row.startsWith("93e8f3ca5c740f21a8c0992="))?.split("=")[1];

pageManifest.forEach((e, i) => {
    let c = document.createElement("div");
    c.className = i === 0 ? "tocItem tocSelectedItem" : "tocItem";
    c.setAttribute("pageID", e.id);
    let s = document.createElement("div");
    s.className = "tocItemHalign";
    let t = document.createElement("span");
    t.className = "tocItemTitleHolder";
    t.innerText = e.title;
    s.appendChild(t);
    c.appendChild(s);
    document.getElementsByClassName("tocContents")[0].appendChild(c);
});

const tocItems = Array.from(document.getElementsByClassName("tocItem"))

window.currentPage = 0;

tocItems.forEach((tocItem) => {
    tocItem.onclick = () => {
        tocItems[window.currentPage].classList.remove("tocSelectedItem");
        loadPage(tocItems.indexOf(tocItem));
        tocItems[tocItems.indexOf(tocItem)].classList.add("tocSelectedItem");
    };
    tocItem.firstChild.classList = document.cookie
        .split("; ")
        .find((row) => row.startsWith("735369a9857a9f670dea0="))
        ?.split("=")[1]
        .split(",")
        .includes(tocItem.getAttribute("pageid"))
        ? "tocItemHalign tocComplete"
        : "tocItemHalign tocIncomplete";
});

document.getElementById("progressIndicator").textContent = Math.round(
    (document.cookie.split("; ").find((row) => row.startsWith("735369a9857a9f670dea0="))?.split("=")[1].split(",").length / pageManifest.length) * 100
);