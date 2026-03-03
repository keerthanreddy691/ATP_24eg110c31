
//ASSIGNMENT 4: 
//------------
//Movie Streaming Platform

//You are working on a movie recommendation system.

//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
  //  1. filter() only "Sci-Fi" movies
  let movie=movies.filter((movieobj)=>movieobj.genre=='Sci-Fi')
  console.log(movie)
    //2. map() to return:
//            "Inception (8.8)"
let mrate=movies.map((movieobj)=>{
   if (movieobj.rating==8.8){
     return "inception (8.8)"
   }
} )
  
console.log(mrate)

  //  3. reduce() to find average movie rating
  let avgmovie=movies.reduce((add,movieobj)=>
    (add+movieobj.rating)
  
  

  
  
  ,0)
  console.log(avgmovie/movies.length)
    //4. find() movie "Joker"
    let f1=movies.find((movieobj)=>movieobj.title=='Joker')
    console.log(f1)
    //5. findIndex() of "Avengers"
    let fI=movies.findIndex((movieobj)=>movieobj.title=='Avengers')
    console.log(fI)
