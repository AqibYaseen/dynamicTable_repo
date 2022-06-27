// const tableBody = document.getElementsByTagName('tbody');
// const buttonContainer = document.getElementById('button-container');
// console.log(tableBody);
// 
let val1,val2,val3;
let counter = 0;
let table = document.querySelector("tbody");
let buttonContainer=  document.getElementById("button-container");


table.addEventListener('click',function(e){
    // console.log(e.target.parentElement.previousElementSibling.children[0].value);
    // console.log(e.target.tagName);
    if(e.target.tagName=="BUTTON"){
        // console.log(e.target.parentElement.previousElementSibling.children[0].value);
            if (e.target.parentElement.previousElementSibling.children[0].value == "delete"){
                console.log("Inside delete");

                // table.removeChild(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.remove();
        
            }else if(e.target.parentElement.previousElementSibling.children[0].value == "edit"){
                
                console.log("Inside edit");
                    val1 = e.target.parentElement.parentElement.children[0].innerText;
                    val2 = e.target.parentElement.parentElement.children[1].innerText;
                    val3 = e.target.parentElement.parentElement.children[2].innerText;
                if(counter==0){
                    for(let i=0;i<e.target.parentElement.parentElement.children.length-2;i++){
                        e.target.parentElement.parentElement.children[i].innerHTML=`<input style="width:3rem; margin:0;" type="text">`;
                }
                // e.target.parentElement.parentElement.children[1].innerHTML=`<input style="width:3rem; margin:0;" type="text">`;
                // e.target.parentElement.parentElement.children[2].innerHTML=`<input style="width:3rem; margin:0;" type="text">`;
                    counter = 1;
                }else if(counter==1){
        
                    for(let i=0;i<e.target.parentElement.parentElement.children.length-2;i++){
                        e.target.parentElement.parentElement.children[i].innerHTML=`<td>Name:</td>`;
                }
                    console.log(val1);
                    e.target.parentElement.parentElement.children[0].innerText = val1;
                    e.target.parentElement.parentElement.children[1].innerText = val2;
                    e.target.parentElement.parentElement.children[2].innerText = val3;
                    counter=0;

                }

            }else if(e.target.parentElement.previousElementSibling.children[0].value == "replace"){
                console.log("Inside replace");

           
                // console.log("inside replace");
                // alert('inside replace');

                // table.removeChild(e.target.parentElement.parentElement);
                // e.target.parentElement.parentElement.remove();

            }else if(e.target.parentElement.previousElementSibling.children[0].value == "change bg"){
                // alert("inside bg");
                console.log("Inside Change Bg");
                for(let i = 0 ; i< e.target.parentElement.parentElement.children.length-1;i++){
                e.target.parentElement.parentElement.children[i].style.backgroundColor= "green";
        }
            // e.target.parentElement.parentElement.children.style.backgroundColor="green";
            // console.log("inside change-bg");
            // alert('inside change-bg');
            // table.removeChild(e.target.parentElement.parentElement);
            // e.target.parentElement.parentElement.remove();
        }else{alert();}

     } else{}  // alert("alertButton");   
});
buttonContainer.addEventListener('click',function(e){
    // console.log(buttonContainer.children);
    
    counter++;
        if(e.target.tagName=="BUTTON"){
        if(buttonContainer.children[1].value != "" && buttonContainer.children[3].value != "" && buttonContainer.children[5].value != ""){
    switch(true){
        case  e.target.innerText == "append()":{
           
            table.innerHTML+= `<tr>
            <td>${buttonContainer.children[1].value}</td>
            <td>${buttonContainer.children[3].value}</td>
            <td>${buttonContainer.children[5].value}</td>
            <td><select name="drop" id="drop">
            <option value="delete">delete</option>
            <option value="edit">Edit</option>
            <option value="replace">replace</option>
            <option value="change bg">change bg</option>    
            </select></td>
            <td><button>Ok!</button></td>
        </tr>`;
        buttonContainer.children[1].value = "";
        buttonContainer.children[3].value = "";
        buttonContainer.children[5].value = "";
   
        }
        case  e.target.innerText == "insertBefore()":{
            // table.insertBefore()
        }
        case  e.target.innerText == "inserAdjacentElement()":{
            
        }
        case  e.target.innerText == "replaceChild()":{
            
        }
        case  e.target.innerText == "removeChild()":{
            
        }
        case  e.target.innerText == "remove()":{
            
        }
        
    }
        }else{
            alert('Input Fields are Empty!!!');
        }
    }
});
