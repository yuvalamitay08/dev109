// Create the hotel template
function Hotel(name, booked, rooms) {
  this.name = name;
  this.booked = booked;
  this.rooms = rooms;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
};
  
// Create hotel objects
var quay = new Hotel("Quay", 40, 25);
var park = new Hotel("Park", 120, 77);
var sunset = new Hotel("Sunset", 86, 10);
}

// Updates the rooms value for hotel1 (quay)
var details1 = quay.name + " rooms: ";
details1 += quay.checkAvailability();
var elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = details1;

// Updates the rooms value for hotel2 (park)
var details2 = park.name + " rooms: ";
details2 += park.checkAvailability();
var elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = details2;

// Updates the rooms value for hotel3 (sunset)
var details3 = sunset.name + " rooms: ";
details3 += sunset.checkAvailability();
var elHotel3 = document.getElementById("hotel3");
elHotel3.textContent = details3;
    
