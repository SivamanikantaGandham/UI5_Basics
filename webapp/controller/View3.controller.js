sap.ui.define(
  ["sap/ui/core/mvc/Controller", 
   "tom/model/model"],
  function (Controller, model) {
    return Controller.extend("tom.controller.View3", {
      //Constructor of my controller class
      onInit: function () {
        oView: this.getView();

        //create model using reusable model module which we created
        //var oModel = model.createJSONModel("model/mockdata/mydata.json");
        var oModel = model.createXMLModel();
        // i18n model 
        var oResource = model.createResourceModel();
        sap.ui.getCore().setModel(oResource,'i18n');
        //create  another model using reusable model module which we created
        var oModel1 = model.createJSONModel("model/mockdata/another.json");
        sap.ui.getCore().setModel(oModel);
      },
      
      
    });
  }
);
