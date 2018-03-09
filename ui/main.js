var button=document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            if(request.status===200){
                
                var name=request.responseText;
                names=JSON.parse(names);
                var list ='';
                for(var i=0;i<names.length;i++){
        list+='<li>'+name[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
            }
        }
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value; 
    request.open('GET','http://sdbctanonymous.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    
    
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+name[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};