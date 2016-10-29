
$(document).ready(function (){
        //console.log("hi");
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li class="testing">' + toAdd + '</li>');
            });
      
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
		$( "#button2" ).click(function() {
  		$( ".testing" ).remove();
	});
      

      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);
