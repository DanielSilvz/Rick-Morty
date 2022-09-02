let page = 1

const btnsiguiente = document.getElementById("next-page")
btnsiguiente.addEventListener("click",async () => {
page+= 1

const siguiente = await fetch ("https://rickandmortyapi.com/api/character/?page=" + page)
const siguiente2 = await siguiente.json()
console.log (siguiente2.results)

const charContainerElement = document.getElementById("char-container")

    charContainerElement.innerHTML = ''

    siguiente2.results.forEach ( (element)=> {
    
        charContainerElement.innerHTML += `
        
        <div class="char-card">
        <img width="120" height="120" src="${element.image}" alt="">
                <div class="char-info-container">
    
                    <div class="char-info">
                    <p class="text-gray">${element.name}</p>
                    <p class="text-white">${element.species} - ${element.status}</p>
                    </div>
    
                        <div class="char-info">
                            <p class="text-gray">${element.name} location:</p>
                            <p class="text-white">Lugar</p>   
                        </div>
    
                            <div class="char-info">
                                    <p class="text-gray">First seen in:</p>
                                    <p class="text-white">lugar</p>
                            </div>
                </div>
        </div>
  
        `
    })

})




// buscar el boton 
const btnAnterior = document.getElementById("back-page")

btnAnterior.addEventListener("click",async () =>{
page-= 1

const anterior = await fetch ("https://rickandmortyapi.com/api/character/?page=" + page)
const anterior2 = await anterior.json()
console.log(anterior2.results)

const charContainerElement = document.getElementById("char-container")

    charContainerElement.innerHTML = ''

    anterior2.results.forEach ( (element)=> {
    
        charContainerElement.innerHTML += `
        
        <div class="char-card">
        <img width="120" height="120" src="${element.image}" alt="">
                <div class="char-info-container">
    
                    <div class="char-info">
                    <p class="text-gray">${element.name}</p>
                    <p class="text-white">${element.species} - ${element.status}</p>
                    </div>
    
                        <div class="char-info">
                            <p class="text-gray">${element.name} location:</p>
                            <p class="text-white">Lugar</p>   
                        </div>
    
                            <div class="char-info">
                                    <p class="text-gray">First seen in:</p>
                                    <p class="text-white">lugar</p>
                            </div>
                </div>
        </div>
  
        `
    })

})



const btnElement = document.getElementById("button-seach")

btnElement.addEventListener("click", async () => {

    // buscar el input
    // inptElement.value

    const buscar = document.getElementById("seach-input")

    const character = buscar.value

    const responseach = await fetch ("https://rickandmortyapi.com/api/character/?name=" + character)

    const data = await responseach.json()
    console.log(data.results)
    
    const charContainerElement = document.getElementById("char-container")

    charContainerElement.innerHTML = ''

    data.results.forEach ( (element)=> {
    
        charContainerElement.innerHTML += `
        
        <div class="char-card">
        <img width="120" height="120" src="${element.image}" alt="">
                <div class="char-info-container">
    
                    <div class="char-info">
                    <p class="text-gray">${element.name}</p>
                    <p class="text-white">${element.species} - ${element.status}</p>
                    </div>
    
                        <div class="char-info">
                            <p class="text-gray">${element.name} location:</p>
                            <p class="text-white">Lugar</p>   
                        </div>
    
                            <div class="char-info">
                                    <p class="text-gray">First seen in:</p>
                                    <p class="text-white">lugar</p>
                            </div>
                </div>
        </div>
  
        `
    })
})


const init = async () => {
try {
//llamar a la API
const response = await fetch ("https://rickandmortyapi.com/api/character/?page=1")

//transforma la info a json
const data = await response.json()
console.log(data.results)

const charContainerElement = document.getElementById("char-container")
//iteramos



data.results.forEach( (element)=> {
    charContainerElement.innerHTML += `
    <div class="char-card">
        <img width="120" height="120" src="${element.image}" alt="">
            <div class="char-info-container">
                <div class="char-info">
                <p class="text-gray">${element.name}</p>
                <p class="text-white">${element.species} - ${element.status}</p>
                </div>
                    <div class="char-info">
                        <p class="text-gray">${element.name} location:</p>
                        <p class="text-white">Lugar</p>   
                    </div>
                        <div class="char-info">
                                <p class="text-gray">First seen in:</p>
                                <p class="text-white">lugar</p>
                        </div>
            </div>
    </div>
    
    `

} ) 

//mostramos dinamicamente
console.log("init");
} catch(error){
    console.error(error)
}
}


init()