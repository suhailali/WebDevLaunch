let total = 0;
const array = [];
function addNumber() {
    const el = document.getElementById("number");
    const number = parseInt(el.value);
    addToArray(number);
}

function addToArray(number) {
    total = total + number;
    array.push(number)
    const el = document.getElementById("number_block");
    console.log(el);
    const html = el.innerHTML.concat(`<h3 id="h1_num">${number}</h3>`);
    console.log(html);
    el.innerHTML = html;
    // el = document.getElementById("number_block").innerHTML;
     console.log(array);
    const total_items = document.getElementById("total-items");
    total_items.innerText = `Total items = ${array.length}`;

    const total_count = document.getElementById("total-count");
    total_count.innerText = `Total count = ${total}`;
}