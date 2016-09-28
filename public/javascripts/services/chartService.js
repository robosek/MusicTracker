/**
 * Created by robert on 10.09.16.
 */
define(['modules/app','c3'],function (app,c3) {

    app.factory('chartService',function () {

        var _generateDonutChart = function (dataJson) {

            var preparedDataJson = prepareDataOnTour(dataJson);
            var chart = c3.generate({
                bindto:'#chartDonut',
                data: {
                    type: 'donut',
                    json: [preparedDataJson.data],
                    keys:{
                        value:preparedDataJson.keys
                    },
                    names:{
                        1:'On tour',
                        0:'Local concerts'
                    }
                },
                donut: {
                    title: "Artists on tour"
                }
            });


            function prepareDataOnTour(json){
                var _jsonData = json;
                var _data = {};
                var _keys = [];

                _jsonData.forEach(function(e) {
                    _keys.push(e['_id']);
                    _data[e['_id']] = e.count;
                })

                var _result = {
                    data :_data,
                    keys:_keys
                }

                return _result
            }

        }


        var _generateBarChart = function (dataJson) {

            var chart = c3.generate({
                data: {
                    type: 'bar',
                    json: dataJson,
                    keys: {
                        x: 'name',
                        value: ['listeners']
                    },
                    names:{
                        'listeners':'Number of listeners'
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
            });



        };

        return{
            generateBarChart: _generateBarChart,
            generateDonutChart:_generateDonutChart
        }
    });

})
