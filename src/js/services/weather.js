/* global app */

'use strict';

app.service('Weather', [
    '$http',
    function ($http) {
        var Weather = {
            fetch: function (id) {
                var endpoint = id ? 'minutes/' + id + '/' : 'minutes/';

                return $http.get(app.settings.api.url + '/api/' + endpoint).then(function (response) {
                    console.log('Meeting fetch ok', response);

                    return response && response.data;
                }).catch(function (error) {
                    console.log('Meeting fetch error', error);

                    return error;
                });
            },

        };

        return Weather;
    }
]);
