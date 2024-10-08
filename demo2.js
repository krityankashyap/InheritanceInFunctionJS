function Events(date){
    this.date = date;
}
Events.prototype.bookEvents = function() {
    console.log("booking events");
}
function Movie(name) {
    this.name = name;
}

 Movie.prototype = Object.create(Events.prototype);

 c = new Movie("deadpool");