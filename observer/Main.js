// Extend an object with an extension
function extend( parent, child ){
  for ( var key in parent ){
    child[key] = parent[key];
  }
}
 
// References to our DOM elements
 
var controlCheckbox = document.getElementById( "mainCheckbox" ),
  addBtn = document.getElementById( "addNewObserver" ),
  container = document.getElementById( "observersContainer" );
 
 
// Concrete Subject
 
// Extend the controlling checkbox with the Subject class
extend( new Subject(), controlCheckbox );
 
// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function(){
  controlCheckbox.notify( controlCheckbox.checked );
};
 
addBtn.onclick = addNewObserver;

 
// Concrete Observer
checkboxes = [];
function addNewObserver(){
 
  // Create a new checkbox to be added
  var check  = document.createElement( "input" );
  check.type = "checkbox";
 
  // Extend the checkbox with the Observer class
  extend( new Observer(), check );
 
  // Override with custom update behaviour
  check.update = function( value ){
    this.checked = value;
  };

  checkboxes.push(check);
 
  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver( check );
 
  // Append the item to the container
  container.appendChild( check );
}
