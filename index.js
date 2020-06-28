window.onscroll=function(e){
    var elmnt=document.getElementById("id01");
    var logo=document.getElementById("id02");
    if(window.pageYOffset>=10){
        elmnt.classList.add("sticky");
        elmnt.style.fontSize=12+"px";
    }else{
        elmnt.classList.remove("sticky");
         elmnt.style.fontSize=17+"px";
    }
}

filterFunction("all");

function filterFunction(c){
    if(c=="all"){
      c="";
    }
    var x=document.getElementsByClassName("work-column");
    for(var i=0;i<x.length;i++){
        removeClass(x[i],"show");
        if(x[i].className.indexOf(c)>-1){
            addClass(x[i],"show");
        }
    }
}
 

function addClass(element,name){
    var arr1,arr2,i;
    arr1=element.className.split(" ");
    arr2=name.split(" ");
    for(i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className+=" "+arr2[i];
        }
    }
}

function removeClass(element,name){
    var arr1,arr2,i;
    arr1=element.className.split(" ");
    arr2=name.split(" ");
    for(i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])>-1){
            arr1.splice(arr1.indexOf(arr2[i],1));
        }
    }
    element.className=arr1.join(" ");
}
var id=document.getElementById("id05");
function openLogin(){
    id.style.display="block";
}
function closeLogin(){
    id.style.display="none";
}

window.onclick=function(event){
    if(event.target==id){
       id.style.display="none"; 
    }
}