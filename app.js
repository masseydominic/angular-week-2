(function() {
	'use strict';
	angular.module('app', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var tbc=this;
		tbc.item=ShoppingListCheckOffService.getArray();


		tbc.additem=function(item_quantity, item_name, index){
				
			ShoppingListCheckOffService.additem(item_quantity, item_name);
			ShoppingListCheckOffService.removeitem(index);

		}

	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];	
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var abc=this;
		
		abc.additem=function(){
			ShoppingListCheckOffService.additem(item_quantity,item_name);
		}

		abc.item1=ShoppingListCheckOffService.getItems(); 

		}



	

	function ShoppingListCheckOffService(){
		var service=this;
		var item= [];


		item[0]= {
			"item_name": "biscuits",
			item_quantity: 5
		};
		item[1]= {
			item_name: 'pepsi',
			item_quantity: 5
		};
		item[2]= {
			item_name: 'kurkure',
			item_quantity: 5
		};
		item[3]= {
			item_name: 'Cadbury Silk',
			item_quantity: 5
		};
		item[4]= {
			item_name: 'Malboro',
			item_quantity: 5
		};

		service.getArray = function(){
			return item;
		}


		service.removeitem=function(index){
			item.splice(index,1);
		}













		var item1=[];
		service.additem= function(item_quantity,item_name){
			var temp_item = {
				item_name: item_name,
				item_quantity: item_quantity
			};
			item1.push(temp_item);


		}

		service.getItems= function(){
			return item1;
		}
	}


})();