# Copyright (c) 2013, Sparrownova Technologies. and contributors
# For license information, please see license.txt


from datetime import datetime

import frappe
from frappe.tests.utils import FrappeTestCase

from shopper.buying.doctype.purchase_order.purchase_order import make_purchase_receipt
from shopper.buying.report.procurement_tracker.procurement_tracker import execute
from shopper.stock.doctype.material_request.material_request import make_purchase_order
from shopper.stock.doctype.material_request.test_material_request import make_material_request
from shopper.stock.doctype.warehouse.test_warehouse import create_warehouse


class TestProcurementTracker(FrappeTestCase):
	pass
