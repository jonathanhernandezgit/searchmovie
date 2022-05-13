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
    //  quitar los valores por defecto del DOM
    const container = document.querySelector('.movies')
    container.innerHTML = ''

    let itemHTML = ''
    allMovies.forEach((item, index) => {
        itemHTML +=     `<a class="movie" data-my-id='${ item.id }' href='#${ item.id }'>
                            <article>
                                <img src="${ IMAGE + item.poster_path }" alt="${ item.title }" title="${ item.title }">
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

