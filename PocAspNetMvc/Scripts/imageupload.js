angular.module('imageupload', []).directive('image', function($q) {
    'use strict'

    var URL = window.URL || window.webkitURL;
    var getResizeArea = function () {
        var resizeAreaId = 'fileupload-resize-area';

        var resizeArea = document.getElementById(resizeAreaId);

        if (!resizeArea) {
            resizeArea = document.createElement('canvas');
            resizeArea.id = resizeAreaId;
            resizeArea.style.visibility = 'hidden';
            document.body.appendChild(resizeArea);
        }

        return resizeArea;
    }

    var resizeImage = function (origImage, options, type) {
        var maxHeight = options.resizeMaxHeight || 300;
        var maxWidth = options.resizeMaxWidth || 250;
        var quality = options.resizeQuality || 0.7;
        var type = options.resizeType || type;

        var canvas = getResizeArea();

        var height = origImage.height;
        var width = origImage.width;

        if (width > height) {
            if (width > maxWidth) {
                height = Math.round(height *= maxWidth / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round(width *= maxHeight / height);
                height = maxHeight;
            }
        }

        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(origImage, 0, 0, width, height);

        return canvas.toDataURL(type, quality);
    };

    var createImage = function(url, callback) {
        var image = new Image();
        image.onload = function() {
            callback(image);
        };

        image.src = url;
    };

    var fileToDataURL = function (file) {
        var deferred = $q.defer();
        var reader = new FileReader();
        reader.onload = function (e) {
            deferred.resolve(e.target.result);
        };

        reader.readAsDataURL(file);
        return deferred.promise;
    };

    return {
        restrict: 'A',
        scope: {
            image: '=',
            resizeMaxHeight: '@?',
            resizeMaxWidth: '@?',
            resizeQuality: '@?',
            resizeType: '@?',
            maxSize: '@?',
            allowedExtensions: '@?',
            gaOnclickCategory: '@?',
            gaOnclickEvent: '@?'
            
        },
        link: function postLink(scope, element, attrs, ctrl) {
            var capaOpaca = $("#capa-opaca");

            var doResizing = function(imageResult, callback) {
                var type = imageResult.type;
                createImage(imageResult.url, function (image) {
                    var dataURL = resizeImage(image, scope, type);
                    imageResult.resized = {
                        dataURL: dataURL,
                        type: dataURL.match(/:(.+\/.+);/)[1],
                    };

                    imageResult.deleteImg = function (img) {
                        var index = scope.image.indexOf(img);
                        scope.image.splice(index, 1);
                    };

                    callback(imageResult);
                });
            };

            var applyScope = function(imageResult) {
                scope.$apply(function() {
                    if (attrs.multiple) {
                        scope.image.push(imageResult);
                    } else {
                        scope.image = imageResult;
                    }
                });

                $('#fileupload-resize-area').remove();
            };

            element.bind('change', function (evt) {
                if ($("#inputImage").val() != "") {
                    capaOpaca.show();
                }

                if (attrs.multiple) {
                    if (!scope.image) {//crea el array si no existe
                        scope.image = [];
                    }
                }


                var files = evt.target.files;

                if (scope.image && files.length + scope.image.length > 3) {
                    alert('No puedes subir m\u00E1s de 3 im\u00E1genes');
                    capaOpaca.hide();
                    return false;
                }

                //for (var i = 0; i < files.length; i++) {
                angular.forEach(files, function (aFile, k) {
                    var fileType = aFile.name.split('.').pop(),
                        allowedtypes = !scope.allowedExtensions ? 'JPG,jpeg,jpg,png,gif' : scope.allowedExtensions,
                        maxSize = !scope.maxSize ? 2097152 : scope.maxSize.split('|')[0],
                        maxSizeText = !scope.maxSize ? '2 MB' : scope.maxSize.split('|')[1];


                    if (allowedtypes.indexOf(fileType) < 0) {
                        capaOpaca.hide();
                        alert('LA IMAGEN DEBE SER  JPG, GIF O PNG. VOLVÉ A INTENTARLO');
                        $(window).trigger("okbuttonclicked");
                        return false;
                    }

                    if (aFile['size'] > maxSize) {
                        capaOpaca.hide();
                        alert('LA IMAGEN DEBE SER MENOR A ' + maxSizeText + '. VOLVÉ A INTENTARLO');
                        $(window).trigger("okbuttonclicked");
                        return false;
                    }

                    var imageResult = {
                        file: aFile,
                        url: URL.createObjectURL(aFile),
                        type: aFile.type
                    };

                    fileToDataURL(aFile).then(function (dataURL) {
                        imageResult.dataURL = dataURL;
                    });

                    if (scope.resizeMaxHeight || scope.resizeMaxWidth) { //resize image
                        doResizing(imageResult, function (imageResult) {
                            capaOpaca.hide();
                            applyScope(imageResult);
                        });
                    } else { //no resizing
                        applyScope(imageResult);
                    }
                });

                //se elimina el valor del image input para poder seleccionar neuvamente la misma imagen
                $("#inputImage").val("");
            });

            element.bind('click', function (evt) {
                if (typeof (SendEventToGoogleAnalytics) != 'undefined' && typeof (scope.gaOnclickCategory) != 'undefined' && typeof (scope.gaOnclickEvent) != 'undefined') {
                    SendEventToGoogleAnalytics(scope.gaOnclickCategory, scope.gaOnclickEvent);
                }                
            });
        }
    };
});