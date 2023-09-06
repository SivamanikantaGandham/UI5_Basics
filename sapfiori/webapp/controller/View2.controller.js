sap.ui.define([
    'tcs/sap/ui/hm/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("tcs.sap.ui.hm.controller.View2",{
        onBack: function(){
            //Step 1: get the App Container class object where we embedded our views
            var oAppCon = this.getView().getParent();
            //step 2: container has API to navigate
            oAppCon.to("idView1")
            //alert("Function under construction");
        }
    });
    
});