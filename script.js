// Objects literals

let user = {
    name: "crystal",
    age: 30,
    email: 'crystal@theninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & heese rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in. Blogs', this.blogs);
    }
};

console.log(user);
console.log(typeof(user));
user.login();
console.log(Math.round(Math.random() * 100));