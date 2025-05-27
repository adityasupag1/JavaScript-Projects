let userInput = document.querySelector('#date');
userInput.max = new Date().toISOString().split("T")[0];  
function ageCalculate() {

  let birthDate = new Date(userInput.value);
  let d1= birthDate.getDate();
  let m1= birthDate.getMonth()+1;
  let y1=birthDate.getFullYear();
  

  let today= new Date();
  let m2= today.getMonth()+1;
  let d2= today.getDate();
  let y2=today.getFullYear();

  
  let d3,m3,y3;
  // year calculation
   y3= y2-y1;
  //month calculation
  if(m2>=m1){
    m3=m2-m1;
  }
  else{
    y3--;
    m3= m2-m1+12;
  }
  // day calculation
  if(d2>d1){
    d3= d2-d1;
  }
  else {
    m3--;
    d3= getDaysInMonth(y1,m1)+d2-d1;
  }
  displayAge(y3,m3,d3);

}

  function displayAge(year, month, day){
    let displayResult= document.querySelector('#result');
    displayResult.innerHTML=`You are 
    <span>${year}</span> Years, <span>${month}</span> Months and <span> ${day} </span> days older. 🙂`
  }

function getDaysInMonth(year, month){
  return new Date(year, month,0).getDate()
}



