"use strict";
//gets credentionals from augmentor
  let apiKeys = {};

function putTodoInDOM (){
  FbAPI.getTodos(apiKeys).then(function(items){
      console.log("items from FB", items);
      $('#completed-tasks').html("");
      $('#incomplete-tasks').html("");
      items.forEach(function(item){
        if(item.isCompleted === true){
        	console.log("complete item", item)
          let newListItem = '<li>';
          newListItem+='<div class="col-xs-8">';
          newListItem+='<input class="checkboxStyle" type="checkbox" checked>';
          newListItem+=`<label class="inputLabel">${item.task}</label>`;
          newListItem+='<input type="text" class="inputTask">';
          newListItem+='</div>';
          newListItem+='</li>';
          //apend to list
          $('#completed-tasks').append(newListItem);
        } else {
        	console.log("incomplete item", item)
          let newListItem = '<li>';
          newListItem+='<div class="col-xs-8">';
          newListItem+='<input class="checkboxStyle" type="checkbox">';
          newListItem+=`<label class="inputLabel">${item.task}</label>`;
          newListItem+='<input type="text" class="inputTask">';
          newListItem+='</div>';
          newListItem+='<div class="col-xs-4">';
          newListItem+='<button class="btn btn-default col-xs-6 edit">Edit</button>';
          newListItem+=`<button class="btn btn-danger col-xs-6 delete"  data-fbid="${item.id}">Delete</button>`;
          newListItem+='</div>';
          newListItem+='</li>';
          //apend to list
          $('#incomplete-tasks').append(newListItem);
        }

      })
    });
}
//allows app to talk to firebase
$(document).ready(function(){
  FbAPI.firebaseCredentials().then(function(keys){
    console.log("keys", keys);
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    putTodoInDOM();
  });
  $("#button").on('click', function(){
  	console.log("add button");
	let newItem = {
		"task":$("#todo-input").val(),
		"isCompleted" :false
	};

  FbAPI.addTodo(apiKeys, newItem).then(function(){
  	putTodoInDOM();
 		
  	});
  });
$('ul').on("click", ".delete", function(){
	let itemId= $(this).data("fbid");
	FbAPI.deleteTodo(apiKeys, itemId).then(function(){
		putTodoInDOM();
	});
});
// });
 });
// $(document).ready(function (){
//         //console.log("hi");
//         $('#button').click(
//             function(){
//                 var toAdd = $('input[name=ListItem]').val();
//                  $('ol').append('<li class="testing">' + toAdd + '</li>');
//             });
      
//        $("input[name=ListItem]").keyup(function(event){
//           if(event.keyCode == 13){
//             $("#button").click();
//           }         
//       });
      
// 		$( "#button2" ).click(function() {
// 			console.log("this", $(this));
//   		// $( ".testing" ).remove();
// 	});
      

//       $('input').focus(function() {
//         $(this).val('');
//       });
      
//       $('ol').sortable();  
      
//     }
// );
