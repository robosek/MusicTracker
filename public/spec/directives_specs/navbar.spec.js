define(['modules/app','directives/navbar'],function (app) {
    
   describe("Navbar directive specification", () => {

          var compile, scope, directiveElement;
          beforeEach(module("musicApp"));

           beforeEach(inject(($compile, $rootScope) => {
                    compile = $compile;
                    scope = $rootScope.$new();
                    directiveElement = getCompiledElement();
           }));
       
        
          function getCompiledElement(){
               var element = angular.element('<navbar title="Title"></navbar>');
               var compiledElement = compile(element)(scope);
               scope.$digest();
               return compiledElement;
         }
       
        it('Should have navbar element', () => {
         
            var navbarElement = directiveElement.find('nav');
            expect(navbarElement).toBeDefined();
            var aElement = directiveElement.find('a');
            expect
        });
       
         it('Navbar element should have a element w title', () => {

            var navbarElement = directiveElement.find('nav');
            expect(navbarElement).toBeDefined();
            var aElement = directiveElement.find('a');
            expect(aElement).toBeDefined();
            expect(aElement.text()).toEqual('Title');
        });
       
       
       
       
       
       
       
       
   });
    
});