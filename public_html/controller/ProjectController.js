/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var RANKODE_URL = "http://localhost:41115/service/api/";
    var GITHUB_URL = "https://api.github.com/";
    
    var login = sessionStorage.getItem('login');
    var firstName = sessionStorage.getItem('firstName');
    var lastName = sessionStorage.getItem('lastName');
    
    function insert(obj){
        $.ajax({
            url: RANKODE_URL+"project/insert",
            dataType: "json",
            type: 'POST',
            data: JSON.stringify(obj),
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) { 
                $("#popup").remove();
                $("#serviceResponse").append(
                "<div class='alert alert-success alert-dismissible fade in' role='alert' id='popup'>" +
                    "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                    "</button>" + data +
                "</div>");
            },
            error: function(jqXHR) {
              $("#popup").remove();
              $("#serviceResponse").append(
                "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup'>" +
                    "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                    "</button>" + jqXHR.responseJSON  +
                "</div>");
            } 
        });
    }
    
    function requestGIT(uri) {
        var parts = uri.split("/");
        $.ajax({
            url: GITHUB_URL+"repos/"+parts[3]+"/"+parts[4],
            success: function(data) {
                var obj = {
                    owner: {login: login},
                    name:data.name
                };
                insert(obj);
            },
            error: function () {
                $("#popup2").remove();
                $("#serviceResponse").append(
                "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup2'>" +
                    "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                    "</button>Projeto não encontrado</div>");
            }
        });
    }
    
    $("#btnSubmit").click(function(event) {
        event.preventDefault();
        requestGIT($("#linkProject").val());
   
    });

});
