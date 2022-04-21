const subsets = document.getElementsByClassName('subset');
var c1_selected = 0;

function changeSubset_B() {
    const c1_val = document.querySelector('input[name="c1-items"]:checked').value
    if (c1_selected != c1_val) {
        for (let i=0; i<subsets.length; i++) {
            subsets[i].style.bottom = c1_val * 100 + "%";
        }
        c1_selected = c1_val;
    }
}

function changeRetex(colIndex) {
    const c2Name  = "c2-items-" + colIndex;
    const c2Items = document.querySelector('input[name='+c2Name+']:checked');
    const c2_val  = c2Items.value;
    
}