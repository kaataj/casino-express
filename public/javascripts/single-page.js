const { get } = require("../../routes");

const app = document.getElementById("app");

function loadData(url){
    
    fetch('http://localhost:3000/users', {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    }).then(function(data) {
        return data.json();
    })
    .then(function(users) {

        // users.forEach(user => {
        //     var LI = document.createElement("LI");                
        //     var innerText = document.createTextNode(user.email);       
        //     LI.appendChild(innerText);  
        //     ///<li>text</li>                           
        //     app.appendChild(LI); 
        //    // console.log(user.email);
        // });

    }).catch(function(error) {
        console.log("error",error)
    });
}; 


loadData();



localStorage.setItem('myCat', ['jo','Tom']);



async function Request(){

    try { 
   const user  = await fetch('http://casino/api');
   const userPhotos  = await fetch(`http://casino/api/photod/${user._id}`);
    }
    catch
   



}


        