/**
 * Created by robert on 06.09.16.
 */
define(['modules/app'],function (app) {
    app.directive('navbar',function(){

        return{
            restrict:"E",
            scope:{
                title:'@title',
				logo:'@logo'
            },
            templateUrl: '../assets/templates/navbar.html',
            replace:true
        };
    });
});