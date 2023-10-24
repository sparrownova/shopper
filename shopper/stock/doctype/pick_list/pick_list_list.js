// Copyright (c) 2023, Sparrownova Technologies. and contributors
// For license information, please see license.txt

frappe.listview_settings['Pick List'] = {
	get_indicator: function (doc) {
		const status_colors = {
			"Draft": "grey",
			"Open": "orange",
			"Completed": "green",
			"Cancelled": "red",
		};
		return [__(doc.status), status_colors[doc.status], "status,=," + doc.status];
	},
};