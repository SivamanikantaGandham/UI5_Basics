sap.ui.define(
  [ "tom/controller/BaseController",
   "tom/model/model",
  ],
  function (BaseController, model) {
    return BaseController.extend("tom.controller.View2", {
      //define a global variable
      //formatter: lifeSaver,
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

        //Setting JSON model to one way binding as JSONmodel by default is two way
        //oModel.setDefaultBindingMode("OneWay");
        //step 3: make model aware to the application,view or controller
        // as first model has no name,it is considered as default
        sap.ui.getCore().setModel(oModel);
        //the last entered  gets overwritten , as this model has a name,it is considered as second
        sap.ui.getCore().setModel(oModel1,"got");

        // // syntax 3 for property binding
        // this.oView.byId("idEmpSal").bindValue("/empStr/salary");
        // // syntax 4 for property binding
        // this.oView.byId("idEmpCurr").bindProperty("value", "/empStr/currency");
        // this.oView.byId("idEmpSmk").bindProperty("state", "/empStr/smoker");
      },
      
      // onBeforeRendering: function(){
      //   // if any employee name in the table is Naveen gray out
      //   var oModel = this.oCore.getModel();
      //   var sData = oModel.getProperty("/empTab");
      //   if(sData.indexOf("Naveen")){
      //     this.oView.byId("jumbo").setEnabled(false);
      //   }
      // },
      // onAfterRendering: function(){
      //   $("#idMyXML--idSimple").fadeOut(1000).fadeIn(2000);
      // }
      // variableName: value
      //Global variable at controller class level

      empId: 9099,
      onFlipflop: function(){
        var oModel = sap.ui.getCore().getModel();
        var oModelGOT = sap.ui.getCore().getModel("got");
        sap.ui.getCore().setModel(oModelGOT);
        sap.ui.getCore().setModel(oModel,"got"); 
      },
      //entitled to receive an object for free
      onRowselection: function(oEvent){
       //step 1 get the address of the selected element by row selection event
       var sPath = oEvent.getParameter("rowContext").getPath();
       // step 2 get the object of simple form
       var oSimpleform = this.oView.byId("idSimple");
       //step 3 bind the address of the element  to simple form -->element binding
        oSimpleform.bindElement(sPath);
      },
      onChange: function () {
        var oView = this.getView();
        //debugger;
        //Access the field obj and change the value
        // this.oView.byId("idEmpId").setValue(this.empId);
        // oView.byId("idEmpName").setValue("Usha Devi");
        // this.oView.byId("idEmpSal").setValue("100000");
        // this.oView.byId("idEmpCurr").setValue("INR");
        // this.oView.byId("idEmpSmk").setValue("");

        //step 1: access the model object
        var oModel = sap.ui.getCore().getModel();
        //step 2: change the data in the model at runtime
        var jsonData = oModel.getProperty("/empStr");
        console.log(jsonData);
        oModel.setProperty("/empStr", {
          empId: "10002",
          empName: "Vijay",
          salary: "20000",
          currency: "INR",
          smoker: false,
        });
      },
    });
  }
);
