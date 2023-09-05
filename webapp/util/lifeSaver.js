sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
        return {
        // this is my formatter function
            convertUpper: function(inp){
            if(inp){
              return inp.toUpperCase();
            }
          },
            formatSalary: function(amount,currency){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });
            if(amount){
                return oCurrencyFormat.format(amount,currency);
            }else{
                return "0.00";
            }
            },
        }
    
    });