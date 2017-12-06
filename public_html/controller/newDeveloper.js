$( document ).ready(function() {


var RANKODE_URL = "http://localhost:8080/service/api/";
var GITHUB_URL = "https://api.github.com/";

    function insertUser(obj){

            $.ajax({
               url: RANKODE_URL+"developer/insert",
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
                    requestGIT($("#GitHub").val());
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
    
    function insertAccount(obj){

            $.ajax({
               url: RANKODE_URL+"repository/insert",
                dataType: "json",
                type: 'POST',
                data: JSON.stringify(obj),
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                error: function(jqXHR) {
                  $("#popup2").remove();
                  $("#serviceResponse").append(
                    "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup2'>" +
                        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                        "</button>" + jqXHR.responseJSON  +
                    "</div>");
                } 
            });
    }
    
    function requestGIT(uri) {
        console.log(uri);
        if(uri===""){
            $("#popup3").remove();
            $("#serviceResponse").append(
            "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup3'>" +
                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                "</button>Usuário Github não encontrado</div>");
        }else{
            var parts = uri.split("/");
            $.ajax({
                url: GITHUB_URL+"users/"+parts[3],
                success: function(data) {
                    var obj = {
                        developer: {login:$("#Login").val()},
                        loginRepository:data.login,
                        repository:"GITHUB"
                    };
                    insertAccount(obj);               
                },
                error: function () {
                    $("#popup3").remove();
                    $("#serviceResponse").append(
                    "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup3'>" +
                        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                        "</button>Usuário Github não encontrado</div>");
                }
            });
        }
    }
    
    $("#newUser").click(function(e){
        e.preventDefault();
        var obj = {
                accounts:[],
                login:$("#Login").val(),
                email:$("#Email").val(),
                password:$("#Password").val(),
                firstName:$("#Nome").val(),
                lastName:$("#Sobrenome").val()
            };
        insertUser(obj);
    });
});
