// shopping list factory function here

function ShoppingList(param){

    const list = param || [];

    function addListName(){
      
    }
    function addItems(items,price){
      list.push(items, price)
      return items;
    }
    function getShoppingList(){
      return list;
    }
    return {
        addListName,
        getShoppingList,
        addItems
    }
}
