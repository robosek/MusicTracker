define(['modules/app'],function(app){
   
    app.directive("alert",function(){
        return{
          restrict:"E",
            scope:{
                topic:"@topic",
                content:"@content"
            },
            templateUrl:"../assets/templates/alert.html",
            replace:true
            
            
        };
        
    });
    
    
});