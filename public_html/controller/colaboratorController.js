/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {


var RANKODE_URL = "http://localhost:8080/service/api/";

    function insert(obj){
        var invocation = new XMLHttpRequest();

            $.ajax({
               url: RANKODE_URL+"collaborator/insert",
                dataType: "json",
                type: 'POST',
                data: JSON.stringify(obj),
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                success: function(data) { 
                    console.log(JSON.stringify(data));
                },
                error: function(jqXHR) {
                    console.log(jqXHR.responseJSON);
                } 
            });
    }
    
    $("#addProject").click(function(){
        var obj = {
                    developer:{accounts:[], login: "NolaGutierrez"},
                    project:{collaborators:[],indicators:[],id:3},
                    commits:[],
                    xp:0,
                    admissionDate: '2017-11-08'
                };
        insert(obj);
    });
});