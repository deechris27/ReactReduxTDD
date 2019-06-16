//window.addEventListener('load', loaditplease);

function loaditplease(){
    const start = new Date().getMilliseconds();
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res=> res.json())
     .then(json=> {
         console.log(json)
    const end = new Date().getMilliseconds();
       console.log(end-start);
        });
    
}

setInterval(t=>{
    loaditplease();
}, 2000);