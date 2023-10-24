# Copyright (c) 2022, Sparrownova Technologies. and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils import add_days, today

from shopper.maintenance.doctype.maintenance_schedule.test_maintenance_schedule import (
	make_serial_item_with_serial,
)
from shopper.stock.doctype.delivery_note.test_delivery_note import create_delivery_note
from shopper.stock.doctype.serial_no.serial_no import get_serial_nos
from shopper.stock.report.stock_ledger.stock_ledger import execute


class TestStockLedgerReeport(FrappeTestCase):
	def setUp(self) -> None:
		make_serial_item_with_serial("_Test Stock Report Serial Item")
		self.filters = frappe._dict(
			company="_Test Company",
			from_date=today(),
			to_date=add_days(today(), 30),
			item_code="_Test Stock Report Serial Item",
		)

	def tearDown(self) -> None:
		frappe.db.rollback()
