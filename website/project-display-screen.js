var currentSelection = 0
col2_dom = document.getElementsByClassName('subset');

function itemA_onClick(selection) {
    if (currentSelection !== selection) {
        currentSelection = selection
        offset = selection * 100
        for (let i=0; i<col2_dom.length; i++) {
            col2_dom.item(i).style.right = offset + "%"
        }
    }
}