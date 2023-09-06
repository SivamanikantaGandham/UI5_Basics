sap.ui.define([
    'tcs/sap/ui/hm/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("tcs.sap.ui.hm.controller.View1",{
        onGoTo: function(){
            //Step 1: get the App Container class object where we embedded our views
            var oAppCon = this.getView().getParent();
            //step 2: container has API to navigate
            oAppCon.to("idView2")
            //alert("Function under construction");
            
        },
        onOrder:function(){
            this.onGoTo();
        }
    });
    
});