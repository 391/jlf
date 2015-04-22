'use strict';

// Configuring the Articles module
angular.module('programs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Programs', 'programs', 'dropdown', '/programs(/create)?');
		Menus.addSubMenuItem('topbar', 'programs', 'Programs', 'programs');
		}
]);