'use strict';

angular.module('dummyAppIconApp')

.controller('DashboardCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

    /* Declarations */

    var fontName = "Helvetica";
    var fontWeight = "normal";
    var backgroundColor = "#fff";
    var foregroundColor = "#00AEEF";

    var iconHeight = 160;
    var iconWidth = 160;
    var splashHeight = 480;
    var splashWidth = 320;
    var iOSIcons = ["ios_3x_icon", "ios_2x_icon", "ipad_1x_icon", "ipad_2x_icon", "ipadpro_2x_icon", "ios_store_icon"];
    var iOSSplash = ["iphonexp_splash", "iphone6plusp_splash", "iphone6p_splash", "iphone5p_splash", "iphone4sp_splash", "ipad1p_splash", "ipad2p_splash", "ipadprop_splash", "iphonexl_splash", "iphone6plusl_splash", "iphone6l_splash", "iphone5l_splash", "iphone4sl_splash", "ipad1l_splash", "ipad2l_splash", "ipadprol_splash"];
    var androidIcons = ["android_idpi_icon", "android_mdpi_icon", "android_xhdpi_icon", "android_xxhdpi_icon", "android_xxxhdpi_icon"];
    var androidSplash = ["android_xlargep_splash", "android_largerp_splash", "android_normalp_splash", "android_smallp_splash", "android_xlargel_splash", "android_largerl_splash", "android_normall_splash", "android_smalll_splash"];

    $scope.appName = "";
    $scope.isAppleButtonClicked = false;
    $scope.isAndroidButtonClicked = false;
    $scope.alliOSIconSelected = false;
    $scope.alliOSSplashSelected = false;
    $scope.allAndroidIconSelected = false;
    $scope.allAndroidSplashSelected = false;

    $scope.availableSizes = {
        ios_3x_icon: {
            height: 180,
            width: 180,
            size: 17,
            selected: false
        },
        ios_2x_icon: {
            height: 120,
            width: 120,
            size: 12,
            selected: false
        },
        ipad_1x_icon: {
            height: 76,
            width: 76,
            size: 7,
            selected: false
        },
        ipad_2x_icon: {
            height: 152,
            width: 152,
            size: 15,
            selected: false
        },
        ipadpro_2x_icon: {
            height: 167,
            width: 167,
            size: 16,
            selected: false
        },
        ios_store_icon: {
            height: 1024,
            width: 1024,
            size: 60,
            selected: false
        },
        iphonexp_splash: {
            height: 1125,
            width: 2436,
            size: 60,
            selected: false
        },
        iphone6plusp_splash: {
            height: 1242,
            width: 2208,
            size: 60,
            selected: false
        },
        iphone6p_splash: {
            height: 750,
            width: 1334,
            size: 36,
            selected: false
        },
        iphone5p_splash: {
            height: 1136,
            width: 640,
            size: 31,
            selected: false
        },
        iphone4sp_splash: {
            height: 640,
            width: 960,
            size: 31,
            selected: false
        },
        ipad1p_splash: {
            height: 1536,
            width: 2048,
            size: 37,
            selected: false
        },
        ipad2p_splash: {
            height: 768,
            width: 1024,
            size: 74,
            selected: false
        },
        ipadprop_splash: {
            height: 2048,
            width: 2732,
            size: 99,
            selected: false
        },
        iphonexl_splash: {
            height: 2436,
            width: 1125,
            size: 60,
            selected: false
        },
        iphone6plusl_splash: {
            height: 2208,
            width: 1242,
            size: 60,
            selected: false
        },
        iphone6l_splash: {
            height: 1334,
            width: 750,
            size: 36,
            selected: false
        },
        iphone5l_splash: {
            height: 640,
            width: 1136,
            size: 31,
            selected: false
        },
        iphone4sl_splash: {
            height: 960,
            width: 640,
            size: 31,
            selected: false
        },
        ipad1l_splash: {
            height: 2048,
            width: 1536,
            size: 37,
            selected: false
        },
        ipad2l_splash: {
            height: 1024,
            width: 768,
            size: 74,
            selected: false
        },
        ipadprol_splash: {
            height: 2732,
            width: 2048,
            size: 99,
            selected: false
        },
        android_idpi_icon: {
            height: 36,
            width: 36,
            size: 3,
            selected: false
        },
        android_mdpi_icon: {
            height: 48,
            width: 48,
            size: 5,
            selected: false
        },
        android_xhdpi_icon: {
            height: 96,
            width: 96,
            size: 9,
            selected: false
        },
        android_xxhdpi_icon: {
            height: 144,
            width: 144,
            size: 14,
            selected: false
        },
        android_xxxhdpi_icon: {
            height: 192,
            width: 192,
            size: 19,
            selected: false
        },
        android_xlargep_splash: {
            height: 720,
            width: 960,
            size: 35,
            selected: false
        },
        android_largerp_splash: {
            height: 480,
            width: 640,
            size: 23,
            selected: false
        },
        android_normalp_splash: {
            height: 320,
            width: 470,
            size: 15,
            selected: false
        },
        android_smallp_splash: {
            height: 320,
            width: 426,
            size: 15,
            selected: false
        },
        android_xlargel_splash: {
            height: 960,
            width: 720,
            size: 35,
            selected: false
        },
        android_largerl_splash: {
            height: 640,
            width: 480,
            size: 23,
            selected: false
        },
        android_normall_splash: {
            height: 470,
            width: 320,
            size: 15,
            selected: false
        },
        android_smalll_splash: {
            height: 426,
            width: 320,
            size: 15,
            selected: false
        }
    }

    /* Holde JS configuration */

    Holder.run({
        themes: {
            "simple": {
                bg: backgroundColor,
                fg: foregroundColor,
                font: fontName,
                fontweight: fontWeight,
            }
        },
        images: "#app_icon_preview"
    });

    Holder.run({
        themes: {
            "simple": {
                bg: backgroundColor,
                fg: foregroundColor,
                font: fontName,
                fontweight: fontWeight,
            }
        },
        images: "#app_splash_preview"
    });

    /* Custom helper methods */

    function convertImgToBase64URL(url, key, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL, key);
            canvas = null;
        };
        img.src = url;
    }

    function createArchive(images) {
        // Use jszip
        var zip = new JSZip();
        var img = zip.folder("images");
        for (var i = 0; i < images.length; i++) {
            var base64Data = images[i].data.replace(/^data:image\/png;base64,/, "")
            img.file(images[i].key + ".png", base64Data, {
                base64: true
            });
        }
        zip.generateAsync({
            type: "blob"
        }).then(function(content) {
            saveAs(content, "images.zip");
        });

    }

    $scope.updatePreview = function() {

        /* Icon prview */
        var dataSource = "holder.js/" + iconHeight + "x" + iconWidth + "?theme=simple&outline=yes&text=" + $scope.appName;
        var image = $("<img>").attr({
            "data-src": dataSource,
            "id": "app_icon_preview"
        })

        Holder.run({
            themes: {
                "simple": {
                    bg: backgroundColor,
                    fg: foregroundColor,
                    font: fontName,
                    fontweight: fontWeight,
                }
            },
            images: image[0]
        });

        $("#app_icon_preview").replaceWith(image);

        /* Splash preview */
        var splashDataSource = "holder.js/" + splashWidth + "x" + splashHeight + "?theme=simple&outline=yes&text=" + $scope.appName;
        var splashImage = $("<img>").attr({
            "data-src": splashDataSource,
            "id": "app_splash_preview"
        })

        Holder.run({
            themes: {
                "simple": {
                    bg: backgroundColor,
                    fg: foregroundColor,
                    font: fontName,
                    fontweight: fontWeight,
                }
            },
            images: splashImage[0]
        });

        $("#app_splash_preview").replaceWith(splashImage);

    }

    var updateSelectedPlatforms = function(platform, selected) {
        for (var key in $scope.availableSizes) {
            var json = $scope.availableSizes[key];
            if (key.startsWith(platform)) {
                json.selected = selected;
            }
        }
    }

    var updateSelectedItem = function(keys, selected) {
        for (var key in $scope.availableSizes) {
            var found = $.inArray(key, keys) > -1;
            if (found) {
                var json = $scope.availableSizes[key];
                json.selected = selected;
            }
        }
    }

    var isAllSelected = function(keys) {
        var allSelected = true;
        for (var key in $scope.availableSizes) {
            var found = $.inArray(key, keys) > -1;
            if (found && $scope.availableSizes[key].selected == false) {
                allSelected = false;
                break;
            }
        }

        return allSelected;
    }


    /* Listener methods */

    $scope.appleButtonClicked = function() {
        $scope.isAppleButtonClicked = !$scope.isAppleButtonClicked;

        $scope.alliOSIconSelected = $scope.isAppleButtonClicked;
        $scope.alliOSSplashSelected = $scope.isAppleButtonClicked;

        updateSelectedPlatforms("i", $scope.isAppleButtonClicked);
    }

    $scope.androidButtonClicked = function() {
        $scope.isAndroidButtonClicked = !$scope.isAndroidButtonClicked;

        $scope.allAndroidIconSelected = $scope.isAndroidButtonClicked;
        $scope.allAndroidSplashSelected = $scope.isAndroidButtonClicked;

        updateSelectedPlatforms("a", $scope.isAndroidButtonClicked);
    }

    $scope.downloadButtonClicked = function() {
        var convertedImages = [];
        var counter = 0;
        var selectedCount = 0;

        for (var key in $scope.availableSizes) {
            var sizes = $scope.availableSizes[key];

            if (sizes.selected == true) {
                selectedCount++;

                var dataSource = "holder.js/" + sizes.height + "x" + sizes.width + "?theme=simple&outline=yes&text=" + ($scope.appName.length > 0 ? $scope.appName : "App name");
                var image = $("<img>").attr({
                    "data-src": dataSource
                })

                Holder.run({
                    themes: {
                        "simple": {
                            bg: backgroundColor,
                            fg: foregroundColor,
                            font: fontName,
                            fontweight: fontWeight,
                            size: sizes.size
                        }
                    },
                    images: image[0]
                });

                convertImgToBase64URL(image[0].src, key, function(base64Img, key) {
                    convertedImages.push({
                        key: key,
                        data: base64Img
                    });
                    counter++;
                    if (counter == selectedCount) {
                        createArchive(convertedImages);
                    }
                });
            }
        }
    }

    $scope.toggle = function(object, parent, child) {
        var json = $scope.availableSizes[object.toElement.id];

        console.log(json);

        if (json != undefined) {
            updateSelectedItem([object.toElement.id], !json.selected);

            var button = angular.element(object.toElement);
            if (button.hasClass('apple-icon')) {
                $scope.alliOSIconSelected = isAllSelected(iOSIcons);
            } else if (button.hasClass('apple-splash')) {
                $scope.alliOSSplashSelected = isAllSelected(iOSSplash);
            } else if (button.hasClass('android-icon')) {
                $scope.allAndroidIconSelected = isAllSelected(androidIcons);
            } else {
                $scope.allAndroidSplashSelected = isAllSelected(androidSplash);
            }
        }
    }

    $scope.toggleAll = function(object, child) {
        var keys;
        var selected = false;

        if (child == ".apple-icon") {
            keys = iOSIcons;
            $scope.alliOSIconSelected = selected = !$scope.alliOSIconSelected;
        } else if (child == ".apple-splash") {
            keys = iOSSplash;
            $scope.alliOSSplashSelected = selected = !$scope.alliOSSplashSelected;
        } else if (child == ".android-icon") {
            keys = androidIcons;
            $scope.allAndroidIconSelected = selected = !$scope.allAndroidIconSelected;
        } else {
            keys = androidSplash;
            $scope.allAndroidSplashSelected = selected = !$scope.allAndroidSplashSelected;
        }

        updateSelectedItem(keys, selected);
    }
}]);