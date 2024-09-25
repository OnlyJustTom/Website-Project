function emailCopy() {
    // Get the element where the text to copy is
    var copyText = document.getElementById("copyText");
  
     // Copy the text inside the element to the clipboard
    navigator.clipboard.writeText(copyText.innerHTML);
  
    // Alert the user that the text has been copied
    alert("Copied the text: " + copyText.innerHTML);
}

//This function runs on the press of the submit button in the register.html file
function checkRegister(){
  //Gets the input forms
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone")

  //Checks if the elements are empty if they are then the user is alerted to this
  if(!name.value){
    alert("Please enter a name")
  }
  if(!email.value){
    alert("Please enter an email")
  }
  if(!address.value){
    alert("Please enter an address")
  }
  if(!phone.value){
    alert("Please enter a phone number")
  }

  //Tests to see if the name has only letters in it, if not the user is alerted
  var nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name.value)) {
    alert('Please enter a valid name with only letters.');
  }
  //Tests to see if the email address has an @ symbol and a . in it, if not the user is alerted
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      alert('Please enter a valid email address.');
  }
  //Tests to see if the phone number is only numbers, if not the user is alerted
  var phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone.value)) {
    alert('Please enter a valid phone number with only numbers.');
  }
}

function filterTable() {
  //Gets the day selected as well as the elements of the table
  var dropdown=document.getElementById("day");
  var selected=dropdown.value;
  var table=document.getElementById("timetable");
  var rows=table.getElementsByTagName("tr");

  // For i in range(lenght of the schedule)
  for(var i=1;i<rows.length;i++)
  {
    //Set the day variable equal to the day in the array row
      var row=rows[i];
      var day=row.cells[0].textContent.trim()

      //If the day != to the selected by the dropdown menu then the display is set to none hiding it and only showing the selected day,
      //If all is selected then display: none; is removed from all days showing them all 
      if(selected==="All" || day===selected)
      {
          row.style.display="";
      }
      else{
          row.style.display="none";
      }
  }
}



// function callFunction() {
//   //Get the selected day from the dropdown menu
//   var selectedDay = document.getElementById('dayChosen').value;
  
//   // Hide all days
//   var days = document.querySelectorAll('.day');
//   days.forEach(function(day) {
//       day.classList.add('hidden');                                   //This function didnt work and has been replaced by the filterTable() function
//   });

//   // Show the selected day
//   if (selectedDay !== 'All') {
//       var selectedDayElement = document.getElementById('dayChosen');
//       selectedDayElement.classList.remove("hidden");
//   }
// }