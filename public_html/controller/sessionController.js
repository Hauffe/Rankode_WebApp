/*
 * Control the user's data
 * 
 */

$(document).ready(function(){
    
    var RANKODE_URL = "http://localhost:8080/service/api/";
    var GIT_URL = "";
    var url = "http://localhost:8383/RankodeWebApp/";
    
    var login = sessionStorage.getItem('login');
    var firstName = sessionStorage.getItem('firstName');
    var lastName = sessionStorage.getItem('lastName');
    
        $("#userName").append(
                    "<img src='images/img.png' alt=''>"+ lastName+" "+ firstName +" "+
                    "<span class='fa fa-angle-down'></span>");
        
        $('#profile_info').append(
                    "<span>Bem vindo(a),</span>"+
                    "<h2>"+ lastName+" "+ firstName +" "+"</h2>");
    
	$("#logout").click(function(){
            sessionStorage.clear();
            window.location.replace(url+'/login.html');
	});
});