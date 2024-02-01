/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ayomide Olugbile",
    profile: 'images/photo.jpg',
    favoriteFoods: ['Rice', 'Beans', 'Amala', 'Eba'],
    hobbies: ["Surfing the Internet", "Listening to Music","Dancing","Coding"],
    placesLived: []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Minna, Niger State, Nigeria",
        length: "4 Years"
    },
    {
        place: "Ibadan, Oyo State, NIgeria", 
        length: "18 Years"
    },
    {
        place: "Ogbomoso, Oyo State, Nigeria",
        length:  "2 Years"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.profile;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
let dl = document.createElement("dl");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    dl.appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.appendChild(dd);
});
document.querySelector("#places-lived").appendChild(dl);


