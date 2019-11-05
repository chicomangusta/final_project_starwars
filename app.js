//Star Wars PEOPLE function
let button      = document.querySelector('#button')
let name        = document.querySelector('#name')
let height      = document.querySelector('#height')
let gender      = document.querySelector('#gender')
let mass        = document.querySelector('#mass')
let birthYear   = document.querySelector('#birth-year')



function getPeopleInfo() { //get request
    updatePeopleLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 88) + 1)// random person
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber //


    axios.get(apiUrl).then(response => {// use axios to request API data
      updatePeopleInfo(response.data)
    }).catch(error => { //identify errors
      console.log('oops this is an error')
    })
}

function updatePeopleInfo(data) {// request this datas from API
    name.innerText      = `Name: ${data.name}`
    height.innerText    = `Height: ${data.height}`
    gender.innerText    = `Gender: ${data.gender}`
    mass.innerText      = `Mass: ${data.mass}`
    birthYear.innerText = `Birth Year: ${data.birth_year}`
}

function updatePeopleLoading() {// request this datas from API
    name.innerHTML      = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    height.innerText    = ''
    gender.innerText    = ''
    mass.innerText      = ''
    birthYear.innerText = ''
}


button.addEventListener('click', getPeopleInfo)// click button and get info


//------------------------------//---------------------------//


//Star Wars PLANETS function
let planet          = document.querySelector('#planet')//BUTTON
let planet_name     = document.querySelector('#name2')
let rotation_period = document.querySelector('#rotation_period')
let population      = document.querySelector('#population')
let terrain         = document.querySelector('#terrain')
let diameter        = document.querySelector('#diameter')



function getPlanetInfo() { //get request
    updatePlanetLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 60) + 1)// random person
    let apiUrl = 'https://swapi.co/api/planets/' + randomNumber //

    axios.get(apiUrl).then(response => {// use axios to request API data
      updatePlanetInfo(response.data)
    }).catch(error => { //identify errors
      console.log('oops this is an error')
    })
}

function updatePlanetInfo(data) {// request this datas from API
    planet_name.innerText     = `Name: ${data.name}`
    rotation_period.innerText = `Rotation_period: ${data.rotation_period}`
    population.innerText      = `Population: ${data.population}`
    terrain.innerText         = `Terrain: ${data.terrain}`
    diameter.innerText        = `Diameter: ${data.diameter}`
}

function updatePlanetLoading(data) {// request this datas from API
    planet_name.innerHTML     = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    rotation_period.innerText = ''
    population.innerText      = ''
    terrain.innerText         = ''
    diameter.innerText        = ''
}


planet.addEventListener('click', getPlanetInfo)// click button and get info






//=================================//==========================================//================================






//Star Wars FILMS function
let films        = document.querySelector('#films')//BUTTON
let film_title   = document.querySelector('#film_title')
let episode_id   = document.querySelector('#episode_id')
let director     = document.querySelector('#director')
let release_date = document.querySelector('#release_date')




function getFilmsInfo() { //get request
    updateFilmsLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 6) + 1)// random person
    let apiUrl = 'https://swapi.co/api/films/' + randomNumber //


    axios.get(apiUrl).then(response => {// use axios to request API data
      updateFilmsInfo(response.data)
    }).catch(error => { //identify errors
      console.log('oops this is an error')
    })
}

function updateFilmsInfo(data) {// request this datas from API
    film_title.innerText   = `Title: ${data.title}`
    episode_id.innerText   = `Episode Id: ${data.episode_id}`
    director.innerText     = `Director: ${data.director}`
    release_date.innerText = `Release Date: ${data.release_date}`
}

function updateFilmsLoading() {// request this datas from API
    film_title.innerHTML   = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    episode_id.innerText   = ''
    director.innerText     = ''
    release_date.innerText = ''
}


films.addEventListener('click', getFilmsInfo)// click button and get info






//=================================//==========================================//================================






//Star Wars STARSHIPS function
let starships         = document.querySelector('#starships')//BUTTON
let ship_name         = document.querySelector('#name3')
let model             = document.querySelector('#model')
let manufacturer      = document.querySelector('#manufacturer')
let length            = document.querySelector('#length')
let hyperdrive_rating = document.querySelector('#hyperdrive_rating')



function getStarshipsInfo() { //get request
    updateStarshipsLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 36) + 1)// random person
    let apiUrl = 'https://swapi.co/api/starships/' + randomNumber //


    axios.get(apiUrl).then(response => {// use axios to request API data
      updateStarshipsInfo(response.data)
    }).catch(error => { //identify errors
      console.log('oops this is an error')
    })
}

function updateStarshipsInfo(data) {// request this datas from API
    ship_name.innerText         = `Name : ${data.name }`
    model.innerText             = `Model: ${data.model}`
    manufacturer.innerText      = `Manufacturer: ${data.manufacturer}`
    length.innerText            = `Length: ${data.length}`
   hyperdrive_rating.innerText = `Hyperdrive Rating: ${data.hyperdrive_rating}`
}

function updateStarshipsLoading() {// request this datas from API
    ship_name .innerHTML        = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    model.innerText             = ''
    manufacturer.innerText      = ''
    length.innerText            = ''
}   hyperdrive_rating.innerText = ''


starships.addEventListener('click', getStarshipsInfo)// click button and get info// click button and get info
