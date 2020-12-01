/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/
let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';

//http://www.omdbapi.com/?i=tt3896198&apikey=924c3afa
var container = document.getElementById('container');
var fetchMovies = document.getElementById('fetch-movies');
var fetchSeries = document.getElementById('fetch-series');
var output = document.getElementById('output');

fetchMovies.addEventListener('click', fetchDataMovies)


async function fetchDataMovies() {//fetchar data från OMDB
    try{
        let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=924c3afa&s=batman&type=movie');
        let data = await response.json();

        
        console.log(data);

        var movieHTML = "";
        for (let movie of data.Search) { //hämtar titlar
            movieHTML += `<h2>${movie.Title + ', ' + movie.Year}<h2>`;
            movieHTML += `<img src="${movie.Poster}">`;
        }

        output.innerHTML = movieHTML;

        // Place the generated HTML in list
    } catch(message) {
        throw new Error(message);
    }
}
fetchDataMovies();



fetchSeries.addEventListener('click', fetchDataSeries)


async function fetchDataSeries() {//fetchar data från OMDB
    try{
        let response1 = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=924c3afa&s=batman&type=series');
        let data1 = await response1.json();

        
        console.log(data1);

        var seriesHTML = "";
        for (let series of data1.Search) { //hämtar titlar
            seriesHTML += `<h2>${series.Title + ', ' + series.Year}<h2>`;
            seriesHTML += `<img src="${series.Poster}">`;
        }

        output.innerHTML = seriesHTML;

        // Place the generated HTML in list
    } catch(message) {
        throw new Error(message);
    }
}

