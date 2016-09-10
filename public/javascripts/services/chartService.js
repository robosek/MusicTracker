/**
 * Created by robert on 10.09.16.
 */
define(['modules/app','c3'],function (app,c3) {

    app.factory('chartService',function () {

        var _generateBarChart = function (dataJson) {

            var chart = c3.generate({
                data: {
                    type: 'bar',
                    json: dataJson,
                    keys: {
                        x: 'name',
                        value: ['listeners']
                    }
                },
                axis: {
                    x: {
                        type: 'category'
                    }
                },
                bar: {
                    width: {
                        ratio: 0.7
                    }
                }
            },1000);
        };

        return{
            generateBarChart: _generateBarChart
        }
    });

})
