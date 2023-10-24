# Copyright (c) 2013, Sparrownova Technologies. and contributors
# For license information, please see license.txt


import frappe

from shopper.projects.report.billing_summary import get_columns, get_data


def execute(filters=None):
	filters = frappe._dict(filters or {})
	columns = get_columns()

	data = get_data(filters)
	return columns, data
