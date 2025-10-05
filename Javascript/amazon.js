function bright(){
    document.getElementById("searchbar").style.border="3px solid orange";
}
function normal(){
    document.getElementById("searchbar").style.border="none";
}

var position=1;
function rightbutton(){
    position++;
    if(position<=8)
    {
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }           
    else
    {
        position=1;
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }
}  
function leftbutton(){
    position--;
    if(position>0){
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }
    else{
        position=8;
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }
} 
function autochange(){
    position++;
    if(position<=8)
    {
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }           
    else
    {
        position=1;
        document.getElementById("slider").style.backgroundImage=`url(../Images/w${position}.jpg)`
    }
}
setInterval(autochange,5000);

var allimages=document.images;
for(i=0;i<allimages.length;i++){
    allimages[i].src=`../Images/p${i+1}.jpg`
}

for(i=1;i<=20;i++){
    document.getElementById(`i${i}`).style.backgroundImage=`url(../Images/i${i}.jpg)`
}

for(i=1;i<=22;i++){
    document.getElementById(`good${i}`).style.backgroundImage=`url(../Images/g${i}.jpg)`
}

for(i=1;i<=23;i++){
    document.getElementById(`igood${i}`).style.backgroundImage=`url(../Images/ig${i}.jpg)`
}

for(i=1;i<=18;i++){
    document.getElementById(`goods${i}`).style.backgroundImage=`url(../Images/gs${i}.jpg)`
}
for(i=1;i<=22;i++){
    document.getElementById(`wgood${i}`).style.backgroundImage=`url(../Images/good${i}.jpg)`
}