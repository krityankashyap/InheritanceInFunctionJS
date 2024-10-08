function Events(dateOfEvent){
    this.dateOfEvent = dateOfEvent;
}
Events.prototype.bookEvents = function() {
    console.log("booking events");
}
function Movie(name){
    this.name = name;
}
Movie.prototype.__proto__ = Events.prototype;

new Movie("Avengers");