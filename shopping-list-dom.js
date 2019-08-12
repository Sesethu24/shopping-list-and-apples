// shopping-list dom code here
const textField = document.querySelector(".textBox");
const addBtnElem = document.querySelector(".addBtn");

const instance = ShoppingList();

function createShoppingListElem(items) {
    var list = document.createElement("li");
    var itemList = document.createTextNode(items);
    list.appendChild(itemList);
    return list;
}

function addItemsToList() {

    if (textField.value) {
        var display = instance.addItems(textField.value);
        textField.value = ""
        
        var list = createShoppingListElem(display);

        document.getElementById("list").appendChild(list);
    }

}
addBtnElem.addEventListener('click', addItemsToList)