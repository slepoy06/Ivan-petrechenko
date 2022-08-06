" use strict"; 

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильов', '');
let b = prompt('На сколько вы его оцените', '');
let c = prompt('Один из последних просмотренных фильов', '');
let d = prompt('На сколько вы его оцените', '');

 personaMovieDB.movies[a] = b;
 personaMovieDB.movies[c] = d;
