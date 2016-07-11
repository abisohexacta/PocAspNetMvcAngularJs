//'use strict';
//angular
//  .module('app')
//  .run(runBlock);

//runBlock.$inject = ['bootstrap3ElementModifier', 'validator'];

//function runBlock(bootstrap3ElementModifier, validator) {
//    bootstrap3ElementModifier.enableValidationStateIcons(false);
//    validator.setValidElementStyling(true);
//    validator.setInvalidElementStyling(true);
//    // Stop default click action from mouse wheel
//    $(document).mousedown(function (e) {
//        if (e.which == 2) {
//            e.preventDefault();
//        }
//    });
//}

//angular.module('jcs-autoValidate')
//  .run(autoValidateBlock);

//autoValidateBlock.$inject = ['defaultErrorMessageResolver'];

//function autoValidateBlock(defaultErrorMessageResolver) {
//    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
//        /* jshint validthis: true */
//        errorMessages['autocomplete-required'] = 'This field is required';
//    });
//}