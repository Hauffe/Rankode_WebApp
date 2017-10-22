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
               type: 'POST',
               crossDomain: true,
               data: JSON.stringify(obj),
               dataType: "application/json",
               xhrFields: {
                    withCredentials: false
               }
            })
            .done(function( data ) {
                console.log("done");
            })
            .fail( function(xhr, textStatus, errorThrown) {
                alert(textStatus);
            });
    }
    
    var obj = {
                projectsAsOwner:[],
                projectsAsCollaborator:[],
                accounts:[],
                notifications:[],
                login:"Johndoe",
                email:"Johndoe@doe.com",
                password:"Johndoe123",
                firstName:"John",
                lastName:"Doe"
                //name: $("#id-name").val(),
            };
    console.log(JSON.stringify(obj)+"\n"+RANKODE_URL+"developer/insert");
    insert(obj);
});