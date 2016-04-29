var app_div;

var header_contact;
var group;
var title;
var add_contact;

var inputContainer;
var searchContact;

var contactSection;

var blueAlpha;

//app container 
app_div=document.createElement("div");
app_div.setAttribute("id", "app_div");



header_contact=document.createElement("div");
header_contact.setAttribute("id", "header_contact");

group=document.createElement("div");
group.setAttribute("id", "group");
group.textContent="Group";

title=document.createElement("div");
title.setAttribute("id", "title");
title.textContent="all contacts";

add_contact=document.createElement("div");
add_contact.setAttribute("id", "add_contact");
add_contact.textContent="+";

inputContainer=document.createElement("div");
inputContainer.setAttribute("id", "inputContainer");
searchContact=document.createElement("input");
searchContact.setAttribute("id", "searchContact");
searchContact.placeholder="Search";

contactSection=document.createElement("section");
contactSection.setAttribute("id", "contactSection");

document.addEventListener("DOMContentLoaded", function(event){
    
    document.body.appendChild(app_div);
        app_div.appendChild(header_contact);
            header_contact.appendChild(group);
            header_contact.appendChild(title);
            header_contact.appendChild(add_contact);
        app_div.appendChild(inputContainer);
            inputContainer.appendChild(searchContact);
        app_div.appendChild(contactSection);
  
  //the alphabet      
   
    blueAlpha=document.createElement("div");
    blueAlpha.setAttribute("id", "blueAlpha");
    contactSection.appendChild(blueAlpha);
 
  blueAlpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    for(var i=0; i< blueAlpha.length; i++){  
        // console.log(blueAlpha[i]);
      var abcRight=blueAlpha[i];
         blueAlpha.textContent=abcRight;
    };
    
    //create an event so when on click it goes to that letter here
    var nameOrder=function(abc){
        
    }
    
});