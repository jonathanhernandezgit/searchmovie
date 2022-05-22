const fetchData = require('../utils/fetchData');

const API = 'https://api.themoviedb.org/3/search/movie?api_key=58ee28dd35a0fca7dfc2113ebf61d147&query=';

fetchData(API +'batman')
//const movie = document.querySelector(".movie")
    .then(datos => {
        let iteraciones = Object.keys(datos).length;
        let url_image = ""
        let html = ''

        for (var i = 1; i <= iteraciones; i++){
            console.log( datos.results[i].title)    
           
        }
     
    })

    .catch(err => console.error(err));





/*

fetchData(API_ +'deadpool')


    .then(datos => {



        forEach(obj => {

            
            Object.entries(obj).forEach(([key,value]) => {
                console.log(data.results[0].original_title);
                console.log(data.results[0].overview);
                console.log(data.results[0].release_date);
                console.log(data.results[0].poster_path);
  
            })
        });

    

       
    })

    .catch(err => console.error(err));


*/