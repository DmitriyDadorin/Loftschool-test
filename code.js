   document.querySelectorAll(".block").forEach(function(block, index, arr){ 
    block.querySelector(".checkbox").addEventListener("change", function(){ 
    block.classList.add("color_flood");
     function func(){
      block.classList.add("block_none");
    }
    setTimeout(func, 3000);    
  
  })
  })

  document.querySelectorAll(".checkbox").forEach(function(chekBox){
    addEventListener("change", function(){
      var v1 = document.querySelector("#checkbox1");
      var v2 = document.querySelector("#checkbox2");
      var v3 = document.querySelector("#checkbox3");
      var v4 = document.querySelector("#checkbox4");
      var v5 = document.querySelector("#checkbox5");
      var v6 = document.querySelector("#checkbox6");
    if(v1.checked&&v2.checked&&v3.checked&&v4.checked&&v5.checked&&v6.checked == true){
      document.querySelector(".courses_caption").classList.add("block_none");          
      document.querySelector(".courses_end").classList.remove("block_none_courses");

function slow(){
      document.querySelector(".block_container_down").classList.add("block_none");
      document.querySelector(".block_container_up").classList.add("block_none");
      document.querySelector(".courses").classList.add("block_none"); 
}
      setTimeout(slow, 3000); 

      
    }
    
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


