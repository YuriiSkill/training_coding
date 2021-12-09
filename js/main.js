let numberOfFilms = prompt('сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);


const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};

let a = prompt('один из последних просмотренных фильмов?'),
    b=prompt('на сколько оцените его?'),
    c=prompt('один из последних просмотренных фильмов?'),
    d=prompt('на сколько оцените его?');
    
    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;

    console.log(personalMovieDB);

    


// мой вариант
// let question=[];

// question[0] = prompt('один из последних просмотренных фильмов?');
// question[1] = prompt('на сколько оцените его?');

// const movies=[question[0],question[1]] ;
// console.log(movies);
