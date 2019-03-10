  

if (confirm('You can only proceed if you have an ADA account')) {
} else {
    window.close();}



    // Reference messages collection
var messagesRef = firebase.database().ref('Etudiant');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nom = getInputVal('nom');
  var slide = getInputVal('slide');
  var message = getInputVal('msg');

  // Save message
  saveMessage(nom,slide,message);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nom,slide,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nom: nom,
    slide:slide,
    message:message
  });
}