sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	
	return Controller.extend("zapp.ZUI5Report_App.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zapp.ZUI5Report_App.view.Detail
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(this._onRouteMatched, this);

		},

		_onRouteMatched: function (oEvent) {
				this._ReportId = oEvent.getParameter("arguments").ReportId;
				if (this._ReportId === "detail1.1.1") {
					var sURL = "#REISCN-manage";
					var spath = window.location.href.split("#")[0] + sURL;
					var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);
					

				}
				if (this._ReportId === "detail1.1.2") {
					var sURL = "#REISCNPE-manage";
					var spath = window.location.href.split("#")[0] + sURL;
					var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);
				
				}

				if (this._ReportId === "detail1.1.3") {
					var sURL = "#REISCNNT-manage";
					var spath = window.location.href.split("#")[0] + sURL;
                    var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);

				}

				if (this._ReportId === "detail1.1.4") {
					var sURL = "#REISCNRN-manage";
					var spath = window.location.href.split("#")[0] + sURL;
					 var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);
				

				}
				if (this._ReportId === "detail1.2.1") {
					var sURL = "#REISBP-manage";
					var spath = window.location.href.split("#")[0] + sURL;
					 var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);
					

				}

				if (this._ReportId === "detail1.2.2") {
					var sURL = "#REISBPBD-manage";
					var spath = window.location.href.split("#")[0] + sURL;
				   var oFrame = this.getView().byId("idFrame").$()[0];
					oFrame.setAttribute("src", spath);
					

				}

				if (this._ReportId === "detail2.1") {

					var spath =
						"https://sapbj1.sbctest.com:444/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?TEMPLATE=ZRELAB0004001_WT_NEW&DUMMY=4";
					sap.m.URLHelper.redirect(spath, true);

				}

				if (this._ReportId === "detail2.2") {

					var spath =
						"https://sapbj1.sbctest.com:444/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?TEMPLATE=ZRECON0002002_WT_NEW&DUMMY=1";
					sap.m.URLHelper.redirect(spath, true);
				}

				if (this._ReportId === "detail2.3") {
					var spath =
						"https://sapbj1.sbctest.com:444/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?TEMPLATE=ZRECON0002001_WT_NEW&DUMMY=2"
					sap.m.URLHelper.redirect(spath, true);

				}
				if (this._ReportId === "detail2.4") {
					var spath =
						"https://sapbj1.sbctest.com:444/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?TEMPLATE=ZREMDA0005001_WT_NEW&DUMMY=3";
					sap.m.URLHelper.redirect(spath, true);

				}

			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf zapp.ZUI5Report_App.view.Detail
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf zapp.ZUI5Report_App.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf zapp.ZUI5Report_App.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});