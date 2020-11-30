 function my(id){
 	  return document.getElementById(id);
   }
  function My(value){
	  return document.querySelector(value)
  }
  var item ;
  jQuery(document).ready(function($){
  $('#btn').on('click',function(){
  	 console.log("1")
  	$.ajax({
  	type:'get',
  	url:'/login/',
  	success:function(reponse){
  		console.log(reponse)
		item = reponse;
  	},
  	error:function(xhr){
  	console.log(xhr)
  }
  });
  });
  });
  
  

 // for(var j = 0;j < 64;j++){
 // 	if(j%2==0)
 // 	{
 // 		item[j] = 1;
 // 	}
 // 	else
 // 	{
 // 		item[j] = 0;
 // 	}
 // }
 function getElementsByName(tag,eltname)
 {
  var elts=document.getElementsByTagName(tag);
  var count=0;
  var elements=[];
  for(var i=0;i<elts.length;i++)
  {
   if(elts[i].getAttribute("name")==eltname)
   {
    elements[count++]=elts[i];
   }
  }
  return elements;
 }
 
 var time = 0;
  var divs = document.getElementsByClassName("people");
  var backgrds = document.getElementsByClassName("backgrd")
  
  Target = My('input[value="隐藏"]')
  Target.onclick = function(){

 	 if(Target.id == "hide"){
 	  for(var i = 0; i<divs.length;i++)
 	  {
 	  			divs[i].name = item[i];
 	  }
 	  for(i = 0; i<backgrds.length;i++){
		  if(backgrds[i].id == "1"){
			  console.log("222")
			  backgrds[i].style.backgroundColor = "#ffffff";
		  }
	  }
 	  for(var j = 0; j<divs.length; j++){
 		  if(divs[j].name == 1){
 			  time++;
 			  divs[j].style.visibility = "hidden";
 		  }
 		  else{
 			  divs[j].style.visibility = "none";
 		  }
 	  }
 	 time = 0 	
	 Target.id = "show"
	 return 1
	 }
	 if(Target.id == "show"){
	  for(var j = 0; j<divs.length; j++){
	   	time++
		divs[j].style.visibility = "visible";
	  }
	  for(i = 0; i<backgrds.length;i++){
	  		  if(backgrds[i].id == "1"){
	  			  console.log("222")
	  			  backgrds[i].style.backgroundColor = "#e5e5e5";
	  		  }
	  }
	 time = 0 
	 Target.id = "hide"
	 return 1
	 }   

   }

   

 