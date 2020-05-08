$(document).ready(
    function(){
        $("#nasabutton").click(function(){
            $.ajax({
                url: 'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',
                dataType: 'json',
                success: function(result){
                    $("#apod-access-date").text(result.date);
                    $("#apod-image").attr("src",result.url);
                    $("#apod-image").css("display","block");
                    $("#apod-title").text(result.title);
                    $("#apod-explanation").text(result.explanation);
                },
                error: function(reason, ex){
                    alert(reason);
                }
            });

        });
        $("#clearnasabutton").click(function(){
            $("#apod-access-date").text("");
            $("#apod-image").attr("src","");
            $("#apod-title").text("");
            $("#apod-explanation").text("");
            $("#apod-image").css("display","none");
        });
        $("#weatherbutton").click(function(){
            zipcode=$("#zip").val();
           $.ajax({
               
                url: 'http://api.openweathermap.org/data/2.5/weather?APPID=600659d50b26106eb7c16e6170199541&zip='+zipcode,
                dataType: 'json',
                success: function(result){
                    $("#city_name").text(result.name);
                    $("#temperature").text(result.main.temp);
                    $("#pressure").text(result.main.pressure);
                    $("#humidity").text(result.main.humidity);
                    $("#wind_speed").text(result.wind.speed);
                    $("#weather").css("display","block");
                    
                },
                error: function(reason, er){
                    alert(reason);
                }
           })
        });
        $("#clearweatherbutton").click(function(){
           $("#weather").css("display", "none");
        });
    }
);