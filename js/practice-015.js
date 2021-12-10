"use strict";

let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);


const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};


    for(i=0; i<2; i++){
      let a = prompt('один из последних просмотренных фильмов?'),
          b=prompt('на сколько оцените его?');

          personalMovieDB.movies[a]=b; 
    }
    
    console.log(personalMovieDB);




if(personalMovieDB.count<10){
  alert('просмотрено довольно мало фильмов');
}
else if(personalMovieDB.count<=30){
  alert('вы классический зритель');
}
else if(personalMovieDB.count>30){
  alert('вы киноман');
}
else{
  alert('произошла ошибка');
}