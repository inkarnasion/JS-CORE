const assert = require('chai').assert;
const expect = require('chai').expect;
const PizzUni = require('./02. PizzUni_Ресурси');

describe('Tests', () => {

    it('check if all parameters are valid', () => {
        let pizzUni = new PizzUni();
        let expected = [];
        let obj = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };

        expect(pizzUni.registeredUsers).to.be.eql(expected);
        expect(pizzUni.availableProducts).to.be.eql(obj);
        expect(pizzUni.orders).to.be.eql(expected);
    });


    it('register with already registered email, should throw Error', function () {
        let pizzUni = new PizzUni();

        pizzUni.registerUser('aaa@abv.bg');

        expect(function () {
            return pizzUni.registerUser('aaa@abv.bg');
        }).to.throw(Error);
        expect(pizzUni.registeredUsers.length).to.equal(1);
    });

    it('register with new email, should add to registered users', function () {
        let pizzUni = new PizzUni();

        pizzUni.registerUser('aaa@abv.bg');

        expect(pizzUni.registeredUsers.length).to.equal(1);
    });

    it('register with new email, should add user', function () {
        let pizzUni = new PizzUni();

        pizzUni.registerUser('aaa@abv.bg');

        expect(pizzUni.registeredUsers).to.eql([{email: 'aaa@abv.bg', orderHistory: []}]);
    });


    it('register with new email, should return user', function () {
        let pizzUni = new PizzUni();

        let expected = {email: 'aaa@abv.bg', orderHistory: []};
        let actual = pizzUni.registerUser('aaa@abv.bg');

        expect(actual).to.eql(expected);
    });


    it('makeOrder with not registered email, should throw Error', function () {
        let pizzUni = new PizzUni();


        expect(function () {
            return pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');
        }).to.throw(Error);
    });

    it('makeOrder with no Pizza, should throw Error', function () {
        let pizzUni = new PizzUni();

        expect(function () {
            return pizzUni.makeAnOrder('aaa@abv.bg', 'Coca-Cola');
        }).to.throw(Error);
    });

    it('makeOrder with invalid Pizza, should throw Error', function () {
        let pizzUni = new PizzUni();

        expect(function () {
            return pizzUni.makeAnOrder('aaa@abv.bg', 'Italian test Style', 'Coca-Cola');
        }).to.throw(Error);
    });

    it('makeOrder with no Drink, should work correctly', function () {
        let pizzUni = new PizzUni();

        let email = 'aaa@abv.bg';
        pizzUni.registerUser('aaa@abv.bg');
        let orderedPizza = 'Italian Style';
        let index = pizzUni.makeAnOrder('aaa@abv.bg', orderedPizza);
        let order = pizzUni.orders[index];

        let userOrder = {
            orderedPizza
        };

        let expected = {
            ...userOrder,
            email,
            status: 'pending'
        };

        expect(order).to.eql(expected);
    });

    it('makeOrder with invalid Drink, should not add drink to order', function () {
        let pizzUni = new PizzUni();

        let email = 'aaa@abv.bg';
        pizzUni.registerUser('aaa@abv.bg');
        let orderedPizza = 'Italian Style';
        let index = pizzUni.makeAnOrder('aaa@abv.bg', orderedPizza, 'test');
        let order = pizzUni.orders[index];

        let userOrder = {
            orderedPizza
        };

        let expected = {
            ...userOrder,
            email,
            status: 'pending'
        };

        expect(order).to.eql(expected);
    });

    it('makeOrder with valid data, should add order', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola')

        expect(pizzUni.orders.length).to.eql(1);
    });

    it('makeOrder with valid data, should add order with valid email', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola')

        expect(pizzUni.orders[index].email).to.eql('aaa@abv.bg');
    });

    it('makeOrder with valid data, should add order with valid status', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola')

        expect(pizzUni.orders[index].status).to.eql('pending');
    });

    it('makeOrder with valid pizza and drink, should add to user orderHistory', () => {
        let pizzUni = new PizzUni();


        let orderedPizza = 'Italian Style';
        let orderedDrink = 'Coca-Cola';

        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', orderedPizza, orderedDrink);
            let email ='aaa@abv.bg';
        let expected = {
            email,
            orderHistory: []
        };

        expected.orderHistory.push({
            orderedPizza,
            orderedDrink
        });

        expect(pizzUni.registeredUsers[0]).to.be.eql(expected);
    });

    it('makeOrder with valid pizza, should add to user orderHistory', function () {
        let pizzUni = new PizzUni();


        let orderedPizza = 'Italian Style';
        let orderedDrink = 'Coca-Cdddola';

        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', orderedPizza, orderedDrink);
        let email = 'aaa@abv.bg';

        let expected = {
            email,
            orderHistory: []
        };

        expected.orderHistory.push({
            orderedPizza
        });

        expect(pizzUni.registeredUsers[0]).to.be.eql(expected);
    });

    it('makeOrder with valid data, should add order with valid data', function () {
        let pizzUni = new PizzUni();


        let orderedPizza = 'Italian Style';
        let orderedDrink = 'Coca-Cola';

        pizzUni.registerUser('aaa@abv.bg');
        let email = 'aaa@abv.bg';
        let index = pizzUni.makeAnOrder('aaa@abv.bg', orderedPizza, orderedDrink);

        let userOrder = {
            orderedPizza,
            orderedDrink
        };

        let expected = {
            ...userOrder,
            email,
            status: 'pending'
        };

        expect(pizzUni.orders[index]).to.eql(expected);
    });

    it('makeOrder with valid data, should return index', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let res = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');

        expect(res).to.eql(0);
    });


    it('should change status of order', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');

        pizzUni.completeOrder();

        expect(pizzUni.orders[index].status).to.be.eql('completed');
    });

    it('should return order', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let index = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');

        let order = pizzUni.completeOrder();
        let expected = pizzUni.orders[index];
        expected.status = 'completed';

        expect(order).to.be.eql(expected);
    });


    it('tests with not existing email, should return undefined', function () {
        let pizzUni = new PizzUni();

        expect(pizzUni.doesTheUserExist('test@test.com')).to.be.undefined;
    });

    it('tests with existing email, should return user', function () {
        let pizzUni = new PizzUni();

        let email = 'aaa@abv.bg';
        pizzUni.registerUser('aaa@abv.bg');

        let expected = {email, orderHistory: []};
        expect(pizzUni.doesTheUserExist('aaa@abv.bg')).to.eql(expected);
    });


    it('tests with existing pending order, should return pending status', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let res = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');


        expect(pizzUni.detailsAboutMyOrder(res)).to.be.eql('Status of your order: pending');
    });

    it('tests with existing completed order, should return completed status', function () {
        let pizzUni = new PizzUni();


        pizzUni.registerUser('aaa@abv.bg');

        let res = pizzUni.makeAnOrder('aaa@abv.bg', 'Italian Style', 'Coca-Cola');
        pizzUni.completeOrder();

        expect(pizzUni.detailsAboutMyOrder(res)).to.be.eql('Status of your order: completed');
    });

});
