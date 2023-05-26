const day=document.getElementById("b1");
const Hour=document.getElementById("b2");
const Min=document.getElementById("b3");
const Second=document.getElementById("b4");



function CountDown()
{
    const eventTime=new Date("24 september 2023 23:59:00");

    const currenttime=new Date();

    const totalTime=eventTime-currenttime;

    


    let totalSecond=Math.floor(totalTime/1000);
    let totalMin=Math.floor(totalSecond/60);
    let totalHour=Math.floor(totalMin/60);


    // console.log("total ::"+totalHour+" "+totalMin+" "+totalSecond);

    let days=Math.floor(totalHour/24);
    let hours=totalHour%24;
    let minyues=totalMin%60;
    let seconds=totalSecond%60;

    // console.log("pppppp ::"+totalHour+" "+totalMin+" "+totalSecond)


    day.innerHTML=days;
    Hour.innerHTML=hours;
    Min.innerHTML=minyues;
    Second.innerHTML=seconds;

}


CountDown();

setInterval(CountDown,1000);



// background color Change


//color change js strt



const getcolor=()=>{

    const randomnm=Math.floor(Math.random()*16777215);

    const data="#"+randomnm.toString(16);
    document.getElementById("ppx").style.backgroundColor=data;
   
    console.log(randomnm,data);


}


document.getElementById("randomButton").addEventListener(
    "click",getcolor
)

// setInterval(getcolor,1000);

//color change js end



// password change start

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercast="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="`~!@#$%^&*()_+={}[]";


const passbox=document.getElementById("textname");
const totalchar=document.getElementById("inputcase");
const upperinput=document.getElementById("uppercase");
const lowerinput=document.getElementById("lowercase");
const numberinput=document.getElementById("numbercase");
const symbolinput=document.getElementById("symbolcase");




const getRenderData=(dataset)=>{
        return dataset[Math.floor(Math.random()*dataset.length)];
}

const generatePassword=(pass="")=>{

    if(upperinput.checked)
    {
        pass+=getRenderData(uppercase);
      
    }
    if(lowerinput.checked)
    {
        pass+=getRenderData(lowercast);
      
    }
    if(numberinput.checked)
    {
        pass+=getRenderData(number);
      
    }
    if(symbolinput.checked)
    {
        pass+=getRenderData(symbol);
      
    }

    if(pass.length<totalchar.value)
    {
       return generatePassword(pass);
    }


    passbox.value=pass;
    console.log("okkk",pass.length,"   ",totalchar.value);

}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)


// generatePassword(); 