'use strict';

void function (main) {
	return document.readyState !== 'loading'
		? main()
		: document.addEventListener('DOMContentLoaded', main);
}(function () {
	var data_checkbox = document.getElementById('data');
	var member_checkbox = document.getElementById('member');
	var checkboxes = [data_checkbox, member_checkbox];
	function checkbox_change(event) {
		if (this.checked)
			for (var i = 0; i < checkboxes.length; ++i)
				if (checkboxes[i] !== this)
					checkboxes[i].checked = false;
	}
	for (var i = 0; i < checkboxes.length; ++i)
		checkboxes[i].addEventListener('change', checkbox_change);
});