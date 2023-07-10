//Write a function to show the providers
async function logProviders() {
  const response = await fetch("http://localhost:3000/providers");
  const providers = await response.json();
  console.log(providers);
  //Create a variable for the providersDiv
  let providersDiv =  document.getElementById('providers')
 //Use a loop
  for(let i = 0; i < providers.length; i++){
    //Create variables for the elements 
     const box = document.createElement('div');
    let img = document.createElement('img')
    let name = document.createElement('p')
    let rating = document.createElement('p')
    let city = document.createElement('p')
   
    
    img.src = providers[i].image
    name.innerHTML = providers[i].name
    rating.innerHTML = providers[i].rating
    city.innerHTML = providers[i].city
   //Append
    box.append(img)
    box.append(name)
    box.append(rating)
    box.append(city)
   
    providersDiv.append(box);
    box.classList.add('box');
    

    
    }
  }
  //Write a function for the cardclick
  async function cardClick(cardNumber) {
    const response = await fetch("http://localhost:3000/providers");
    const providers = await response.json();
    let item;
    for (let i = 0; i < providers.length; i++) {
      if (providers[i].id ==  cardNumber) {
        item = providers[i]
      }
    }
    console.log(item)
    let popupDiv = document.getElementById("popup")
    
    let image = document.getElementById("model")

    let text = document.getElementById("name")

    //Create a variable to add additional images
    const additionalImages = item.additionalImages
    const newImages = document.getElementById('newImages')
    //Style new images
    newImages.style.display = "flex"
    //loop through the additional images
    for (let i=0; i < additionalImages.length; i++) {
      const newimage = document.createElement('img')
      newimage.src = additionalImages[i]
    //Style the images
      newImages?.append(newimage)
      newimage.style.width = "50%"
     
      
    }
    //Create a new variable to  create a element
    const number = document.createElement('p')
    number.innerHTML= "You can reach us on 0721345678"
    number.style = "bold"
    text.innerHTML = item.name
    image.src = item.image
   
    
    console.log(text)
    //Append
    popupDiv.append(text)
    popupDiv.append(number)

	}

  //logProviders()


  