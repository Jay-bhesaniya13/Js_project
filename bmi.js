


function display() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let bmi = ((weight * 10000) / (height * height)).toFixed(2);
  let age = document.getElementById('age').value;

  if (isFinite(age)) {

    if (age < 18 || age > 65) {
      alert("You are not eligible !!");
    }
    else {
     
      let result_color=document.getElementById("conclusion");

      document.getElementById("display").innerHTML = "Your BMI is " + bmi;

      if (bmi <= 18.4) {
        document.getElementById("conclusion").innerHTML = "You are Underweight"
       result_color.style.color="yellow";
      }

      else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("conclusion").innerHTML = "You are absolute fine "
        result_color.style.color="green";
        console.log(bmi)
      }

      else if (bmi >= 25 && bmi <= 39.9) {
        document.getElementById("conclusion").innerHTML = "You are Overweight"
        result_color.style.color="orange";
        console.log(bmi)
      }
      else {
        document.getElementById("conclusion").innerHTML = "You are Obese";
        result_color.style.color="red";
      }
    }
  }
  else{
    alert("Please check details !! ")
  }

}
