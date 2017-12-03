/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* PopulateTables */
function init_PopulateTables() {
        var URL = "http://localhost:8383/RankodeWebApp/";
        
        var RANKODE_URL = "http://localhost:34404/service/api/";

            $.ajax({
               url: RANKODE_URL+"result/findAllSources",
                dataType: "json",
                type: 'GET',
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                success: function(data) {
                    $.each(data, function(index,result) {
                        if(result.metric.target.id == 1 ){
                            $('#packagesNames')
                            .append("<tr>"+
                                        "<td><a href='"+URL+"/projects_pachage_detail.html?name="+result.source+"'>"+result.source+"</a></td>"+
                                        "<td>"+result.metric.target.name+"</td>"+
                                    "<tr>");    
                        }
                        if(result.metric.target.id == 2 ){
                            $('#classesNames')
                            .append("<tr>"+
                                        "<td><a href='"+URL+"/projects_class_detail.html?name="+result.source+"'>"+result.source+"</a></td>"+
                                        "<td>"+result.metric.target.name+"</td>"+
                                    "<tr>");    
                        }
                        if(result.metric.target.id == 3 ){
                            $('#methodsNames')
                            .append("<tr>"+
                                        "<td><a href='"+URL+"/projects_method_detail.html?name="+result.source+"'>"+result.source+"</a></td>"+
                                        "<td>"+result.metric.target.name+"</td>"+
                                    "<tr>");    
                        }
                    });
                },
                error: function(jqXHR) {
                  console.log(jqXHR.responseJSON );
                } 
            });
};

/* CUSTOM NOTIFICATION */
			
function init_CustomNotification() {

        console.log('run_customtabs');

        if( typeof (CustomTabs) === 'undefined'){ return; }
        console.log('init_CustomTabs');

        var cnt = 10;

        TabbedNotification = function(options) {
          var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
                "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

          if (!document.getElementById('custom_notifications')) {
                alert('doesnt exists');
          } else {
                $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
                $('#custom_notifications #notif-group').append(message);
                cnt++;
                CustomTabs(options);
          }
        };

        CustomTabs = function(options) {
          $('.tabbed_notifications > div').hide();
          $('.tabbed_notifications > div:first-of-type').show();
          $('#custom_notifications').removeClass('dsp_none');
          $('.notifications a').click(function(e) {
                e.preventDefault();
                var $this = $(this),
                  tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
                  others = $this.closest('li').siblings().children('a'),
                  target = $this.attr('href');
                others.removeClass('active');
                $this.addClass('active');
                $(tabbed_notifications).children('div').hide();
                $(target).show();
          });
        };

        CustomTabs();

        var tabid = idname = '';

        $(document).on('click', '.notification_close', function(e) {
          idname = $(this).parent().parent().attr("id");
          tabid = idname.substr(-2);
          $('#ntf' + tabid).remove();
          $('#ntlink' + tabid).parent().remove();
          $('.notifications a').first().addClass('active');
          $('#notif-group div').first().css('display', 'block');
        });

};
		

/* COMPOSE */

function init_compose() {

        if( typeof ($.fn.slideToggle) === 'undefined'){ return; }
        console.log('init_compose');

        $('#compose, .compose-close').click(function(){
                $('.compose').slideToggle();
        });

};
	   


	   /* CUSTOM NOTIFICATION */
			
		function init_CustomNotification() {
			
			console.log('run_customtabs');
			
			if( typeof (CustomTabs) === 'undefined'){ return; }
			console.log('init_CustomTabs');
			
			var cnt = 10;

			TabbedNotification = function(options) {
			  var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
				"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

			  if (!document.getElementById('custom_notifications')) {
				alert('doesnt exists');
			  } else {
				$('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
				$('#custom_notifications #notif-group').append(message);
				cnt++;
				CustomTabs(options);
			  }
			};

			CustomTabs = function(options) {
			  $('.tabbed_notifications > div').hide();
			  $('.tabbed_notifications > div:first-of-type').show();
			  $('#custom_notifications').removeClass('dsp_none');
			  $('.notifications a').click(function(e) {
				e.preventDefault();
				var $this = $(this),
				  tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
				  others = $this.closest('li').siblings().children('a'),
				  target = $this.attr('href');
				others.removeClass('active');
				$this.addClass('active');
				$(tabbed_notifications).children('div').hide();
				$(target).show();
			  });
			};

			CustomTabs();

			var tabid = idname = '';

			$(document).on('click', '.notification_close', function(e) {
			  idname = $(this).parent().parent().attr("id");
			  tabid = idname.substr(-2);
			  $('#ntf' + tabid).remove();
			  $('#ntlink' + tabid).parent().remove();
			  $('.notifications a').first().addClass('active');
			  $('#notif-group div').first().css('display', 'block');
			});
			
		};
		
                


$(document).ready(function() {
                init_PopulateTables();
                init_compose();
                init_CustomNotification();
});	