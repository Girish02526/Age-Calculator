function calculateAge(){
  var date = document.getElementById("dob").value;
  var birthDate = new Date(date);
  var today = new Date();
  // console.log(today)
  // console.log(birthDate)
  var years = today.getFullYear() - birthDate.getFullYear()
  // console.log(years)
  document.getElementById("result").innerHTML= `${years} YEARS`
}