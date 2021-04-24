
let c=0;
function timer() {
	let timeleft=document.getElementById("t")
	timeleft.style.display="block";
	let k=document.getElementById("demo")
	let count=100
	let uniqueId=setInterval(function(){
		k.textContent=count
		if(count>0){
			
			count=count-1
		}
		else
		{
			clearInterval(uniqueId)
			alert("time up")
			location.replace("Testpress.html")
			
		}
},1000)
 
}


function myFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction1() {
  let checkBox = document.getElementById("myCheck1");
  let text = document.getElementById("text1");
  if (checkBox.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction2() {
  let checkBox = document.getElementById("myCheck2");
  let text = document.getElementById("text2");
  if (checkBox.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}

function myFunction3() {
  let checkBox = document.getElementById("myCheck3");
  let text = document.getElementById("text3");
  if (checkBox.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}

function yourAnswer(){
	
	let checkboxValue=document.getElementById("myCheck3");
	if(checkboxValue.checked==true)
	{
		if(checkboxValue.value=="HyperTextMarkupLanguage")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
		else
		{
			localStorage.setItem("total_score",0)
		}
		
	}
	else
	{
		localStorage.setItem("total_score",0)
	}
}

function TotalScore(){
	let result=document.getElementById("d");
	let saveScore=document.getElementById("scoring");
	let savescore=localStorage.getItem("total_score");
	saveScore.textContent=savescore;
	if(savescore>=6)
	{
		result.textContent="Pass";
		result.style.color="green";
	}
	else
	{
		result.textContent="Fail";
		result.style.color="red";
	}
		
}
function myFunction4() {
  let checkBox4 = document.getElementById("myCheck4");
  let text = document.getElementById("text4");
  if (checkBox4.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } 
  else 
  {
     text.style.display = "none";
  }
}
function myFunction5() {
  let checkBox5 = document.getElementById("myCheck5");
  let text = document.getElementById("text5");
  if (checkBox5.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction6() {
  let checkBox6 = document.getElementById("myCheck6");
  let text = document.getElementById("text6");
  if (checkBox6.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction7() {
  let checkBox7 = document.getElementById("myCheck7");
  let text = document.getElementById("text7");
  if (checkBox7.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer1(){
	let checkboxValue5=document.getElementById("myCheck5");
	if(checkboxValue5.checked==true)
	{
		
		if(checkboxValue5.value=="ol")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction8() {
  let checkBox8 = document.getElementById("myCheck8");
  let text = document.getElementById("text8");
  if (checkBox8.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction9() {
  let checkBox9 = document.getElementById("myCheck9");
  let text = document.getElementById("text9");
  if (checkBox9.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction10() {
  let checkBox10 = document.getElementById("myCheck10");
  let text = document.getElementById("text10");
  if (checkBox10.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction11() {
  let checkBox11= document.getElementById("myCheck11");
  let text = document.getElementById("text11");
  if (checkBox11.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer2(){
	let checkboxValue9=document.getElementById("myCheck9");
	if(checkboxValue9.checked==true)
	{
		
		if(checkboxValue9.value=="img")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction12() {
  let checkBox12= document.getElementById("myCheck12");
  let text = document.getElementById("text12");
  if (checkBox12.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction13() {
  let checkBox13= document.getElementById("myCheck13");
  let text = document.getElementById("text13");
  if (checkBox13.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction14() {
  let checkBox14= document.getElementById("myCheck14");
  let text = document.getElementById("text14");
  if (checkBox14.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction14() {
  let checkBox14= document.getElementById("myCheck14");
  let text = document.getElementById("text14");
  if (checkBox14.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction15() {
  let checkBox15= document.getElementById("myCheck15");
  let text = document.getElementById("text15");
  if (checkBox15.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer3(){
	let checkboxValue13=document.getElementById("myCheck13");
	if(checkboxValue13.checked==true)
	{
		
		if(checkboxValue13.value=="backgroundcolor")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction16() {
  let checkBox16= document.getElementById("myCheck16");
  let text = document.getElementById("text16");
  if (checkBox16.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction17() {
  let checkBox17= document.getElementById("myCheck17");
  let text = document.getElementById("text17");
  if (checkBox17.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction18() {
  let checkBox18= document.getElementById("myCheck18");
  let text = document.getElementById("text18");
  if (checkBox18.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction19() {
  let checkBox19= document.getElementById("myCheck19");
  let text = document.getElementById("text19");
  if (checkBox19.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer4(){
	let checkboxValue17=document.getElementById("myCheck17");
	if(checkboxValue17.checked==true)
	{
		
		if(checkboxValue17.value=="h6")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction20() {
  let checkBox20= document.getElementById("myCheck20");
  let text = document.getElementById("text20");
  if (checkBox20.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction21() {
  let checkBox21= document.getElementById("myCheck21");
  let text = document.getElementById("text21");
  if (checkBox21.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction22() {
  let checkBox22= document.getElementById("myCheck22");
  let text = document.getElementById("text22");
  if (checkBox22.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction23() {
  let checkBox23= document.getElementById("myCheck23");
  let text = document.getElementById("text23");
  if (checkBox23.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer5(){
	let checkboxValue23=document.getElementById("myCheck23");
	if(checkboxValue23.checked==true)
	{
		
		if(checkboxValue23.value=="fontsize")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction24() {
  let checkBox24= document.getElementById("myCheck24");
  let text = document.getElementById("text24");
  if (checkBox24.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction25() {
  let checkBox25= document.getElementById("myCheck25");
  let text = document.getElementById("text25");
  if (checkBox25.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction26() {
  let checkBox26= document.getElementById("myCheck26");
  let text = document.getElementById("text26");
  if (checkBox26.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction27() {
  let checkBox27= document.getElementById("myCheck27");
  let text = document.getElementById("text27");
  if (checkBox27.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer6(){
	let checkboxValue25=document.getElementById("myCheck25");
	if(checkboxValue25.checked==true)
	{
		
		if(checkboxValue25.value=="fontweight")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction28() {
  let checkBox28= document.getElementById("myCheck28");
  let text = document.getElementById("text28");
  if (checkBox28.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction29() {
  let checkBox29= document.getElementById("myCheck29");
  let text = document.getElementById("text29");
  if (checkBox29.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction30() {
  let checkBox30= document.getElementById("myCheck30");
  let text = document.getElementById("text30");
  if (checkBox30.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction31() {
  let checkBox31= document.getElementById("myCheck31");
  let text = document.getElementById("text31");
  if (checkBox31.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer7(){
	let checkboxValue29=document.getElementById("myCheck29");
	if(checkboxValue29.checked==true)
	{
		
		if(checkboxValue29.value=="hyper")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction32() {
  let checkBox32= document.getElementById("myCheck32");
  let text = document.getElementById("text32");
  if (checkBox32.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction33() {
  let checkBox33= document.getElementById("myCheck33");
  let text = document.getElementById("text33");
  if (checkBox33.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction34() {
  let checkBox34= document.getElementById("myCheck34");
  let text = document.getElementById("text34");
  if (checkBox34.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction35() {
  let checkBox35= document.getElementById("myCheck35");
  let text = document.getElementById("text35");
  if (checkBox35.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer8(){
	let checkboxValue34=document.getElementById("myCheck34");
	if(checkboxValue34.checked==true)
	{
		
		if(checkboxValue34.value=="rules")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function myFunction36() {
  let checkBox36= document.getElementById("myCheck36");
  let text = document.getElementById("text36");
  if (checkBox36.checked == true){
    text.style.display = "block";
    text.style.color="green";
  } else {
     text.style.display = "none";
  }
}
function myFunction37() {
  let checkBox37= document.getElementById("myCheck37");
  let text = document.getElementById("text37");
  if (checkBox37.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction38() {
  let checkBox38= document.getElementById("myCheck38");
  let text = document.getElementById("text38");
  if (checkBox38.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function myFunction39() {
  let checkBox39= document.getElementById("myCheck39");
  let text = document.getElementById("text39");
  if (checkBox39.checked == true){
    text.style.display = "block";
    text.style.color="red";
  } else {
     text.style.display = "none";
  }
}
function yourAnswer9(){
	let checkboxValue36=document.getElementById("myCheck36");
	if(checkboxValue36.checked==true)
	{
		
		if(checkboxValue36.value=="process")
		{
			
			c=c+1;
			localStorage.setItem("total_score",c)
		}
	}
}
function displayScore()
{
	location.replace("Testpress.html");
	
}
