function produceReport(){

    event.preventDefault();

    let data = [];
    data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
    data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
    data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
    data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

   let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

   document.getElementById("outputData").innerHTML += "<Br>"

   document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.shed_A + " litres per day</p>";
   document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.shed_B + " litres per day</p>";
   document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.shed_C + " litres per day</p>";
   document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.shed_D + " litres per day</p>";

   document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";
   

   dailyIncome = sumData * 45;
   
   document.getElementById("outputData").innerHTML += "<Br>"

   document.getElementById("outputData").innerHTML += "<hr>"

   document.getElementById("outputData").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

   document.getElementById("outputData").innerHTML += "<hr>"

   weeklyIncome = dailyIncome * 7;

   document.getElementById("outputData").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

   document.getElementById("outputData").innerHTML += "<hr>"

   document.getElementById("outputData").innerHTML += "<Br>"

   incomeJanuary = dailyIncome * 31;
   incomeFebruary = dailyIncome * 29;
   incomeMarch = dailyIncome * 31;
   incomeApril = dailyIncome * 30;
   incomeMay = dailyIncome * 31;
   incomeJune = dailyIncome * 30;
   incomeJuly = dailyIncome * 31;
   incomeAugust = dailyIncome * 31;
   incomeSeptember = dailyIncome * 30;
   incomeOctober = dailyIncome * 31;
   incomeNovember = dailyIncome * 30;
   incomeDecember = dailyIncome * 31;

   



  

}