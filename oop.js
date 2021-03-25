function Movies(title,genre,year){
    this.title = title;
    this.genre = genre;
    this.year = year;
}
Movies.prototype.print= function() {
    console.log(`${this.title} is a ${this.genre} that was relased in ${this.year}.`);
}


const starWars = new Movies('Star Wars', 'SciFi', 1976);

const theTerminator = new Movies('The Terminator','SciFi', 1984);


const groundHogDay = new Movies('Groundhog Day', 'Comedy', 1993); 

const movies = [starWars, theTerminator, groundHogDay];
movies.forEach(movie => {
    movie.print();
});
