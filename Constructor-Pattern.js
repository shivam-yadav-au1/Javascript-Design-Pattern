//var newObject = {};

var newObject = Object.create(Object.prototype);
//console.log(newObject);

// set properties

Object.defineProperty(newObject,'somekey',{
    value:'for more control of the property behaviour',
    writable:true,
    enumerable:true,
    configurable:true
});
//console.log(newObject);

//above code can alos be written as below

var defineProp = function(obj,key,value){
    var config = {
        value:value,
        writable:true,
        enumerable:true,
        configurable:true
    };
    Object.defineProperty(obj,key,config);
}

var person = Object.create(Object.prototype);
defineProp(person,"Car","Delorean");
//console.log(person);

var obj ={};
Object.defineProperties(obj,{
    "someKey":{
        value:"Hello World",
        writable:true
    },
    "anotherKey":{
        value:"Foo bar",
        writable:false
    }
});

// console.log(obj.someKey);

//Basic Constructors

function Car(model,year,mile){
    this.model = model;
    this.year = year;
    this.miles = mile;
    this.toString = function(){
        return this.model + " has done "+this.miles + " miles";
    };
}

var tesla = new Car("Tesla Model X",2021,20000);
console.log(tesla.toString());

function CarV2 (model,year,mile){
    this.model = model;
    this.year = year;
    this.miles = mile;
}

CarV2.prototype.toString = function(){
    return this.model +  " has done "+this.miles +" miles";
}

var testlaV2 = new CarV2('Tesla model y',2020,423423);
console.log(testlaV2.toString());