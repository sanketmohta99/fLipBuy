function loc1()
{
	location.href= "https://www.w3schools.com";

}
function loc2()
{
	location.href= "https://www.oneplus.in/oneplus-nord";
}






function dat()
{
	var d=new Date();
var x=d.getDate()+5;

var k=d.getMonth()+1;
if(k==1 || k==3 || k==5 || k==7 ||k==8 ||k==10 ||k==12)
	{ 	if(x>31)
		{x=x-31;k++;}
		document.getElementById("DeliD").innerHTML=x;
	}
else if(k==2)
	{ if(x>28)
		{x=x-28;k++;}
		document.getElementById("DeliD").innerHTML=x;
	}

else if(k==4 || k==6 ||k==9 ||k==11)
	{ if(x>30)
		{x=x-30;k++;}
		document.getElementById("DeliD").innerHTML=x;
	}

if(k>12)
{k=k-1;}

//var mno=[1,2,3,4,5,6,7,8,9,10,11,12];
var mnm=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
//for(var i=0;i<12;i++)
//{	if(mno[i]==k)
		 	document.getElementById("DeliM").innerHTML=mnm[k-1];
//}


}



function namecheck()
{
	var x= document.getElementById("Name").value;
	if(x.length==0)
		{	document.getElementById("Nameprint").style.color=rgb(178,34,34);
			document.getElementById("Nameprint").innerHTML="Mandatory Field";
		}
	else
		{		document.getElementById("Nameprint").style.color=green;
			document.getElementById("Nameprint").innerHTML="Accepted";
		}
}
function phcheck()
{
	var x= document.getElementById("Ph").value;
	if(x.length!=10)
		{	document.getElementById("PhPrint").style.color=rgb(178,34,34);
			document.getElementById("PhPrint").innerHTML="Enter valid Phone No";
		}
	else
		{		document.getElementById("PhPrint").style.color=green;
			document.getElementById("PhPrint").innerHTML="Accepted";
		}
}
function myf()
    {

  var x =navigator.onLine;
  if(x!=true)
  	{	document.getElementById("l").style.display="inline-block";
  document.getElementById("l").innerHTML = "On";
	}

	}
