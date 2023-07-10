//AddEventListener to the create account pop up to make it active
document.getElementById("show-createaccount").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active")
})

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active")
})

//AddEventListener to the login  pop up to make it active
document.getElementById("show-login").addEventListener("click",function(){
    document.querySelector(".form-popup").classList.add("active")
})

document.querySelector(".form-popup .exit-btn").addEventListener("click",function(){
    document.querySelector(".form-popup").classList.remove("active")
})

//Write function for the Create Account button
async function giveData(event){
  //Use PreventDefault to prevent the page from reloading
    event.preventDefault()
    //Create a variable
    const error = document.createElement('p')
    error.innerHTML = ''
    //Fetch data 
    const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
      //Create a variable to get the email and password from HTML
    const password =document.getElementById('password').value
    const email =document.getElementById('email').value
    const roles = document.getElementById('roles')
    const data = {
        id: users.length + 1,
        email: email,
        password: password,
        role: roles.value
      }
      //log the Users to the console
    console.log(users)
    let count = 0
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        count += 1
      }
    }

    if (count === 0) {
      const postresponse = await fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
  
      console.log("RESPONSE: ", postresponse.json())
      return postresponse.json();
    } else {
      const popupDiv = document.getElementById('popup')
      error.innerHTML = 'user already exists'
      error.style.color = 'red'
      popupDiv.append(error)
    
    }



    

    
    

    
        
    
        



   


}

function clickData (){
    console.log("")
    window.location.href = "providers.html";
}
//Write function to style the form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 
//Write a function for the login
function putData(event){
  //Link it to the providers.html
    window.location.href = " providers.html"
    //Create variables to get data from html
    const password =document.getElementById('Password').value
    const email =document.getElementById('Email').value
    const data ={
        "name":email, 
        "password":password
    }
    //Console log the data
    console.log(data)
}

