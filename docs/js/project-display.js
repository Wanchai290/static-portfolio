// column B
const subsets = document.getElementsByClassName('subset');
// column C
const retexes_subsets = document.getElementsByClassName('retex-subset');

var c1_selected = 0;
var c2_selected = 0;

var c1_val;

function c1_onClick() {
    c1_val = document.querySelector('input[name="c1-items"]:checked').value
    if (c1_selected != c1_val) {
        changeSubset_B(c1_val);
        //changeRetexSubsets(c1_val);
    }
}


function changeSubset_B(c1_val) {
    //shift relatively using bottom
    for (let i=0; i<subsets.length; i++) {
        subsets[i].style.bottom = c1_val * 100 + "%";
    }
    //update the selection
    c1_selected = c1_val;
}

function changeRetex(colLetter) {
    const c2Name  = "c2-items-" + colLetter;
    const c2Items = document.querySelector('input[name='+c2Name+']:checked');
    const c2_val  = c2Items.value;
    const c2_index = colLetter.charCodeAt(0);
    
    if (c2_selected != c2_val) {
        for (let i=0; i<retexes_subsets.length; i++) {
            //select retex of given column, then apply x*bottom to imgs
        }
        c2_selected = c2_val;
    }
}