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
    displayRow();
}

//display name function
function displayRow(pet) {
  console.log("Displaying pets...");
  document.getElementById("results").innerHTML="";
  let row = ""

  for(let i=0; i<pets.length; i++){
     // document.getElementById("results").innerHTML+=`<li>${pets[i].name} - ${pets[i].age}</li>`;// arrayName[position]
      //let tableBody = document.querySelector("tbody"); // Target the table body element

      row += `
        <tr id="${i}">
          <td>${pets[i].name}</td>
          <td>${pets[i].age}</td>
          <td>${pets[i].gender}</td>
          <td>${pets[i].service}</td>
          <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i});">Delete</button></td>
        </tr>
      `;
  }

  document.getElementById("results").innerHTML= row;
  //tableBody.innerHTML += row; 
}

function deletePet(petID) {
  console.log("Delete a pet..." +petID);
  //delete form HTML
  document .getElementById(petID).remove();
  //delete from the array
  pets.splice(petID,1);
  displayRow();
} 





// Clearing previous results if needed
function init(){
    // create pet objects
    let pet1=new Pet("Fluffy",7,"Female","Siberian","nailtrimming,brushing and bath");
    let pet2=new Pet("Mittens",4,"Female","tuxedo","nailtrimming and deluxe brushing");
    let pet3= new Pet ("princess",6,"Female","yorkie","grooming and teeth cleaning");
    //push the pets in the array
    pets.push(pet1,pet2,pet3);

    displayRow();

}

window.onload = init;