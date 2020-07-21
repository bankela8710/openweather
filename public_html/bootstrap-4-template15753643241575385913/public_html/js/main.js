


$(document).ready(function () {
    
    $('#search').click(function () {
        $('#showWeather').addClass('d-block');
        $('#hide-text').addClass('d-block');
        return getWeather();
    });
    function getWeather() {
        var apiKey = '001c5a286fb2252c322a7d779e228af4';
        var city = $('#city').val();
//        console.log(city)
        if (city != "") {

            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/forecast?id=' + city ,
                data: {
                    id: city,
                    appid: apiKey
                },
                // type: 'GET',
                //dataType:json,
                success: function (data) {

                    var table = "";
                    for (i = 0; i < data.list.length; i++) {
                        //var table = "";
                        table += "<tr>";
                        table += "<td>" + data.list[i].dt_txt + "</td>";
                        table += "<td> <img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
                        table += "<td>" + data.list[i].weather[0].main + "</td>";
                        table += "<td>" + data.list[i].weather[0].description + "</td>";
                        table += "<td>" + ((data.list[i].main.temp_min - 273.15).toFixed(0)) +'&deg;C'+ "</td>";
                        table += "<td>" + ((data.list[i].main.temp_max -273.15).toFixed(0)) + '&deg;C' + "</td>";
                        table += "<td>" + data.list[i].main.pressure + "hpa" + "</td>";
                        table += "<td>" + data.list[i].main.humidity + "%" + "</td>";
                        table += "<td>" + data.list[i].wind.speed + "m/s" + "</td>";
                        table += "<td>" + data.list[i].wind.deg + "&deg" + "</td>";
                        table += "</tr>";
                    }


                    $('#forecastWeather').html(table);
                    $('#city').val("");
                    $('#city-name').text(data.city.name + "," + " " + data.city.country);
                }
            });
        } else {
            alert("Morate da izaberete grad");
        }

    }

    function getFormatedDate(date) {
        return  new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).split(' ').join('-');
       
    }
    
    function getDates(array) {
        let dates = [];
        for (let i in array) {
            var data = array[i].dt_txt;
            var da = formatDate(data);
            if (data.indexOf(da) == -1) {

                dates.push(da);
            }
            console.log(dates);
        }
    }


//    function formatDate(data) {
//        var d = new Date(data),
//                month = '' + (d.getMonth() + 1),
//                day = '' + d.getDate(),
//                year = '' + d.getFullYear();
//        if (month.length < 2)
//            month = '0' + month;
//        if (day.length < 2)
//            day = '0' + day;
//
//        return formattedDate = year + month + day;
//        console.log(d);
//
//    }

});


