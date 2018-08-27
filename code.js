   document.querySelectorAll(".block").forEach(function(block){ 
    block.querySelector(".checkbox").addEventListener("change", function(){ 
    block.classList.add("color_flood");
    function func(){
      block.classList.add("block_none");
    }
    setTimeout(func, 3000);

  
  })
  })

    document.querySelectorAll(".label_flood").forEach(function(flood){ 
    flood.querySelector(".checkbox").addEventListener("change", function(){ 
    flood.classList.add("color_flood");  
 
  })  
  })

document.querySelectorAll(".block").forEach(function(imgflood){ 
  imgflood.querySelector(".checkbox").addEventListener("change", function(){ 
  imgflood.querySelectorAll(".img_flood").forEach(function(imgFlood){
    imgFlood.classList.add("img_flood_add");
    
  })
})  
})


