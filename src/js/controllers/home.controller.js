/* global app: true */

'use strict';

app.controller('homeCtrl', [
    '$scope','$http',
    function ($scope,$http) {
      $scope.$on('LOAD',function(){$scope.loading=true});
      $scope.$on('UNLOAD',function(){$scope.loading=false});

         var weatherIcons = [{
  "200": {
    "label": "thunderstorm with light rain",
    "icon": "storm-showers"
  },

  "201": {
    "label": "thunderstorm with rain",
    "icon": "storm-showers"
  },

  "202": {
    "label": "thunderstorm with heavy rain",
    "icon": "storm-showers"
  },

  "210": {
    "label": "light thunderstorm",
    "icon": "storm-showers"
  },

  "211": {
    "label": "thunderstorm",
    "icon": "thunderstorm"
  },

  "212": {
    "label": "heavy thunderstorm",
    "icon": "thunderstorm"
  },

  "221": {
    "label": "ragged thunderstorm",
    "icon": "thunderstorm"
  },

  "230": {
    "label": "thunderstorm with light drizzle",
    "icon": "storm-showers"
  },

  "231": {
    "label": "thunderstorm with drizzle",
    "icon": "storm-showers"
  },

  "232": {
    "label": "thunderstorm with heavy drizzle",
    "icon": "storm-showers"
  },

  "300": {
    "label": "light intensity drizzle",
    "icon": "sprinkle"
  },

  "301": {
    "label": "drizzle",
    "icon": "sprinkle"
  },

  "302": {
    "label": "heavy intensity drizzle",
    "icon": "sprinkle"
  },

  "310": {
    "label": "light intensity drizzle rain",
    "icon": "sprinkle"
  },

  "311": {
    "label": "drizzle rain",
    "icon": "sprinkle"
  },

  "312": {
    "label": "heavy intensity drizzle rain",
    "icon": "sprinkle"
  },

  "313": {
    "label": "shower rain and drizzle",
    "icon": "sprinkle"
  },

  "314": {
    "label": "heavy shower rain and drizzle",
    "icon": "sprinkle"
  },

  "321": {
    "label": "shower drizzle",
    "icon": "sprinkle"
  },

  "500": {
    "label": "light rain",
    "icon": "rain"
  },

  "501": {
    "label": "moderate rain",
    "icon": "rain"
  },

  "502": {
    "label": "heavy intensity rain",
    "icon": "rain"
  },

  "503": {
    "label": "very heavy rain",
    "icon": "rain"
  },

  "504": {
    "label": "extreme rain",
    "icon": "rain"
  },

  "511": {
    "label": "freezing rain",
    "icon": "rain-mix"
  },

  "520": {
    "label": "light intensity shower rain",
    "icon": "showers"
  },

  "521": {
    "label": "shower rain",
    "icon": "showers"
  },

  "522": {
    "label": "heavy intensity shower rain",
    "icon": "showers"
  },

  "531": {
    "label": "ragged shower rain",
    "icon": "showers"
  },

  "600": {
    "label": "light snow",
    "icon": "snow"
  },

  "601": {
    "label": "snow",
    "icon": "snow"
  },

  "602": {
    "label": "heavy snow",
    "icon": "snow"
  },

  "611": {
    "label": "sleet",
    "icon": "sleet"
  },

  "612": {
    "label": "shower sleet",
    "icon": "sleet"
  },

  "615": {
    "label": "light rain and snow",
    "icon": "rain-mix"
  },

  "616": {
    "label": "rain and snow",
    "icon": "rain-mix"
  },

  "620": {
    "label": "light shower snow",
    "icon": "rain-mix"
  },

  "621": {
    "label": "shower snow",
    "icon": "rain-mix"
  },

  "622": {
    "label": "heavy shower snow",
    "icon": "rain-mix"
  },

  "701": {
    "label": "mist",
    "icon": "sprinkle"
  },

  "711": {
    "label": "smoke",
    "icon": "smoke"
  },

  "721": {
    "label": "haze",
    "icon": "day-haze"
  },

  "731": {
    "label": "sand, dust whirls",
    "icon": "cloudy-gusts"
  },

  "741": {
    "label": "fog",
    "icon": "fog"
  },

  "751": {
    "label": "sand",
    "icon": "cloudy-gusts"
  },

  "761": {
    "label": "dust",
    "icon": "dust"
  },

  "762": {
    "label": "volcanic ash",
    "icon": "smog"
  },

  "771": {
    "label": "squalls",
    "icon": "day-windy"
  },

  "781": {
    "label": "tornado",
    "icon": "tornado"
  },

  "800": {
    "label": "clear sky",
    "icon": "sunny"
  },

  "801": {
    "label": "few clouds",
    "icon": "cloudy"
  },

  "802": {
    "label": "scattered clouds",
    "icon": "cloudy"
  },

  "803": {
    "label": "broken clouds",
    "icon": "cloudy"
  },

  "804": {
    "label": "overcast clouds",
    "icon": "cloudy"
  },


  "900": {
    "label": "tornado",
    "icon": "tornado"
  },

  "901": {
    "label": "tropical storm",
    "icon": "hurricane"
  },

  "902": {
    "label": "hurricane",
    "icon": "hurricane"
  },

  "903": {
    "label": "cold",
    "icon": "snowflake-cold"
  },

  "904": {
    "label": "hot",
    "icon": "hot"
  },

  "905": {
    "label": "windy",
    "icon": "windy"
  },

  "906": {
    "label": "hail",
    "icon": "hail"
  },

  "951": {
    "label": "calm",
    "icon": "sunny"
  },

  "952": {
    "label": "light breeze",
    "icon": "cloudy-gusts"
  },

  "953": {
    "label": "gentle breeze",
    "icon": "cloudy-gusts"
  },

  "954": {
    "label": "moderate breeze",
    "icon": "cloudy-gusts"
  },

  "955": {
    "label": "fresh breeze",
    "icon": "cloudy-gusts"
  },

  "956": {
    "label": "strong breeze",
    "icon": "cloudy-gusts"
  },

  "957": {
    "label": "high wind, near gale",
    "icon": "cloudy-gusts"
  },

  "958": {
    "label": "gale",
    "icon": "cloudy-gusts"
  },

  "959": {
    "label": "severe gale",
    "icon": "cloudy-gusts"
  },

  "960": {
    "label": "storm",
    "icon": "thunderstorm"
  },

  "961": {
    "label": "violent storm",
    "icon": "thunderstorm"
  },

  "962": {
    "label": "hurricane",
    "icon": "cloudy-gusts"
  }
}];

        $http.get('cities-fr.json')
        .then(function(res){
         $scope.cities = res.data;
         //console.log('cities',$scope.cities);
         //console.log($scope.cities);
         citySelection($scope.cities)
       });


        function citySelection(cities){
        // console.log("cites selection",cities);
          var len = cities.length;
          var cityList = [];
          console.log(cities);
          for(var i=0;i<len;i++){
            cityList.push(cities[i].nm);


              //console.log(cityList[i]);
            }
          //  console.log(cityList);
        $scope.items = cityList;

         console.log($scope.items);





         $scope.changed = function() {
          console.log($scope.selectedItem);
          $http({
          method : "GET",
          url : "http://api.openweathermap.org/data/2.5/weather?q="+$scope.selectedItem+"&units=metric&appid=36ac20645426de4bda941ce387d2abda"
          }).then(function mySucces(response) {
            $scope.$emit('LOAD');
          $scope.myWelcome = response.data;
          console.log("weather report",response);
          $scope.temperature = response.data.main.temp;
          $scope.temperature = Math.round($scope.temperature);
          $scope.Id= response.data.id;
          console.log($scope.temperature);
          console.log($scope.Id);

          var prefix = 'wi wi-';
          var code = response.data.weather[0].id;
          var icon = weatherIcons[0][code].icon;
          console.log("icon icons",icon);

          if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
              icon = 'day-' + icon;
            }

            // Finally tack on the prefix.
            icon = prefix + icon;
            console.log("icon prefix",icon);
            $scope.iconName = icon;
            console.log("$scope.iconName",$scope.iconName);
          forecast($scope.Id)

          }, function myError(response) {
          $scope.myWelcome = response.statusText;
          });




         }

         function forecast(Id){

           $http({
           method : "GET",
           url : "http://api.openweathermap.org/data/2.5/forecast/daily?id="+Id+"&units=metric&cnt=3&appid=36ac20645426de4bda941ce387d2abda"
           }).then(function mySucces(response) {
           $scope.myWelcome = response.data;
           console.log("weather forecast",response);
           $scope.day1TempMax = response.data.list[0].temp.max;
           $scope.day1TempMax = Math.round($scope.day1TempMax);
           $scope.day1TempMin = response.data.list[0].temp.min;
           $scope.day1TempMin = Math.round($scope.day1TempMin);
           $scope.day2TempMax = response.data.list[1].temp.max;
           $scope.day2TempMax = Math.round($scope.day2TempMax);
           $scope.day2TempMin = response.data.list[1].temp.min;
           $scope.day2TempMin = Math.round($scope.day2TempMin);
           $scope.day3TempMax = response.data.list[2].temp.max;
           $scope.day3TempMax = Math.round($scope.day3TempMax);
           $scope.day3TempMin = response.data.list[2].temp.min;
           $scope.day3TempMin = Math.round($scope.day3TempMin);
           console.log("$scope.day1temp",$scope.day1temp);
           console.log("temperadsadasd",$scope.temperature);
           day2(response);
           day3(response);
           var prefix = 'wi wi-';
           var code = response.data.list[0].weather[0].id;
           var icon = weatherIcons[0][code].icon;
           console.log("icon forecast",icon);

           if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
               icon = 'day-' + icon;
             }

             // Finally tack on the prefix.
             icon = prefix + icon;

            $scope.day1 = icon;



           }, function myError(response) {
           $scope.myWelcome = response.statusText;
           });
           var daylimit = 6;
           var Xmas95 = new Date();
           var weekdays = Xmas95.getDay();

           if(weekdays <= 6){
             console.log("yes it equal");
             var weekname1 = weekdays+1;
             if(weekname1 >6 ){
                weekname1 = 0;
             }
             var weekname2 = weekname1+1;
             if(weekname2 >6 ){
                weekname2 = 0;
             }
             var weekname3 = weekname2+1;
             if(weekname1 >6 ){
                weekname2 = 0;
             }

             console.log("days number",weekname1,weekname2,weekname3);

           }



           console.log("weekday",weekdays); // 1
           var daynumber = weekdays;

            var d = new Date();
            var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";

            $scope.daysname1 = weekday[weekname1];
            $scope.daysname2 = weekday[weekname2];
            $scope.daysname3 = weekday[weekname3];
            console.log("days of week",$scope.daysname1,$scope.daysname2,$scope.daysname3);
                $scope.$emit('UNLOAD');
         }


         function day2(response){
           var prefix = 'wi wi-';
           var code = response.data.list[1].weather[0].id;
           var icon = weatherIcons[0][code].icon;
           console.log("icon forecast day2",icon);

           if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
               icon = 'day-' + icon;
             }


             icon = prefix + icon;
             $scope.day2 = icon;


         }

         function day3(response){
           var prefix = 'wi wi-';
           var code = response.data.list[2].weather[0].id;
           var icon = weatherIcons[0][code].icon;
           console.log("icon forecast day3",icon);

           if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
               icon = 'day-' + icon;
             }


             icon = prefix + icon;

             $scope.day3 = icon;
         }













        }















    }
]);
