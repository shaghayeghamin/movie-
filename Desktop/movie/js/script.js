const slideContainer = document.querySelector('.slider-container')
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slides')
const searchInput = document.querySelector('#search-input')
const sliderContainer = document.querySelector(".slider-container");
const moviesSection = document.querySelector(".movies-section");


let current = 0;

function updateSlider() {

    slides.forEach(slide => {
        slide.classList.remove(
            "slide-active",
            "second",
            "third",
            "fourth",
            "fifth"
        );
    });

    slides[current].classList.add("slide-active");
    slides[(current + 1) % slides.length].classList.add("second")
    slides[(current + 2) % slides.length].classList.add("third")
    slides[(current + 3) % slides.length].classList.add("fourth")
    slides[(current + 4) % slides.length].classList.add("fifth")

    current = (current + 1) % slides.length;
}
updateSlider()

const interval=setInterval(updateSlider, 3000)

const apiKey = '0a2f695c3deaa0d1f4445c69377918d4'
const API_KEY =  '0a2f695c3deaa0d1f4445c69377918d4'

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const images = document.querySelectorAll(".slides img");
        const years = document.querySelectorAll('.year')
        const genre = document.querySelectorAll('.genre')

        images[0].src = `https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`;
        years[0].textContent=data.results[0].release_date
        genre[0].textContent = genre[0].textContent = genres[data.results[0].genre_ids[0]];
        genre[1].textContent = genre[1].textContent = genres[data.results[0].genre_ids[1]];


        images[1].src = `https://image.tmdb.org/t/p/original${data.results[1].backdrop_path}`;
        years[1].textContent=data.results[1].release_date
        genre[2].textContent = genre[2].textContent = genres[data.results[1].genre_ids[0]];
        genre[3].textContent = genre[3].textContent = genres[data.results[1].genre_ids[1]];

        images[2].src = `https://image.tmdb.org/t/p/original${data.results[2].backdrop_path}`;
        years[2].textContent=data.results[2].release_date
        genre[4].textContent = genre[4].textContent = genres[data.results[2].genre_ids[0]];
        genre[5].textContent = genre[5].textContent = genres[data.results[2].genre_ids[1]];

        images[3].src = `https://image.tmdb.org/t/p/original${data.results[3].backdrop_path}`;
        years[3].textContent=data.results[3].release_date
        genre[6].textContent = genre[6].textContent = genres[data.results[3].genre_ids[0]];
        genre[7].textContent = genre[7].textContent = genres[data.results[3].genre_ids[1]];

        images[4].src = `https://image.tmdb.org/t/p/original${data.results[4].backdrop_path}`;
        years[4].textContent=data.results[4].release_date
         genre[8].textContent = genre[8].textContent = genres[data.results[4].genre_ids[0]];
         genre[9].textContent = genre[9].textContent = genres[data.results[4].genre_ids[1]];

    });

    const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};



function moviesearch(){
    const movieName = searchInput.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0a2f695c3deaa0d1f4445c69377918d4&query=${encodeURIComponent(movieName)}&language=en-US&page=1`)
     .then(res => res.json())
    .then(data =>{
        console.log(data)
        const resultsContainer = document.querySelector(".search-results");

sliderContainer.style.display = "none";
moviesSection.style.display = "none";
resultsContainer.style.display = "block";

resultsContainer.innerHTML = "";

data.results.forEach(movie => {

    resultsContainer.innerHTML += `
        <div class="result-card">

            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">

            <div class="result-info">

                <h2>${movie.title}</h2>

                <p>${movie.release_date}</p>


            </div>

        </div>
    `;

})});
   
}

searchInput.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        moviesearch()
    }

})










    





