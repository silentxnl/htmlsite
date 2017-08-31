/**
 * @author 
 * @since 7/16/2017
 */
(function () {
    'use strict';

    angular
        .module('test')
        .controller('Controller', Controller);

    /* @ngInject */
    function Controller ($log) {
        var vm = this;
        vm.class = 'Controller';

        activate();

        //////////////

        function activate() {
            $log.debug('Activating ' + vm.class);
        }
    }
})();
