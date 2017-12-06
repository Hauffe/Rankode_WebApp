/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {

var RANKODE_URL = "http://localhost:8080/service/api/";

    function listCollaborators(obj){
        $.ajax({
            url: RANKODE_URL+"developer/findAll",
            dataType: "json",
            type: 'GET',
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) {
                $.each(data, function(index,result) {                   
                        $('#users').append(createProjectRow(index,result));    
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
    return "<div class='col-md-4 col-sm-4 col-xs-12 profile_details'>" +
            "<div class='well profile_view'>" +
                "<div class='col-sm-12'> "+
                    "<h4 class='brief'><i>"+result.firstName+"</i></h4> "+
                    "<div class='left col-xs-7'> "+
                        "<h2>"+result.firstName+" "+result.lastName+"</h2> "+
                        "<p><strong>About: </strong> [about]</p> "+
                        "<ul class='list-unstyled'>"+
                            "<li><i class='fa fa-building'></i> Contact: "+result.email+"</li>"+
                        "</ul> "+
                    "</div>"+
                    "<div class='right col-xs-5 text-center'>"+
                        "<img src='images/img.png' alt='' class='img-circle img-responsive'> "+
                    "</div>"+
                "</div>"+
                "<div class='col-xs-12 bottom text-center'>"+
                    "<div class='col-xs-12 col-sm-6 emphasis'> "+
                        "<button type='button' class='btn btn-success btn-xs'> <i class='fa fa-user'>"+
                            "</i> <i class='fa fa-comments-o'></i> </button>" +
                        "<button id='addProject' type='button' class='btn btn-primary btn-xs'>" +
                            "<i class='fa fa-user'> </i> + "+
                        "</button>" +
                    "</div>"+
                "</div>"+
             "</div>"+
            "</div>";
    }
    
    listCollaborators();
});