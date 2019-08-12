// shopping-list tests here
describe('The Shopping list', function(){

    it('should be able to add an item to the list and its price', function(){
        var instance = ShoppingList();
        instance.addItems("apple", 1.50);
        instance.getShoppingList();
        assert.deepEqual(["apple", 1.50], instance.getShoppingList());
    });
    it('should be able to add different items to the shopping list', function(){
        var instance = ShoppingList();
        instance.addItems("apple", 1.50);
        instance.addItems("banana", 2.50);
        instance.getShoppingList();
        assert.deepEqual(["apple",1.50,"banana", 2.50], instance.getShoppingList());
    });

});