// Create the hotel template
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

// Create hotel objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);
var sunsetHotel = new Hotel("Sunset", 86, 10);

// Updates the rooms value for hotel1 (quay)
var details1 = quayHotel.name + " rooms: ";
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = details1;

// Updates the rooms value for hotel2 (park)
var details2 = parkHotel.name + " rooms: ";
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = details2;

// Updates the rooms value for hotel3 (sunset)
var details3 = sunsetHotel.name + " rooms: ";
details3 += sunsetHotel.checkAvailability();
var elHotel3 = document.getElementById("hotel3");
elHotel3.textContent = details3;
    
