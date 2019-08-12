// shopping list factory function here

function ShoppingList(param){

    const list = param || [];
   

    
    function addItems(items,price){

      list.push({
        items,
        price
      })
}
    function getShoppingList(){
      return list;
    }
    return {
        
        getShoppingList,
        addItems
    }
}
