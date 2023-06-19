// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(element => element.director);
    return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(element => element.genre.includes ("Drama" && element.director === "Steven Spielberg" );
    let result = avgScore / moviesArray.length;
    if (moviesArray.length === 0) {
        return 0
    }
    return Math.round(result *100) / 100;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const avgScore = moviesArray.map(element => element.score)
    .filter (avgScore => typeof avgScore === "number")
    .reduce((acc , element) => acc + element, 0)
    
     if (moviesArray.length === 0) {
        return 0
     }
     
    
     let result = avgScore / (moviesArray.length);
        return Math.round(result *100) /100;
          
}



  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => element.genre.includes("Drama")).map(element => element.score).reduce((acc, element) => acc + element, 0)
    const totalMovies = moviesArray.filter(element => element.genre.includes("Drama")).length

    if (totalMovies === 0){
        return 0
    }
    let result = dramaMovies / totalMovies
    return Math.round(result * 100) /100;
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = moviesArray.map(element => element)  
    .sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
         
    return movieYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticalMovies = moviesArray.map(element => element.title)
    .sort((a, b) => a.localeCompare(b));
    if (alphabeticalMovies.length >= 20){
        return alphabeticalMovies.slice(0, 20)
    }else {
        return alphabeticalMovies;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
