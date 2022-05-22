'use strict'
const API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=58ee28dd35a0fca7dfc2113ebf61d147'
const APISEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=58ee28dd35a0fca7dfc2113ebf61d147&query='
const IMAGE = 'https://image.tmdb.org/t/p/w500/'

const fetchMovie = async () => {
    const response = await fetch(API)
    const movies = await response.json()
    return movies
}
fetchMovie().then(movie => {
    displayMovies(movie.results)
})

const displayMovies = (allMovies) => {
    const container = document.querySelector('.movies')
    container.innerHTML = ''

    let itemHTML = ''
    allMovies.forEach((item, index) => {
        itemHTML +=     `<a class="movie" data-my-id='${ item.id }' href='#${ item.id }'>
                            <article>
                                <img src="${ IMAGE + item.poster_path }" alt="${ item.title }" title="${ item.title }" id="${ item.id}">
                                <h3>${ item.title }</h3>
                            </article>
                        </a>`
    })

    container.innerHTML = itemHTML
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.form-input').addEventListener('keyup', (evt) => {
        let searchValue = evt.target.value
        
        if (searchValue.length <= 1) return false

        const fetchMovie = async () => {
            const response = await fetch(APISEARCH + searchValue)
            const movies = await response.json()
            return movies
        }
        fetchMovie().then(movie => {
            displayMovies(movie.results)
        })
    })
})

document.querySelectorAll('.movies').forEach(el => {
    const modal = document.querySelector('.modal')

    el.addEventListener('click', e => {
        
        const id = e.target.getAttribute("id")
        
        modal.classList.remove('hidden')
        modal.classList.add('visible')

        const fetchMovieModal = async () => {
            const responseModal = await fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=58ee28dd35a0fca7dfc2113ebf61d147&language=en-US')
            const movieModal = await responseModal.json()
            return movieModal
        }
        fetchMovieModal().then(movieModal => {
            displayMoviesModal(movieModal)
            console.log(movieModal)
        })
    })
})


const displayMoviesModal = (getMovieModal) => {
    const container = document.querySelector('.modal-container')
    container.innerHTML = ''

    let itemHTML = ''

     try{
        console.log(getMovieModal.title)
         
            itemHTML += 
        
                    `<div class="modal-container-close"> 
                        <img onclick="closeModal()" src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-close-doodle-web-design-device-set-2-doodle-bomsymbols-.png"/>
                    </div>
                    <section class="card"> 
                        <div class="card-left">
                            <img src="${IMAGE+ getMovieModal.poster_path}">
                        </div>
                        <div class="card-right">
                            <h2>${ getMovieModal.title}</h2>
                            <p>${ getMovieModal.overview}</p>
                            
                        </div>
                    </section>
                    `
                    const buttonClose = document.querySelector(".modal-container-close")

    }catch(error){
        console.log(error)
    }

    setTimeout(() => {

        container.innerHTML = itemHTML

    },200)
}

const closeModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
    console.log("se está ejecutando closeModal")
}



