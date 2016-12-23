(function() {

	'use strict';

	function lunchCheckerController() {
		var vm = this;

		vm.check = check;

		function check() {
			if (vm.food !== undefined && vm.food !== "") {
				var word = vm.food.split(/[ ,]+/);
				if (word.length <= 3) {
					showMessage("Enjoy!");
				} else {
					showMessage("Too much!");
				}
			} else {

				showMessage("Please enter data first");
			}


		}

		function showMessage(message) {
			vm.message = message;
		}
	}

	angular
		.module("lunchChecker", [])
		.controller("lunchCheckerController", lunchCheckerController);

	lunchCheckerController.$inject = [];
})();