function ClearFields() {
    document.getElementById("usedBrowser").value = "";
    document.getElementById("usedBrowserLanguage").value = "";
    document.body.style.backgroundColor = "white";
}
function btnShow() {
    let selectionID = document.getElementById("mySelect").selectedIndex;
    let domain = location.hostname;
    let path = location.pathname;
    if (selectionID == 0)
        alert("Domain: " + domain);
    if (selectionID == 1)
        alert("Path: " + path);
}
