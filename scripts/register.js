console.log("register");
let pets=[];// the empty array

let inputName=document.getElementById("txtName");
let inputAge =document.getElementById("txtAge");
let inputGender =document.getElementById("txtGender");
let inputBreed =document.getElementById("txtBreed");
let inputService=document.getElementById("txtservice");

//object constructor
function Pet( name,age,gender,breed, service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.Breed=breed;
    this.service=service;
}

function register(){
    //create the newPet
    let newPet=new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //push the newPet
    pets.push(newPet);
    //display the pets
    displayNames();
}

//display name function
function displayNames() {
    document.getElementById("results").innerHTML = ""; // Clear previous results
    let result = "";

    for (let i = 0; i < pets.length; i++) {
        //document.getElementById("results").innerHTML += ""
    
        result+= `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${pets[i].name}-<span class="text-secondary">${pets[i].service}</span></h5>
                    <h6> ${pets[i].Breed}</h6>
                    <p class="card-text" >${pets[i].gender},${pets[i].age}</p>
                    <a href="#" class="btn btn-primary btn-sm">Delete</a>
                </div>
            </div>
        `
    }
    document.getElementById("results").innerHTML=result;

}
function init(){
    // create pet objects
    let pet1=new Pet("Fluffy",7,"Female","Siberian","nailtrimming,brushing and bath");
    let pet2=new Pet("Mittens",4,"Female","tuxedo","nailtrimming and deluxe brushing");
    let pet3= new Pet ("princess",6,"Female","yorkie","grooming and teeth cleaning");
    //push the pets in the array
    pets.push(pet1,pet2,pet3);
    //display names
    displayNames();
} 

window.onload=init;//wait to render the html
