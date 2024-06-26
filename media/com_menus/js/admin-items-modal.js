/**
 * @copyright  (C) 2017 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
(function () {
	"use strict";
	/**
	 * Javascript to insert the link
	 * View element calls jSelectContact when a contact is clicked
	 * jSelectContact creates the link tag, sends it to the editor,
	 * and closes the select frame.
	 */

	window.jSelectMenuItem = function (id, title, uri, object, link, lang) {
		var thislang = '', tag, editor;

		if (!Joomla.getOptions('xtd-menus')) {
			// Something went wrong!
			window.parent.jModalClose();
			return false;
		}

		editor = Joomla.getOptions('xtd-menus').editor;

		if (lang !== '') {
			thislang = '&lang=';
		}

		tag = '<a href=\"' + uri + thislang + lang + '">' + title + '</a>';

		/** Use the API, if editor supports it **/
		if (window.parent.Joomla && window.parent.Joomla.editors && window.parent.Joomla.editors.instances && window.parent.Joomla.editors.instances.hasOwnProperty(editor)) {
			if (typeof window.parent.Joomla.editors.instances[editor]['getSelection'] !== 'undefined' && window.parent.Joomla.editors.instances[editor].getSelection()) {
				window.parent.Joomla.editors.instances[editor].replaceSelection('<a href=\"' + uri + thislang + lang + '">' + window.parent.Joomla.editors.instances[editor].getSelection() + '</a>');
			} else {
				window.parent.Joomla.editors.instances[editor].replaceSelection(tag)
			}
		} else {
			window.parent.jInsertEditorText(tag, editor);
		}

		window.parent.jModalClose();
	};

	document.addEventListener('DOMContentLoaded', function () {
		// Get the elements
		var elements = document.querySelectorAll('.select-link');

		for (var i = 0, l = elements.length; l > i; i++) {
			// Listen for click event
			elements[i].addEventListener('click', function (event) {
				event.preventDefault();
				var functionName = event.target.getAttribute('data-function');

				if (functionName === 'jSelectMenuItem') {
					// Used in xtd_contacts
					window[functionName](event.target.getAttribute('data-id'), event.target.getAttribute('data-title'), event.target.getAttribute('data-uri'), null, null, event.target.getAttribute('data-language'));
				} else {
					// Used in com_menus
					window.parent[functionName](event.target.getAttribute('data-id'), event.target.getAttribute('data-title'), null, null, event.target.getAttribute('data-uri'), event.target.getAttribute('data-language'), null);
				}
			})
		}
	});
})();
