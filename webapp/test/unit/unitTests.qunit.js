/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zapp/ZUI5Report_App/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});