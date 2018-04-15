angular.module('onlineFoodOrderApp')
.factory('itemFactory', function ($http) {
    var itemDetails = [
        {
            name: 'Hamburger',
            price: '200',
            image: 'images/hamburger.jpg'
        },
        {
            name: 'Fries',
            price: '100',
            image: 'images/fries.jpg'
        },
        {
            name: 'Coke',
            price: '50',
            image: 'images/coke.jpg'
        },
        {
            name: 'Pepsi',
            price: '50',
            image: 'images/pepsi.jpg'
        }

    ];
    
    var factory = {};
    factory.getItemDetails = function () {
        return itemDetails;
    }
    factory.changeItemDetails = function (newItemDetails) {
        itemDetails = newItemDetails;
    }
    return factory;
});