var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200)
    {
   
    var response=JSON.parse(this.responseText);
    
    var output='';
    for(var i=0;i<response.length;i++)
    {
        if((response[i].completed)==true)
        {
            output+=`<input id="check1" type="checkbox" checked=" checked" disabled style="" >
            <label style="margin-left:5px;">${response[i].title}</label><br><br> `
        }
        else{
            output+=`<input type="checkbox" onclick="checked_counter(this)">
            <label style="margin-left:5px">${response[i].title}</label><br><br>`
        }
    }
    document.getElementById("main").innerHTML=`${output}`;
}
}
xhttp.open("GET","http://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
var counter=0;

function checked_counter(value)
{
    var promise=new Promise(function(resolve,reject){
        if(value.checked==true)
        {
            counter++;
            if(counter>=5)
            {
                resolve("5 tasks completed")
            }
        }
        else{
            counter--;
        }

       
    })
    promise.then(function(s){
        alert(s)
    })
}