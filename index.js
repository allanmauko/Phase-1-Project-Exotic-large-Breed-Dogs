
fetchDogBreed()
document.addEventListener('DOMContentLoaded', function(){
    fetchDogBreed()
})  


async function fetchDogBreed(){
 const response = await fetch('https://dog.ceo/api/breeds/list');
    console.log(response);
    const data = await response.json()
    console.log(data.message);
    const dog = data.message;

    dog.forEach((dog) =>{
        console.log(dog)
       const list = document.querySelector('.BreedList ul')
       const li = document.createElement('li')
      li.innerText = dog
       list.appendChild(li)
   })
    
}
   
