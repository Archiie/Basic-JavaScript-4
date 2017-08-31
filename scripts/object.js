//using object literal

var archita = {
    name: "Archita",
    shirtColour: "red"
  };

var mitra = {
    name: "Mitra",
    shirtColour: "blue"
  };

//using object constructor, DRY concept is being implemented

function Friend(name, shirtColour) {
  "use strict";
  this.name = name;
  this.shirtColour = shirtColour;
}

var manju = new Friend("Manju", "yellow");

window.alert(manju.name + " is wearing a " + manju.shirtColour + " shirt.");