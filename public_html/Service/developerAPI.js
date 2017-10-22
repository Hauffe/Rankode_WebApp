/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function insert(obj){

        $.ajax({
           url: RANKODE_URL+"developer/insert",
           type: 'POST',
           dataType: "json",
           data: obj,
           success: function (data){
               console.log(data);
           }
        });
}

function findById(str){

        $.ajax({
           url: RANKODE_URL+"developer/findById/"+str,
           type: 'GET',
           dataType: "json",
           success: function (data){
               console.log(data);
           }
        });
}