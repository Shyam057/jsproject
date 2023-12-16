let stat= document.querySelector("h5");
let btn=document.querySelector("#add");
var flag=0;
btn.addEventListener("click", function(){
    if(flag==0){
    stat.innerText="Friend";
    stat.style.color="green";
    btn.innerText="Remove Friend";
    flag=1;
    }
    else{
        stat.innerText="Stranger";
        stat.style.color="red";
        btn.innerText="Add Friend";
        flag=0;
    }
});
