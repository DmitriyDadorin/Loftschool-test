/* document.querySelectorAll(".block").forEach(function(block){    
    block.addEventListener("change", function(){        
        document.querySelectorAll(".checkbox").forEach(function(checkbox){
            addEventListener("change", function(){
                block.classList.add("color_flood");
            })
        })
    })
})
    */    
      
   document.querySelectorAll(".block").forEach(function(block){ 

    block.querySelector(".checkbox").addEventListener("change", function(){ 
    block.classList.add("color_flood");  
  
  })
  })

  document.querySelectorAll(".label_flood").forEach(function(flood){ 

    flood.querySelector(".checkbox").addEventListener("change", function(){ 
    flood.classList.add("color_flood");  
 
  })  
  })


            
                       
                  
          


    
          
     
   
      




