// Copyright (c) 2019, Sparrownova Technologies. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Payment Gateway Account', {
	refresh(frm) {
		shopper.utils.check_payments_app();
		if(!frm.doc.__islocal) {
			frm.set_df_property('payment_gateway', 'read_only', 1);
		}
	}
});
