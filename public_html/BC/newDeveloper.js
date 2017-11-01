/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {


var RANKODE_URL = "http://localhost:8080/service/api/";
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
                    $("#resultCad").addClass("resultCad alert alert-success alert-dismissable fade in");
                    $("#resultCad").append("<a href='' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                        "<strong>Success!</strong> Indicates a successful or positive action.");
                },
                error: function(jqXHR) {
                    $("#resultCad").addClass("resultCad alert alert-danger alert-dismissable fade in");
                    alert(jqXHR.responseJSON);
                } 
            });
    }
    
    $("#newUser").click(function(){
        var obj = {
                accounts:[],
                login:$("#Login").val(),
                email:$("#Email").val(),
                password:$("#Password").val(),
                firstName:$("#Nome").val(),
                lastName:$("#Sobrenome").val()
            };
        console.log(JSON.stringify(obj));
        insert(obj);
    });
});