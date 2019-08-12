// shopping-list dom code here
const textField = document.querySelector(".textBox");
const addBtnElem = document.querySelector(".addBtn");
const selectBudgetRange = document.querySelector(".selectBudget");
const selectCategory = document.querySelector(".selectCategory");
const displayBox = document.querySelector(".box");

const instance = ShoppingList();

function addItemsToList() {

    if (textField.value) {
        instance.addItems(textField.value);
        
        var display = document.createElement("li");
        var list = document.createTextNode(textField.value);
        display.appendChild(list);
        document.getElementById("myList").appendChild(display);
        textField.value = ""
}  
    }
   
   addBtnElem.addEventListener('click', addItemsToList)