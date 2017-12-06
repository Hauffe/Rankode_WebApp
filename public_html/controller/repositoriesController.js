/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    var RANKODE_URL = "http://localhost:8080/service/api/";
    var GITHUB_URL = "https://api.github.com/";
    
    var login = sessionStorage.getItem('login');
    var firstName = sessionStorage.getItem('firstName');
    var lastName = sessionStorage.getItem('lastName');
    
    function listRepositories(filter) {

        $.ajax({
            url: RANKODE_URL+"repository/findByFilter",
            dataType: "json",
            type: 'POST',
            data: JSON.stringify(filter),
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) {
                $.each(data, function(index,result) {                   
                        $('#repositoriesList')
                        .append("<tr>"+
                                    "<td class='login'>"+result.loginRepository+"</td>"+
                                    "<td>"+result.repository+"</td>"+
                                    "<td><button type='button' class='btn btn-danger' onclick='remove(this)'>Excluir</button></td>"+
                                "<tr>");    
                });
            },
            error: function(jqXHR) {
                console.log(jqXHR.responseJSON );
            } 
        });
    };
    
    function insertRepository(obj){

        $.ajax({
            url: RANKODE_URL+"repository/insert",
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
            listRepositories(filter);
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
            url: GITHUB_URL+"users/"+parts[3],
            success: function(data) {
                var obj = {
                    developer: {login: login},
                    loginRepository:data.login,
                    repository:"GITHUB"
                };
                insertRepository(obj);               
            },
            error: function () {
                $("#popup").remove();
                $("#serviceResponse").append(
                "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup'>" +
                    "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                    "</button>Usuário Github não encontrado</div>");
            }
        });
    }
    
    function deleteRepository(obj){

        $.ajax({
            url: RANKODE_URL+"repository/delete",
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
    
    var filter = {
        developer: {login: login}
    };
    listRepositories(filter);
   
    $("#addRepo").click(function(e){
        requestGIT($("#urlRepo").val());
    });
    
    (function($) {
        remove = function(item) {
            var tr = $(item).closest('tr');
            var obj = {
                loginRepository: $(item).parent().parent().find('td.login').text()
            };
            deleteRepository(obj);
            tr.fadeOut(400, function() {
                tr.remove();
            });		
        return false;
        };
    })(jQuery);
});