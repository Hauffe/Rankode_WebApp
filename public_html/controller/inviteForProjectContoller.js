/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {

var RANKODE_URL = "http://localhost:8080/service/api/";
var login = sessionStorage.getItem('login');

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var id = getUrlParameter('projeto');
var projeto;

    function listCollaborators(){
        $.ajax({
            url: RANKODE_URL+"developer/findAll",
            dataType: "json",
            type: 'GET',
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) {
                $.each(data, function(index,result) {
                    if(result.login !== login){
                        $('#users').append(createProjectRow(index,result));
                    }
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
    
    function projeto(){
        $.ajax({
            url: RANKODE_URL+"project/findById/"+id,
            dataType: "json",
            type: 'GET',
            crossDomain: true,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function(data) {
                $("#project_name").append("Convidar para <b>"+ data.name + "</b>");
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
    return "<div id="+result.login+">"+
            "<div class='col-md-4 col-sm-4 col-xs-12 profile_details'>" +
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
                        "<button id='addProject' type='button' class='btn btn-primary btn-xs' onclick='invite("+result.login+")'>" +
                            "<i class='fa fa-user'></i> Adicionar   "+
                        "</button>" +
                    "</div>"+
                "</div>"+
             "</div>"+
             "</div>"+
            "</div>";
    }
    projeto();
    listCollaborators();
    
    
    (function($) {
        invite = function(login) {
          
          $("#popup").remove();
          $("#serviceResponse").append(
            "<div class='alert alert-sucess alert-info fade in' role='alert' id='popup'>" +
                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>" +
                "</button> Convite enviado para" + login + 
            "</div>");	
    
        return false;
        };
    })(jQuery);
    
});