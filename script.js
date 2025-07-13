const inputSearch = document.getElementById("input")
const list = document.getElementById("list")

function addTask(){
    if(inputSearch.value === ""){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputSearch.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputSearch.value = "";
}
list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
inputSearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function theme() {
    document.querySelector(".app").classList.toggle("themed");
    document.querySelector(".container").classList.toggle("themed");
}