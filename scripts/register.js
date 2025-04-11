console.log("register");
let pets=[];// the empty array

let inputName=document.getElementById("txtName");
let inputAge =document.getElementById("txtAge");
let inputGender =document.getElementById("txtGender");
let inputBreed =document.getElementById("txtBreed");

//object constructor
function Pet( name,age,gender,Breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.Breed=Breed;//add breed property
}

function register(){
    //create the newPet
    let newPet=new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //push the newPet
    pets.push(newPet);
    //display the pets
    displayNames();
}

//display name function
    function displayNames() {
        document.getElementById("results").innerHTML = ""; // Clear previous results
        for (let i = 0; i < pets.length; i++) {
            document.getElementById("results").innerHTML += 
                `<li>${pets[i].name} - ${pets[i].age} - ${pets[i].gender} - ${pets[i].Breed}</li>`;
        }
    }

function init(){
    // create pet objects
    let pet1=new Pet("Fluffy",7,"Female","cat");
    let pet2=new Pet("Mittens",4,"Female","cat");
    let pet3= new Pet ("princess",6,"Female","dog");
    //push the pets in the array
    pets.push(pet1,pet2,pet3);
    //display names
    displayNames();
} 

window.onload=init;//wait to render the html
