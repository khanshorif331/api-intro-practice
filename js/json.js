// javascript object

const user ={id:11, name:'gorib amir' , job: 'actor'}
const stringified = JSON.stringify(user)

// console.log(user);
// console.log(stringified);

const shop = {
    name:'Alia store',
    address:'Ranbir road',
    products:['laptop' ,'mobile' ,'pepsi'],
    isExpensive :false
}
const shopStringified =JSON.stringify(shop);

console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);