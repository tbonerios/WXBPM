var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

 var Latitude;
    var Longitude;
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var weather;
    var temp;
    var videoselect;
    var clouds = "P-eAx3Dxpj4";
    var zipcode;

        function getLocation(){
      console.log(navigator.geolocation)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,decline);
        //return true;
      } else {
        console.log("fuck u")
      }
    };

    function decline(){
      console.log("decline");
      $("#submit").on("click", function(){
        event.preventDefault();
        zipcode = $("#zipcode").val().trim();
        console.log(zipcode);
        doSomething();

      });
    };


    function showPosition(position) {
      Latitude = position.coords.latitude 
      Longitude = position.coords.longitude; 
      console.log(Latitude, Longitude);

      doSomething();
    };

    getLocation();

    function doSomething(){
      console.log(zipcode);
      if(typeof zipcode !== "undefined"){
        var queryURLlatlong = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&APPID="+APIKey;
        $.ajax({
          url:queryURLlatlong,
          method: "GET"
        }).done(function(response){
          console.log(queryURLlatlong);
          $(".city").text(response.name); 
          weather = response.weather[0].main;   
          $(".weather").text(weather);   
          temp = ((response.main.temp)* (9/5) - 459.67).toFixed(2);
          $(".temp").text(temp + "F");
          

          var tag = document.createElement('script');

          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          console.log(weather);

//weather codes
          if(weather == "Clouds"){
            videoselect = "P-eAx3Dxpj4";
          };
          if(weather == "Clear"){
            videoselect = "lJJQEQJoc3s";
          }

          });

        
        var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: videoselect,
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
            }

            // 4. The API will call this function when the video player is ready.
            function onPlayerReady(event) {
              event.target.playVideo();
            }

            // 5. The API calls this function when the player's state changes.
            //    The function indicates that when playing a video (state=1),
            //    the player should play for six seconds and then stop.
            var done = false;
            function onPlayerStateChange(event) {
              if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
              }
            }
            function stopVideo() {
              player.stopVideo();
            };


      }
      else{
        console.log("zip is blank");
        var queryURLlatlong = "http://api.openweathermap.org/data/2.5/weather?lat="+Latitude+"&lon="+Longitude+"&APPID="+APIKey;
        $.ajax({
          url:queryURLlatlong,
          method: "GET"
        }).done(function(response){
          console.log(queryURLlatlong);
          $(".city").append(response.name); 
          weather = response.weather[0].main;   
          $(".weather").append(weather);   
          temp = ((response.main.temp)* (9/5) - 459.67).toFixed(2);
          $(".temp").append(temp + "F");
          

          var tag = document.createElement('script');

          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          console.log(weather);

//weather codes
          if(weather == "Clouds"){
            videoselect = "P-eAx3Dxpj4";
          }

          if(weather == "Clear"){
            videoselect = "lJJQEQJoc3s";
          }

          });
        };

        };

        var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: videoselect,
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
            }

            // 4. The API will call this function when the video player is ready.
            function onPlayerReady(event) {
              event.target.playVideo();
            }

            // 5. The API calls this function when the player's state changes.
            //    The function indicates that when playing a video (state=1),
            //    the player should play for six seconds and then stop.
            var done = false;
            function onPlayerStateChange(event) {
              if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
              }
            }
            function stopVideo() {
              player.stopVideo();
            };



$(document).ready(function() {
    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    // Activate Popovers and set color for popovers
    $('[data-toggle="popover"]').each(function() {
        color_class = $(this).data('color');
        $(this).popover({
            template: '<div class="popover ' + color_class + ' " role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        });
    });

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

    // if ($('.navbar[color-on-scroll]').length != 0) {
    //     nowuiKit.checkScrollForTransparentNavbar();
    //     $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
    // }

    // $('.form-control').on("focus", function() {
    //     $(this).parent('.input-group').addClass("input-group-focus");
    // }).on("blur", function() {
    //     $(this).parent(".input-group").removeClass("input-group-focus");
    // });

    // Activate bootstrapSwitch
    $('.bootstrap-switch').each(function() {
        $this = $(this);
        data_on_label = $this.data('on-label') || '';
        data_off_label = $this.data('off-label') || '';

        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });



});

$(window).resize(function() {
    if ($(window).width() < 992) {
        nowuiKit.initRightMenu();
    }
});

nowuiKit = {
    misc: {
        navbar_menu_visible: 0
    },

    // checkScrollForTransparentNavbar: debounce(function() {
    //     if ($(document).scrollTop() > scroll_distance) {
    //         if (transparent) {
    //             transparent = false;
    //             $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
    //         }
    //     } else {
    //         if (!transparent) {
    //             transparent = true;
    //             $('.navbar[color-on-scroll]').addClass('navbar-transparent');
    //         }
    //     }
    // }, 17),



    initRightMenu: function(){
        if(!toggle_initialized){
            $toggle = $('.navbar-toggler');

            $toggle.click(function (){
                if(nowuiKit.misc.navbar_menu_visible == 1) {
                    $('html').removeClass('nav-open');
                   nowuiKit.misc.navbar_menu_visible = 0;
                    setTimeout(function(){
                       $toggle.removeClass('toggled');
                       $('#bodyClick').remove();
                   }, 550);

                } else {

                   setTimeout(function(){
                       $toggle.addClass('toggled');
                   }, 580);

                   $navbar = $(this).parent('.navbar-translate').siblings('.navbar-collapse');
                   background_image = $navbar.data('nav-image');
                   if(background_image != undefined){
                      $navbar.css('background',"url('" + background_image + "')")
                             .removeAttr('data-nav-image')
                             .css('background-size',"cover")
                             .addClass('has-image');
                   }

                   div = '<div id="bodyClick"></div>';
                   $(div).appendTo('body').click(function() {
                       $('html').removeClass('nav-open');
                       nowuiKit.misc.navbar_menu_visible = 0;
                        setTimeout(function(){
                           $toggle.removeClass('toggled');
                           $('#bodyClick').remove();
                        }, 550);
                   });

                  $('html').addClass('nav-open');
                   nowuiKit.misc.navbar_menu_visible = 1;

                }
            });
            toggle_initialized = true;
        }
    },
}


var big_image;

// 


