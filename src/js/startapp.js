const tocItems = Array.from(document.getElementsByClassName("tocItem"))

window.currentPage = 0;

tocItems.forEach((tocItem) => {
    tocItem.onclick = () => {
        tocItems[window.currentPage].classList.remove("tocSelectedItem");
        loadPage(tocItems.indexOf(tocItem));
        tocItems[tocItems.indexOf(tocItem)].classList.add("tocSelectedItem");
    };
});