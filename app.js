(function()
{
  'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

var shoppingList1 =
[
  {
    name: "Milk",
    quantity: "2L"
  },

  {

    name: "Butter",
    quantity: "250g"
  },

  {

    name: "sweet",
    quantity: "1kg"

  },
  {
    name: "dosa",
    quantity: "2"
  }

];

var shoppingList2 = [];



ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
      var list1=this;
      list1.shoppingList1=shoppingList1;

      list1.removeItem=function(shoppingList1Index)
      {
        ShoppingListCheckOffService.removeItem(shoppingList1Index);
        if(shoppingList1.length===0)
        {
          list1.message="Everything is bougth!"
        }
      };
}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
      var list2=this;
      list2.shoppingList2=ShoppingListCheckOffService.getItems();

      list2.isItem = function()
      {
        var count= list2.shoppingList2.length ;
        if(count > 0)
          {
            return false
          }
          else
          {

          return true;

          }
      }

}
function ShoppingListCheckOffService()
  {
    var service=this;
    //list of shopping items
  //  var items =[];

    service.removeItem=function(shoppingList1Index)
    {
      var a = shoppingList1.splice(shoppingList1Index, 1);
      	shoppingList2.push(a[0]);
    };
    service.getItems=function()
    {
      return shoppingList2;//nothing is changed
    };
  }


})();
