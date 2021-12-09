let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);


const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};

let a = prompt('один из последних просмотренных фильмов?'),
    b=prompt('на сколько оцените его?');
    // c=prompt('один из последних просмотренных фильмов?'),
    // d=prompt('на сколько оцените его?');
    
    personalMovieDB.movies[a]=b;
    // personalMovieDB.movies[c]=d;

    console.log(personalMovieDB);
    console.log(a.length);

    


// мой вариант
// let question=[];

// question[0] = prompt('один из последних просмотренных фильмов?');
// question[1] = prompt('на сколько оцените его?');

// const movies=[question[0],question[1]] ;
// console.log(movies);



// 2

if(numberOfFilms !==""){
  
    prompt('сколько фильмов вы уже посмотрели?');
  
}  
  else{};




for(i=1;numberOfFilms.length>50;i++){
  alert('название фильма больше 50ти символов')
  // prompt('вы не ввели количество фильмов')

}

// 3

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