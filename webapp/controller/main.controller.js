sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.UI5Demo.controller.main", {
		onInit: function () {

		},
		onPress:function(){
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.alert("Hello world");
		}
	});
});