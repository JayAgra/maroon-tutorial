class Page {
    /**
     * @param {String} pageTitle - title of page, should be short. displayed in table of contents
     * @param {String} fileName - name of the file that contains the page. should NOT contain /src/pages
     * @param {Number} uniqueID - can be literally any Number, but should be short and must be **unique**
     */
    constructor(pageTitle = "Untitled Page", fileName = "0.xml", uniqueID = 0) {
        this.src = fileName;
        this.title = pageTitle;
        this.id = uniqueID;
    }
}

const pageManifest = [
    new Page("interesting document", "0.xml", 0),
    new Page("i like being unproductive", "1.xml", 1),
    new Page("aaaaaa", "2.xml", 2),
    new Page("content system test", "test.xml", 4),
    new Page("lengthy title test because i need to see if lengthy titles lengthyyyyyy", "lengthy.xml", 5),
];