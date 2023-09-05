sap.ui.jsview("tom.view.Main",{
    getControllerName: function(){
        return "tom.controller.Main";
    },
    createContent: function(oHulk){  

        var oInput = new sap.m.Input("idInput",{
            fieldWidth:"50%",
        });

        var oBtn= new sap.m.Button("idHulk",{
            text:"HULK",
            
            icon:'sap-icon://supplier',
            press: oHulk.superman         //Controller object code                    
            // press:function(){
            //     alert("Welcome to HULK button control");  //JS view object code
            // },
            
        });
        return [oInput,oBtn];
    }
});