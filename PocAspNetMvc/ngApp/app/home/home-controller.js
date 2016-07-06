(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['HomeProject'];

    function HomeCtrl(HomeProject) {
        var vm = this;

        // Global Controller Variables
        vm.container = {};

        vm.container.defaultImage = '/images/upload-picture2.jpg';
        vm.container.userImg = {
            image: {
                resized: {
                    dataURL: vm.container.defaultImage
                }
            }
        };
        vm.container.imagesUploaded = false;

        // Controller Functions
        vm.container.validate = validate;
        vm.container.loadImage = loadImage;
        vm.container.validateImagen = validateImagen;
        vm.container.initCamera = initCamera;
        vm.container.takePicture = takePicture;
        vm.container.previewPhoto = previewPhoto;
        vm.container.savePicture = savePicture;

        // Main Function
        initialize();

        function initialize() {

        };

        function validate() {
            vm.container.imagesUploaded = vm.container.validateImagen(vm.container.userImg.image.resized.dataURL);

            if (vm.container.imagesUploaded) {
                vm.container.userImg.image.resized.dataURL = vm.container.loadImage('userPhoto');

                HomeProject.apply(vm.container.userImg).then(function (response) {
                    return response;
                })
                .catch(function () {
                    console.log('error Apply Passport');
                });
            }
        }

        function validateImagen(urlImg) {
            if (urlImg != vm.container.defaultImage) {
                return true;
            }

            return false;
        }

        function loadImage(img) {
            var imgSource = document.getElementById(img).src;
            return { Image: imgSource };
        }

        //-------------------------------------------Camera

        vm.container.cameraView = false;
        vm.container.photoTaken = { value: true };

        function initCamera() {
            vm.container.cameraView = true;
            Webcam.set({
                // live preview size
                width: 360,
                height: 270,

                // device capture sizel
                dest_width: 242,
                dest_height: 180,

                crop_width: 180,
                crop_height: 180,
                // format and quality
                image_format: 'jpeg',
                jpeg_quality: 90
            });

            Webcam.on('error', function (err) {
                vm.container.cameraView = false;
                alert(err);
                angular.element($('#my_camera')).scope().$apply();
            });

            Webcam.on('live', function () {
                vm.container.cameraView = true;
                angular.element($('#my_camera')).scope().$apply();
            });
            Webcam.attach('#my_camera');
        }

        function takePicture() {
            Webcam.snap(function (data_uri) {
                vm.container.cameraView = false;
                vm.container.userImg.image.resized.dataURL = data_uri;
                vm.container.userImg.image.dataURL = data_uri;
                vm.container.photoTaken.value = false;
            });
        }

        function savePicture(image) {
            //vm.container.savingPhotoSpinnerVisible = true;
            //var images = [];
            //images.push(image.dataURL);

            //var userContentRequest = {
            //    Title: '',
            //    Description: '',
            //    Description2: '',
            //    Description3: '',
            //    Description4: '',
            //    SiteId: siteId,
            //    YoutubeUrls: '',
            //    Type: 'Photo',
            //    PowerCode: '',
            //    Images: images,
            //    FontClass: '',
            //    ColorClass: '',
            //    UserContentInputId: userContentId,
            //    Promo: 'PromoCapsDuoGBA',
            //    Activity: 'PolinoCapsDuoLoadPhotos'
            //};

            //var apiController = "/umbraco/AuthorizatedApiController/UserContentApi/AddUserContentWithOneImage";

            //httpService.doPost(apiController, userContentRequest)
            //.then(function () {
            //    SendEventToGoogleAnalytics('PMP/JuegoGBA', 'FotoCargada');
            //    vm.container.errorAppeared = false;
            //    vm.container.isPhotoUploaded = true;
            //    vm.container.savingPhotoSpinnerVisible = false;
            //}, function () {
            //    vm.container.errorAppeared = true;
            //    vm.container.savingPhotoSpinnerVisible = false;
            //});

        }

        function previewPhoto() {
            var preview = document.getElementById('userPhoto');
            var file = document.getElementById('html5upload').files[0];
            var reader = new FileReader();

            reader.onloadend = function () {
                preview.src = reader.result;
            }

            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        }
    };

})();