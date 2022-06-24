// let fetchDogBreed = async() => {
//     let response = await fetch('https://dog.ceo/api/breeds/image/random/3')
//     let data = await  response.json()
//     console.log(data)
// }
fetchDogBreed()
document.addEventListener('DOMContentLoaded', function(){
    fetchDogBreed()
})  


//  async function fetchDogBreed() {
//     let res = await fetch('https://dog.ceo/api/breeds/image/random/3')
//     console.log(res);
    //  let dogs = await res.json()
    //console.log(dogs)
//const url = new URL('https://dog.ceo/api/breeds/image/random/3');
//  const response = await fetch(url, {
//     headers:{
//         "Content-type: application/json",
//     }
//  });

//  if(response.status==200){

//  }
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
   
