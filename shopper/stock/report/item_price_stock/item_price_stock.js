// Copyright (c) 2016, Sparrownova Technologies. and contributors
// For license information, please see license.txt


frappe.query_reports["Item Price Stock"] = {
	"filters": [
		{
			"fieldname":"item_code",
			"label": __("Item"),
			"fieldtype": "Link",
			"options": "Item"
		}
	]
}
