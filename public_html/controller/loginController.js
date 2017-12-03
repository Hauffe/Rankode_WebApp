/* 
 * Login
 */

$(document).ready(function(){
    
    var RANKODE_URL = "http://localhost:41115/service/api/";
    var GIT_URL = "";
    var url = "http://localhost:8383/RankodeFrontEnd/";
    
	$("#login").click(function(){
            var obj = {
                accounts:[],
		login:$("#userLogin").val(),
		email:'',
                password:$("#passLogin").val(),
                firstName:'',
                lastName:''
            };
                $.ajax({
               url: RANKODE_URL+"developer/login",
                dataType: "json",
                type: 'POST',
                data: JSON.stringify(obj),
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                success: function(data) { 
                    sessionStorage.setItem('login', data.login);
                    sessionStorage.setItem('firstName', data.firstName);
                    sessionStorage.setItem('lastName', data.lastName);
                    sessionStorage.setItem('email', data.email);
                    window.location.replace(url+'/index.html');
                },
                error: function(jqXHR) {
                  $("#popup").remove();
                  $("#serviceResponseLogin").append(
                    "<div class='alert alert-danger alert-dismissible fade in' role='alert' id='popup'>" +
                        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                        "</button>" + jqXHR.responseJSON  +
                    "</div>");
                } 
            });
                
	});
});