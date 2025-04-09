console.log("register");
//create an array
let pets=["fluffy","mittens","nemo"];
//let pets=["fluff","mittens"," nemo"]


//display name function
function displayNames(){
    for(let i=0;i<pets.length;i++){
        document.getElementById("results").innerHTML += `<li>${pets[i].name}</li>`; // arrayName[position]
    }


}

function init(){              
 //main function

    //create  pets objects
    let pet1= {
        name: "fluffly",
        age: 4,
        gender: "Male",
        breed:"maine coon",
        service: "Grooming"//Add service property
    }

    let pet2={
        name: "mittens",
        age: 5,
        gender:"female",
        breed:"domestic shorthair",
        service:"vet visit"// Add service property
    }

    let pet3= {
        name: "nemo",
        age: 8,
        gender:"male",
        breed:"fish",
        service: "Tank Cleaning"//Add service property
    }

//push the pets in the array
pets.push(pet1,pet2,pet3);
//display names
function displayNames(){
    for(let i = 0; i < pets.length; i++){
        document.getElementById("results").innerHTML += 
            `<li>${pets[i].name} - Service: ${pets[i].service}</li>`; // Display name and service
    }
}
}






window.onload=init;//wait to render the html
