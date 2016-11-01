"use strict";
var FbAPI = (function(oldFirebase){

oldFirebase.getTodos = function (apiKeys) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method:'GET',
        url:`${apiKeys.databaseURL}/items.json`
      }).then((response)=>{
        let items = [];
         Object.keys(response).map(key => {
           response[key].id = key;
           items.push(response[key]);
         });
        resolve(items);
      }, (error) => {
        console.log(error);
      });
    });
  };

oldFirebase.addTodo = function(apiKeys, newItem){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'POST',
      url:`${apiKeys.databaseURL}/items.json`,
      data:JSON.stringify(newItem),
      dataType:"json",
    }).then((response)=>{
      console.log(response);
      resolve();
    },(error) =>{
      //console.log(error);
      reject(error);
    });
  });
};

oldFirebase.deleteTodo = function(apiKeys, itemId){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'DELETE',
      url:`${apiKeys.databaseURL}/items/${itemId}.json`
    }).then((response)=>{
      console.log(response);
      resolve();
    },(error) =>{
      //console.log(error);
      reject(error);
    });
  });
};
return oldFirebase;
})(FbAPI || {});