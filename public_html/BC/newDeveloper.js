/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {


var RANKODE_URL = "http://localhost:41115/service/api/";
var GIT_URL = "";

    function insert(obj){
        var invocation = new XMLHttpRequest();

            $.ajax({
               url: RANKODE_URL+"developer/insert",
                dataType: "json",
                type: 'POST',
                data: JSON.stringify(obj),
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                success: function(data) { 
                    alert('ok');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("error occurred");
                } 
            });
    }
    
    var obj = {
                accounts:[],
                login:"Johndoe2",
                email:"Johndoe@doe.com",
                password:"Johndoe123",
                firstName:"John",
                lastName:"Doe"
            };
    console.log(JSON.stringify(obj)+"\n"+RANKODE_URL+"developer/insert");
    insert(obj);
});