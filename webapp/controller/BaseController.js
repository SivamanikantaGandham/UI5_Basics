sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "tom/util/lifeSaver"
], function(Controller,lifeSaver) {
    'use strict';
    return Controller.extend("jerry.controller.BaseController",{
        formatter: lifeSaver,
        myReuseCode: function(){
        alert("Hey,welcome to my code reusability")
           } 
    });
    
});