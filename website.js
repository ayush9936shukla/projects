let span = document.getElementById('span');
span.style.color = 'white';

setInterval(()=>{
        setTimeout(()=>{
            span.innerHTML = 'HTML5';
        },1000);
    
        setTimeout(()=>{
            span.innerHTML = 'CSS3'; 
        },2000);
    
        setTimeout(()=>{
            span.innerHTML = 'JavaScript';
        },3000);
    },3000)
    
   
    
    
