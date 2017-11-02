/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {


var RANKODE_URL = "http://localhost:8080/service/api/";
var GIT_URL = "";
var url = window.location.href;

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
                    $("#serviceResponse").append(
                    "<div class='alert alert-success alert-dismissible fade in' role='alert'>" +
                        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                        "</button>" + data +
                    "</div>");
                },
                error: function(jqXHR) {
                  $("#serviceResponse").append(
                    "<div class='alert alert-danger alert-dismissible fade in' role='alert'>" +
                        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                        "</button>" + jqXHR.responseJSON  +
                    "</div>");
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
        insert(obj);
    });
});