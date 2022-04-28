const subsets = document.getElementsByClassName('subset');
const retexes = document.getElementsByClassName('retex-subset');
var c1_selected = 0;
var c2_selected = 0;

function changeSubset_B() {
    const c1_val = document.querySelector('input[name="c1-items"]:checked').value
    if (c1_selected != c1_val) {
        for (let i=0; i<subsets.length; i++) {
            subsets[i].style.bottom = c1_val * 100 + "%";
        }
        c1_selected = c1_val;
    }
}

function changeRetex(colLetter) {
    const c2Name  = "c2-items-" + colLetter;
    const c2Items = document.querySelector('input[name='+c2Name+']:checked');
    const c2_val  = c2Items.value;
    if (c2_selected != c2_val) {
        for (let i=0; i<retexes.length; i++) {
            //select retex of given column, then apply x*bottom to imgs
        }
        c2_selected = c2_val;
    }
}