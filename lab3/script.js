Array.prototype.average = function () {
    this.forEach(function (num) {
        if (typeof num !== 'number') {
            throw new Error('Array contain invalid values');
        }
    });

    if (this.length === 0) return 0;

    var sum = this.reduce((acc, num) => acc + num, 0);
    return sum / this.length;
};

var arr = [1, 2, 3, 4];
console.log(arr.average()); 

/////////////////////////////////////////////////////////////////////////////

Object.prototype.toString = function () {
    return 'This is an object';
};

var obj = {};
console.log(String(obj));

var Obj2 = {
    message: 'This is a message',
    toString: function () {
        return this.message;
    }
};

console.log(String(Obj2));

///////////////////////////////////////////////////////////////////////////////

function Vehicle(type, speed) {
    if (Vehicle.Count >= Vehicle.MaxVehicle) {
        throw new Error('Vehicle limit reached');
    }

    this.type = type;
    this.speed = speed;

    Vehicle.Count++;
}

Vehicle.Count = 0;
Vehicle.MaxVehicle = 50;

Vehicle.prototype.start = function () {
    console.log(`${this.type} started`);
};

Vehicle.prototype.stop = function () {
    console.log(`${this.type} stopped`);
};

function Car(type, speed) {
    Vehicle.call(this, type, speed);
}


/*Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;*/

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

Car.prototype.drive = function () {
    console.log(`${this.type} is driving at ${this.speed} km/h`);
};

try {
    var car1 = new Car('BMW', 120);
    car1.start(); 
    car1.drive();
    car1.stop();  
} catch (e) {
    console.error(e.message);
}


try {
    for (var i = 0; i < 51; i++) {
        new Vehicle ('Truck', 80); 
    }
} catch (e) {
    console.error(e.message);
}

function isCarInstance1(obj) {
    return obj instanceof Car;
}

function isCarInstance2(obj) {

    var proto = Object.getPrototypeOf(obj);
    while (proto != null) {
        if (proto === Car.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}



console.log(isCarInstance1(car1)); 
console.log(isCarInstance1({})); 

console.log(isCarInstance2(car1)); 
console.log(isCarInstance2({})); 



