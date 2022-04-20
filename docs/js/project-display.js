const subsets = document.getElementsByClassName('subset');
var c1_selected = 0;

function changeSubset() {
    const c1_val = document.querySelector('input[name="c1-items"]:checked').value
    if (c1_selected != c1_val) {
        for (let i=0; i<subsets.length; i++) {
            subsets[i].style.right = c1_val * 100 + "%";
        }
        c1_selected = c1_val;
    }
}
