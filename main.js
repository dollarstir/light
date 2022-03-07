
    
    
//     (function () {

//     alert('hello'); 

//     $("#off").click(function () {

//         alert("hell");


//         $("#im").attr("src","off.jpg");

//         if ($("#im").attr("src","on.png")) {

//             $("#im").attr("src","off.jpg");


            
//         }
//         else {

//             $("#im").attr("src","on.png");
//         }

        
//     });
    
// })



$(function () {

      $("#off").mouseleave(function () {

         $("#off").html('ON');
         
      })

      $("#off").hover(function () {
            setTimeout(function () {

               $("#off").html("Put on the light");
               
            },1000);

      })

    $("#off").html('ON');
    $("#on").html('OFF');

    $("#off").click(function () {
      $(".sw").css("transform","rotateZ(0deg)");

        

        $("#im").attr("src","img/bulb2.png");  
       
          
 
       

        
        
               
        
               
        
                
     });

     $("#on").click(function () {
      $(".sw").css("transform","rotateZ(45deg)");
       
        $("#im").attr("src","img/bulb.png");  
        

         
     })
    
})
