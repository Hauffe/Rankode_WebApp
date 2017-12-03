/* 
 * Home
 */


$(document).ready(function(){
    
    var RANKODE_URL = "http://localhost:41115/service/api/";
    var GIT_URL = "";
    var url = "http://localhost:8383/RankodeFrontEnd/";
    
	$("#logout").click(function(){
            sessionStorage.removeItem('login');
            window.location.replace(url+'/login.html');
                    
	});
});

