// column B
const subsets = document.getElementsByClassName('subset');
// column C
const retexes_subsets = document.getElementsByClassName('retex-subset');

var c1_selected = 0;
var c2_selected = 0;
var c1_val;
var c2_val;

function c1_onClick() {
    c1_val = document.querySelector('input[name="c1-items"]:checked').value
    if (c1_selected != c1_val) {
        changeSubset_B(c1_val);
        shiftRetexesSubsets(c1_val);
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

function shiftRetexesSubsets(c1_val) {
    for (let i=0; i<retexes_subsets.length; i++) {
        retexes_subsets[i].style.bottom = c1_val * 100 + "%";
    }
}

function c2_onClick() {
    affected_row = "c2-items-"+c1_val;
    selector = "input[name="+affected_row+"]:checked"; 
    c2_val = document.querySelector(selector).value;
    changeRetex();
}

function changeRetex() {
    const impacted_rss_name = "#retex-ss-" + c1_val;
    const retexes_selector = impacted_rss_name + " img"; // Which is '#retex-ss-X img'
    console.log(retexes_selector);
    const retexes = document.querySelectorAll(retexes_selector);
    console.log(retexes[0])
    //TODO:
    // this kind of modification has been repeated so much in this js file
    // need to refactor it somehow, or find something more efficient
    for (let i=0; i<retexes.length; i++) {
        retexes[i].style.bottom = c2_val * 100 + "%";
    }
    console.log("retex changed : " + c2_val);
}