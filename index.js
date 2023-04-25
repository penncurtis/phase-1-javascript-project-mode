fetch("http://localhost:3000/jedis")
.then(res => res.json())
.then(jediData => {
    JediCouncilDisplay(jediData),
    showcaseJedi(jediData[0]),
    addNewJedi()
})


const JediCouncilDisplayNav = document.querySelector("#Jedi-council")

const jediName = document.querySelector(".name")
const jediDOB = document.querySelector(".birth-year")
const jediImage = document.querySelector(".detail-image")
const jediSpecies = document.querySelector("#species-display")
const jediMovies = document.querySelector("#featured-movies-display")

function JediCouncilDisplay(jedis){
    jedis.forEach(jedi => {
        const eachJedi = document.createElement('img')
        eachJedi.src = jedi.image
        JediCouncilDisplayNav.appendChild(eachJedi)
        eachJedi.addEventListener('click', event => {
            showcaseJedi(jedi)
        })
        eachJedi.addEventListener('mouseover', event => {
            addGlow(event, eachJedi);
        })
    })
}

function addGlow(event, jediImage) {
    const colors = ['red', 'blue', 'green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    jediImage.style.borderColor = randomColor;
    jediImage.style.borderWidth = '5px';
    jediImage.style.borderStyle = 'solid';
  }

function showcaseJedi(jedis){
    jediName.textContent = jedis.name
    jediDOB.textContent = jedis.yearOfBirth
    jediImage.src = jedis.image
    jediSpecies.textContent = jedis.species
    jediMovies.textContent = jedis.movies

    jediImage.addEventListener('mousemove', event => {
        addGlow(event, jediImage);
    })
}

const newJediName = document.querySelector("#new-name")
const newJediDOB = document.querySelector("#new-birth-year")
const newJediImage = document.querySelector("#new-jedi-image")
const newJediSpecies = document.querySelector("#new-species")
const newJediMovies = document.querySelector("#new-movies")

function addNewJedi(){
    const newJediForm = document.querySelector("#new-jedi")
    newJediForm.addEventListener('submit', event => {
        event.preventDefault()
        const newJedi = {
            name: newJediName.value,
            birthYear: newJediDOB.value,
            image: newJediImage.value,
            species: newJediSpecies.value,
            movies: newJediMovies.value,
        }
        JediCouncilDisplay([newJedi])
    })
}
