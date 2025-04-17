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
function displayRow(pet) {
  let tableBody = document.querySelector("tbody"); // Target the table body element
  let row = `<tr>
    <th scope="row">${pet.id}</th>
    <td>${pet.name}</td>
    <td>${pet.breed}</td>
    <td>${pet.owner}</td>
  </tr>`;
  tableBody.innerHTML += row; // Dynamically append the row to the table
}

// Clearing previous results if needed
document.getElementById("results").innerHTML = ""; // Clears the content inside the "results" element
To dynamically populate your HTML table with the form inputs in registerForm, you'll need to ensure that your JavaScript is linking the form values to the table structure. Here's how it can work seamlessly:
1. HTML Table Structure
First, ensure your table has the appropriate column headers to match the form fields (e.g., Name, Phone Number, Pet). Here's an example:
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Pet</th>
    </tr>
  </thead>
  <tbody id="tableBody">
    <!-- Rows will be dynamically added here -->
  </tbody>
</table>


2. JavaScript Code
Use JavaScript to capture the form data and add it as a new row in your table. Here's the code to achieve that:
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get form input values
  let name = document.getElementById('nameInput').value;
  let phoneNumber = document.getElementById('phone numberInput').value;
  let pet = document.getElementById('pet').value;

  // Get the table body element
  let tableBody = document.getElementById('tableBody');

  // Create a new row and cells
  let newRow = tableBody.insertRow();
  let nameCell = newRow.insertCell();
  let phoneNumberCell = newRow.insertCell();
  let petCell = newRow.insertCell();

  // Populate cells with form data
  nameCell.textContent = name;
  phoneNumberCell.textContent = phoneNumber;
  petCell.textContent = pet;

  // Clear the form for new inputs
  document.getElementById('registerForm').reset();
});



function init(){
    // create pet objects
    let pet1=new Pet("Fluffy",7,"Female","Siberian","nailtrimming,brushing and bath");
    let pet2=new Pet("Mittens",4,"Female","tuxedo","nailtrimming and deluxe brushing");
    let pet3= new Pet ("princess",6,"Female","yorkie","grooming and teeth cleaning");
    //push the pets in the array
    pets.push(pet1,pet2,pet3);
    //display names
    displayNames();`
} 

window.onload=init;//wait to render the html
