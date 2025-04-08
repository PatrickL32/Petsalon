console.log("register");
//create an array
let pets=["fluffy","mittens","nemo"];
//let pets=["fluff","mittens",""]


//display name function
function displayNames(){
    for(let i=0;i<pets.length;i++){
        document.getElementById("results").innerHTML +=`
        <li>`;//arraynamesofpets [positon]
    }


}

function init(){              
 //main function

    //create  pets objects
    let pet1={
        name: "fluffly",
        age: 7,
        gender:"Male",
        breed:"norwegian"
    }

    let pet2={
        name: "mitten",
        age: 5,
        gender:"female",
        breed:"tuxedo"
    }

    let pet3= {
        name: "nemo",
        age: 8,
        gender:"male",
        breed:"fish"
    }

//push the pets in the array
pets.push(pet1,pet2,pet3);
//display names
displayNames()

}






window.onload=init;//wait to render the html
