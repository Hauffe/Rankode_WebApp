/* 
 * Home
 */


$(document).ready(function(){
    
    var RANKODE_URL = "http://localhost:41115/service/api/";
    var GIT_URL = "";
    var url = "http://localhost:8383/RankodeFrontEnd/";
    var login = sessionStorage.getItem('login');
    
        $("#userName").append(
                    "<img src='images/img.png' alt=''>"+ sessionStorage.getItem('firstName')+" "+ sessionStorage.getItem('lastName') +" "+
                    "<span class='fa fa-angle-down'></span>");
    
	$("#logout").click(function(){
            sessionStorage.clear();
            window.location.replace(url+'/login.html');
	});
});

