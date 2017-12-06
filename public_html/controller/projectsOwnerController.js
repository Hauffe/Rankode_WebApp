/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var RANKODE_URL = "http://localhost:8080/service/api/";
    var GITHUB_URL = "https://api.github.com/";
    var URL = "http://localhost:8383/RankodeWebApp/";
    
    var login = sessionStorage.getItem('login');
    var firstName = sessionStorage.getItem('firstName');
    var lastName = sessionStorage.getItem('lastName');
    
    function listProjects(obj){
        $.ajax({
            url: RANKODE_URL+"project/findByFilter",
            dataType: "json",
            type: 'POST',
            data: JSON.stringify(obj),
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) {
                $.each(data, function(index,result) {                   
                        $('#projects_owner').append(createProjectRow(index,result));    
                });
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
    
    function createProjectRow(index,result) {
    return "<tr>" + 
            "<td>#</td>" +
            "<td>" +
                "<a href='project_detail.html'>"+result.name+"</a>" +
                "<br />" +
                "<small>Created 01.01.2015</small>" +
            "</td>" +
            "<td>" +
                "<ul class='list-inline'>" +
                    "<li>" +
                        "<img src='images/user.png' class='avatar' alt='Avatar'>" +
                    "</li>" +
                "</ul>" +
            "</td>" +
            "<td>" +
                "<button type='button' class='btn btn-success btn-xs'>Success</button>" +
            "</td>" +
            "<td>" +
                "<a href='"+URL+"/inviteForProject.html?projeto="+result.id+"' class='btn btn-info btn-xs'><i class='fa fa-cubes'></i> Convidar colaboradores</a>" +
                "<a href='#' class='btn btn-primary btn-xs'><i class='fa fa-folder'></i> View </a>" +
                "<a href='#' class='btn btn-danger btn-xs'><i class='fa fa-trash-o'></i> Delete </a>" +
            "</td>" +
        "</tr>";
    }
    var obj =   {
                    owner:
                    {
                        login:login
                    }
                   };
    listProjects(obj);

});



