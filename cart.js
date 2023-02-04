///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const totalPrice = (acc, cur) => {
   return acc + cur.price;
}

const summedPrice = cart.reduce(totalPrice, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Typically when shopping online one of the first things that you are asked to give by the website which you are purchasing from is 
    for your email. That will be one of my elements. Another thing they like to know is if you are a returning customer or not. That 
    will be one of the elements. They also want to know your name, where you live, and how you found out about their site, and your age. 
    This will be our properties for the customer information objects. This information will help the site know what their most effective 
    advertising is, where there customers live so that they can cater to them easier, and of course the basic account into. The types
    will be as follows: email - string, returning customer - boolean, name - string, location - string, how they found the site - string,
    age - number.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers = {
    name: "John Doe",
    email: "johndoe@nukmail.com",
    location: "Dallas, TX",
    newCustomer: true,
    foundUsThrough: "friends",
    age: 32
}