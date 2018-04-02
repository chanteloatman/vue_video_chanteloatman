var myApp = {
  //same code that wouldn't necessarily go inside a viewmodel here
  movieGenres(data, genres){
    //filter dataset and create arry of genres
    genres.forEach((genre, index) => myApp.vm.genres.push({n
      ame : genre, movies : data.filter(movie => movie.genre_name === genre)}));
  },
  vm : new Vue({
    delimiters : ["${","}"],
    el : "#app",

    data : {
      message : "Welcome to Vue! and my Video App",

      genres : []
    },

methods : {

}

  })
}

myApp.movieGenres(appData.movies, ["Family", "Drama"]);
