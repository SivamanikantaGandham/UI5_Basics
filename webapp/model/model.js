sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/xml/XMLModel',
    'sap/ui/model/resource/ResourceModel',
], function(JSONModel,XMLModel,ResourceModel) {
    'use strict';
     return{
        createJSONModel: function(filePath){
            //Step1: create a brand new model object
            var oModel = new JSONModel();
            //Step 2: set or load data to the model
            //oModel.setData();
            oModel.loadData(filePath);
            //returns a model object created
            return oModel;
        },
        createXMLModel: function(){
            //Step1: create a brand new model object
            var oModel = new XMLModel();
            //Step 2: set or load data to the model
            //oModel.setData();
            oModel.loadData("model/mockdata/mydata.xml");
            //returns a model object created
            return oModel;
        },
        createResourceModel: function(){
            var oModel= new ResourceModel({
                bundleUrl:'i18n/i18n.properties'
            });

            return oModel;

        },
        myCode: function(){

        },
     };
    
});