class Vehicle {

    static Count = 0;
    static MaxVehicle = 50;

    constructor(type, speed) {

        if (Vehicle.Count >= Vehicle.MaxVehicle) {
            throw new Error('Vehicle limit reached');
        }

        this.type = type;
        this.speed = speed;

        Vehicle.Count++;
    }

    start() {
        console.log(`${this.type} started`);
    }

    stop() {
        console.log(`${this.type} stopped`);
    }
}



class Car extends Vehicle {
    constructor(type, speed) {
        super(type, speed);
    }

    drive() {
        console.log(`${this.type} is driving at ${this.speed} km/h`);
    }
}

try {
    var car1 = new Car('BMW', 120);
    car1.start();
    car1.drive();
    car1.stop();
} catch (e) {
    console.error(e.message);
}


try {
    for (let i = 0; i < 51; i++) {
        new Vehicle('BMW', 80);
    }
} catch (e) {
    console.error(e.message);
}

const isCarInstance1 = (obj) => obj instanceof Car;


const isCarInstance2 = (obj) => {
    let proto = Object.getPrototypeOf(obj);
    while (proto != null) {
        if (proto === Car.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
};

console.log(isCarInstance1(car1));
console.log(isCarInstance1({}));

console.log(isCarInstance2(car1));
console.log(isCarInstance2({}));
////////////////////////////////////////////////////////

(async () => {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userData.json();
    //console.log(users);

    const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postData.json();
    //console.log(posts);

    const commentData = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await commentData.json();
    //console.log(comments);

    const tableBody = document.querySelector("#usersTable tbody");

    users.forEach((user) => {
        const row = document.createElement("tr");

        const username= document.createElement("td");
        username.innerText = user.username;
        row.appendChild(username);

        const email = document.createElement("td");
        email.innerText = user.email;
        row.appendChild(email);

        const company= document.createElement("td");
        company.innerText = user.company.name;
        row.appendChild(company);

        const geo = document.createElement("td");
        geo.innerText = user.address.geo.lat +", "+ user.address.geo.lng;
        row.appendChild(geo);

        const postslist = document.createElement("td");
        const ul = document.createElement("ul");

        posts.forEach((post) => {
            if(post.userId === user.id){
                const li = document.createElement("li");
                li.innerText = post.title;
                let numComments=comments.reduce((acc,comment)=>{
                    if(comment.postId===post.id)
                        acc++;
                    return acc;
                },0);
                li.innerText+= `- ${numComments} Comments`;
                ul.appendChild(li);
            }
        });

        postslist.appendChild(ul);
        row.appendChild(postslist);

        tableBody.appendChild(row);
    });
})();
