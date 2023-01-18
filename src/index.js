document.addEventListener('DOMContentLoaded', getDogs)

function getDogs(){
fetch ('http://localhost:3000/pups')
.then (res => res.json())
.then (dogData => dogData.forEach(renderDogs))
}

getDogs();

const dogPic = document.createElement('img')
const h2 = document.createElement('h2')
const button = document.createElement('button')


function renderDogs(dogData) {
    //console.log(dogData)
    const div = document.querySelector("#dog-bar")
    const dogInfo = document.querySelector("#dog-info")
    const span = document.createElement ('span');
    span.textContent = dogData.name;
    div.appendChild(span)
    
    span.addEventListener('click',(e) => {
        
        dogPic.src = dogData.image
        h2.textContent = dogData.name
        if(dogData.isGoodDog === true)
                button.textContent = 'Good Dog!';
            else
                button.textContent = 'Bad Dog!';
        dogInfo.appendChild(h2)      
        dogInfo.appendChild(dogPic)
        dogInfo.appendChild(button)
        
        button.addEventListener('click', (e) => {
            if (dogData.isGoodDog === true){
            dogData.isGoodDog = false
            button.textContent = 'Bad Dog!'}
            else 
            {dogData.isGoodDog = true;
            button.textContent = 'Good Dog!'}
            
        })
        
    })
}


