// Copyright (c) 2019, Sparrownova Technologies and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Newsletter', {
	refresh() {
		shopper.toggle_naming_series();
	}
});
