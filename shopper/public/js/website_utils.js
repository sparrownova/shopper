// Copyright (c) 2015, Sparrownova Technologies and Contributors
// License: GNU General Public License v3. See license.txt

if(!window.shopper) window.shopper = {};

shopper.subscribe_to_newsletter = function(opts, btn) {
	return frappe.call({
		type: "POST",
		method: "frappe.email.doctype.newsletter.newsletter.subscribe",
		btn: btn,
		args: {"email": opts.email},
		callback: opts.callback
	});
}
