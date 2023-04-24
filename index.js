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
    })
}

function showcaseJedi(jedis){
    jediName.textContent = jedis.name
    jediDOB.textContent = jedis.yearOfBirth
    jediImage.src = jedis.image
    jediSpecies.textContent = jedis.species
    jediMovies.textContent = jedis.movies
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
        showcaseJedi(newJedi)
    })
}


// document.addEventListener('keydown', function(event) {
//     if(event === 'Space') {
//   if(event === ‘Anakin Skywalker’){
//   Return document.body.style.backgroundColor = 'red';
//   } 
//   else if (event === ‘Yoda’) {
//       Return document.body.style.backgroundColor = 'green';
//   } 
//   else if (event === ‘Mace Windu’){
//       Return document.body.style.backgroundColor = ‘purple';
//       }
//   else if (event === ‘Coleman Kcaj’){
//       Return document.body.style.backgroundColor = ‘green';
//       }
//   else if (event === ‘Saesse Tiin’){
//       Return document.body.style.backgroundColor = ‘green';
//       }
//   else if (event === ‘Oppo Rancisis’){
//       Return document.body.style.backgroundColor = ‘green';
//       }
//   else if (event === ‘Kit Fisto’){
//       Return document.body.style.backgroundColor = ‘green';
//       }
//   else if (event === ‘Luminara Unduli’){
//       Return document.body.style.backgroundColor = ‘green';
//       }
//   else if{
//       Return document.body.style.backgroundColor = 'blue';
//       }
//     }
//   });
  

document.addEventListener('keydown', function(event) {
    if(event.code === 'Space') {
      if(event.code === 'KeyA'){
        document.body.style.backgroundColor = 'red';
      } 
      else if(event.code === 'KeyY') {
        document.body.style.backgroundColor = 'green';
      }
      else if(event.code === 'KeyM'){
        document.body.style.backgroundColor = 'purple';
      }
      else if(event.code === 'KeyC'){
        document.body.style.backgroundColor = 'green';
      }
      else if(event.code === 'KeyS'){
        document.body.style.backgroundColor = 'green';
      }
      else if(event.code === 'KeyO'){
        document.body.style.backgroundColor = 'green';
      }
      else if(event.code === 'KeyK'){
        document.body.style.backgroundColor = 'green';
      }
      else if(event.code === 'KeyL'){
        document.body.style.backgroundColor = 'green';
      }
      else {
        document.body.style.backgroundColor = 'blue';
      }
    }
  });