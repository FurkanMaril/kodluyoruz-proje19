const inputBox = document.querySelector("#input-box");
const listBox = document.querySelector("#list-box");
let btnDelete = document.querySelector("#btn-delete");
let toastInfo = document.querySelector(".toast-body");

function addTask(){
    if(inputBox.value === ''){
        alert("Boş girilemez");
        $('.toast').toast('show');
        toastInfo.innerHTML = "Listeye boş bilgi eklenemez!"
    }
    else{
        let liDom = document.createElement("li");
        liDom.classList.add('list-group-item', 'list-group-item-action');
        liDom.innerHTML = `
        <span>
            <i class="fa-solid fa-check"></i>
            ${inputBox.value}
        </span>
        <a class="list-close-btn" id="btn-delete" href="#"><i class="fa-solid fa-xmark"></i></a>
        `;  
        listBox.appendChild(liDom);
        $('.toast').toast('show');
        toastInfo.innerHTML = "Listeye eklendi!"
    }
    inputBox.value = "";
    saveData();
}

listBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "A"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listBox.innerHTML);
}

function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
showTask();