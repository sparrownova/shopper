// Copyright (c) 2015, Sparrownova Technologies. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/shopper/js/sales_trends_filters.js", function() {
	frappe.query_reports["Delivery Note Trends"] = {
		filters: shopper.get_sales_trends_filters()
	}
});
