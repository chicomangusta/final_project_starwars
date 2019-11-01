//People functions
let button      = document.querySelector('#button')
let name        = document.querySelector('#name')
let height      = document.querySelector('#height')
let gender      = document.querySelector('#gender')
let mass        = document.querySelector('#mass')
let birthYear   = document.querySelector('#birth-year')



function getInfo() { //get request
    updateLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 88) + 1)// random person
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber //



axios.get(apiUrl).then(response => {// use axios to request API data
      updateInfo(response.data)
    }).catch(error => { //identify errors
    console.log('oops this is an error')
  })
}

function updateInfo(data) {// request this datas from API
    name.innerText      = `Name: ${data.name}`
    height.innerText    = `Height: ${data.height}`
    gender.innerText    = `Gender: ${data.gender}`
    mass.innerText      = `Mass: ${data.mass}`
    birthYear.innerText = `Birth Year: ${data.birth_year}`
}

function updateLoading(data) {// request this datas from API
    name.innerHTML      = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    height.innerText    = ''
    gender.innerText    = ''
    mass.innerText      = ''
    birthYear.innerText = ''
}

button.addEventListener('click', getInfo)// click button and get info


// //Planets functions
let planet          = document.querySelector('#planet')
let name2           = document.querySelector('#name2')
let rotation_period = document.querySelector('#rotation_period')
let population      = document.querySelector('#population')
let terrain         = document.querySelector('#terrain')
let diameter        = document.querySelector('#diameter')



function getInfo() { //get request
    updateLoading() // show loanding icon before info
    let randomNumber = Math.floor((Math.random() * 60) + 1)// random person
    let apiUrl = 'https://swapi.co/api/planets/' + randomNumber //



axios.get(apiUrl).then(response => {// use axios to request API data
      updateInfo(response.data)
    }).catch(error => { //identify errors
    console.log('oops this is an error')
  })
}

function updateInfo(data) {// request this datas from API
    name2.innerText           = `Name: ${data.name}`
    rotation_period.innerText = `Rotation_period: ${data.rotation_period}`
    population.innerText      = `Population: ${data.population}`
    terrain.innerText         = `Terrain: ${data.terrain}`
    diameter.innerText        = `Diameter: ${data.diameter}`
}

function updateLoading(data) {// request this datas from API
    name.innerHTML            = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    rotation_period.innerText = ''
    population.innerText      = ''
    terrain.innerText         = ''
    diameter.innerText        = ''
}


planet.addEventListener('click', getInfo)// click button and get info
