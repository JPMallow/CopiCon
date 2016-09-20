'use strict';

angular.module('dummyAppIconApp')

.controller('DashboardCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

/* Declarations */

    var iconHeight = 160;
    var iconWidth = 160;
    var splashHeight = 480;
    var splashWidth = 320;
    var appName = "App";
    var iconCaption = "icon comes here";
    var splashCaption = "splash comes here";

    var availableSizes = [{
        "ios_3x_icon": {
            height: 180,
            width: 180,
            selected: false
        }
    }, {
        "ios_2x_icon": {
            height: 120,
            width: 120,
            selected: false
        }
    }, {
        "ipad_1x_icon": {
            height: 76,
            width: 76,
            selected: false
        }
    }, {
        "ipad_2x_icon": {
            height: 152,
            width: 152,
            selected: false
        }
    }, {
        "ipadpro_2x_icon": {
            height: 167,
            width: 167,
            selected: false
        }
    }, {
        "iphone6+p_splash": {
            height: 1242,
            width: 2208,
            selected: false
        }
    }, {
        "iphone6p_splash": {
            height: 750,
            width: 1334,
            selected: false
        }
    }, {
        "iphone5p_splash": {
            height: 1136,
            width: 640,
            selected: false
        }
    }, {
        "iphone4sp_splash": {
            height: 640,
            width: 960,
            selected: false
        }
    }, {
        "ipad1p_splash": {
            height: 1536,
            width: 2048,
            selected: false
        }
    }, {
        "ipad2p_splash": {
            height: 768,
            width: 1024,
            selected: false
        }
    }, {
        "ipadprop_splash": {
            height: 2048,
            width: 2732,
            selected: false
        }
    }, {
        "iphone6+l_splash": {
            height: 2208,
            width: 1242,
            selected: false
        }
    }, {
        "iphone6l_splash": {
            height: 1334,
            width: 750,
            selected: false
        }
    }, {
        "iphone5l_splash": {
            height: 640,
            width: 1136,
            selected: false
        }
    }, {
        "iphone4sl_splash": {
            height: 960,
            width: 640,
            selected: false
        }
    }, {
        "ipad1l_splash": {
            height: 2048,
            width: 1536,
            selected: false
        }
    }, {
        "ipad2l_splash": {
            height: 1024,
            width: 768,
            selected: false
        }
    }, {
        "ipadprol_splash": {
            height: 2732,
            width: 2048,
            selected: false
        }
    }, {
        "android_idpi_icon": {
            height: 36,
            width: 36,
            selected: false
        }
    }, {
        "android_mdpi_icon": {
            height: 48,
            width: 48,
            selected: false
        }
    }, {
        "android_xhdpi_icon": {
            height: 96,
            width: 96,
            selected: false
        }
    }, {
        "android_xxhdpi_icon": {
            height: 144,
            width: 144,
            selected: false
        }
    }, {
        "android_xxxhdpi_icon": {
            height: 192,
            width: 192,
            selected: false
        }
    }, {
        "android_xlargep_splash": {
            height: 720,
            width: 960,
            selected: false
        }
    }, {
        "android_largerp_splash": {
            height: 480,
            width: 640,
            selected: false
        }
    }, {
        "android_normalp_splash": {
            height: 320,
            width: 470,
            selected: false
        }
    }, {
        "android_smallp_splash": {
            height: 320,
            width: 426,
            selected: false
        }
    }, {
        "android_xlargel_splash": {
            height: 960,
            width: 720,
            selected: false
        }
    }, {
        "android_largerl_splash": {
            height: 640,
            width: 480,
            selected: false
        }
    }, {
        "android_normall_splash": {
            height: 470,
            width: 320,
            selected: false
        }
    }, {
        "android_smalll_splash": {
            height: 426,
            width: 320,
            selected: false
        }
    }, ];

/* Custom helper methods */

    function convertImgToBase64URL(url, model, callback, outputFormat) {
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
            callback(dataURL, model);
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
            img.file(images[i].model + ".png", base64Data, {
                base64: true
            });
        }
        zip.generateAsync({
            type: "blob"
        }).then(function(content) {
            saveAs(content, "images.zip");
        });

    }
    
    var updatePreview = function() {

        /* Icon prview */
        var iconText = "";
        if (appName.length > 0 || iconCaption.length > 0) {
            iconText = "&text=" + appName + " \\n " + iconCaption;
        }

        var dataSource = "holder.js/" + iconHeight + "x" + iconWidth + "?bg=#fff&fg=#D3D3D3&outline=yes" + iconText;
        var image = $("<img>").attr({
            "data-src": dataSource,
            "id": "app_icon_preview"
        })

        Holder.run({
            images: image[0]
        });

        $("#app_icon_preview").replaceWith(image);


        /* Splash prview */
        var splashText = "";
        if (appName.length > 0 || splashCaption.length > 0) {
            splashText = "&text=" + appName + " \\n " + splashCaption;
        }

        var splashDataSource = "holder.js/" + splashWidth + "x" + splashHeight + "?bg=#fff&fg=#D3D3D3&outline=yes" + splashText;
        var splashImage = $("<img>").attr({
            "data-src": splashDataSource,
            "id": "app_splash_preview"
        })

        Holder.run({
            images: splashImage[0]
        });

        $("#app_splash_preview").replaceWith(splashImage);

    }

    var updateSelectedPlatforms = function(platform, selected) {
        for (var loop in availableSizes) {
            var json = availableSizes[loop];
            var model;

            for (var key in json) {
                model = key;
            }

            if (model.startsWith(platform)) {
                var sizes = json[model];
                sizes.selected = selected;
            }
        }
    }

    var updateSelectedItem = function(keys, selected) {
        for (var loop in availableSizes) {
            var json = availableSizes[loop];
            var model;

            for (var key in json) {
                model = key;
            }

            var found = $.inArray(model, keys) > -1;

            if (found) {
                var sizes = json[model];
                sizes.selected = selected;
            }
        }
    }

/* Listener methods */

    $('#apple').on('click', function() {
        var selected = false;

        if ($(this).attr('aria-pressed') === 'false') {
            $(".apple").removeAttr("disabled");
            $('.apple').addClass('active');
            selected = true;
        } else {
            $(".apple").attr("disabled", "disabled");
            $('.apple').removeClass('active');
        }

        updateSelectedPlatforms("i", selected);

    });

    $('#android').on('click', function() {
        var selected = false;

        if ($(this).attr('aria-pressed') === 'false') {
            $(".android").removeAttr("disabled");
            $('.android').addClass('active');
            selected = true;

        } else {
            $(".android").attr("disabled", "disabled");
            $('.android').removeClass('active');
        }
        updateSelectedPlatforms("a", selected);
    });

    $('#download').on("click", function() {
        var convertedImages = [];
        var counter = 0;
        var selectedCount = 0;

        for (var loop in availableSizes) {
            var json = availableSizes[loop];
            var model;

            for (var key in json) {
                model = key;
            }

            var sizes = json[model];


            if (sizes.selected == true) {
                selectedCount++;

                var caption = model.endsWith("icon") ? iconCaption : splashCaption;
                var text = "";

                if ($("#inputIcon").val().length > 0 || caption.length > 0) {
                    text = "&text=" + appName + " \\n " + caption
                }

                var dataSource = "holder.js/" + sizes.height + "x" + sizes.width + "?bg=#fff&fg=#D3D3D3&outline=yes" + text;
                var image = $("<img>").attr({
                    "data-src": dataSource
                })

                Holder.run({
                    images: image[0]
                });

                convertImgToBase64URL(image[0].src, model, function(base64Img, model) {
                    convertedImages.push({
                        model: model,
                        data: base64Img
                    });
                    counter++;
                    if (counter == selectedCount) {
                        createArchive(convertedImages);
                    }
                });
            }
        }
    });

    $('#inputIcon').on('input', function(e) {
        appName = $(this).val();
        updatePreview();
    });
    $('#inputCaptionIcon').on('input', function(e) {
        iconCaption = $(this).val();
        updatePreview();
    });
    $('#inputCaptionSplash').on('input', function(e) {
        splashCaption = $(this).val();
        updatePreview();
    });

    $scope.toggle = function(object, parent, child) {
        var chosen = true;
        var selected = false;

        if ($(object.toElement).hasClass('active')) {
            $(object.toElement).removeClass('active');
        } else {
            $(object.toElement).addClass('active');
            selected = true;
        }

        updateSelectedItem([object.toElement.id], selected);

        $(child).each(function() {
            if ($(this).hasClass('active')) {} else {
                chosen = false;
            }
        });
        if (chosen === true) {
            $(parent).addClass('active');
        } else {
            $(parent).removeClass('active');
        }
    }

    $scope.toggleAll = function(object, child) {
        var keys;
        if (child == ".apple-icon") {
            keys = ["ios_3x_icon", "ios_2x_icon", "ipad_1x_icon", "ipad_2x_icon", "ipadpro_2x_icon"];
        } else if (child == ".apple-splash") {
            keys = ["iphone6+p_splash", "iphone6p_splash", "iphone5p_splash", "iphone4sp_splash", "ipad1p_splash", "ipad2p_splash", "ipadprop_splash", "iphone6+l_splash", "iphone6l_splash", "iphone5l_splash", "iphone4sl_splash", "ipad1l_splash", "ipad2l_splash", "ipadprol_splash"];
        } else if (child == ".android-icon") {
            keys = ["android_idpi_icon", "android_mdpi_icon", "android_xhdpi_icon", "android_xxhdpi_icon", "android_xxxhdpi_icon"];
        } else {
            keys = ["android_xlargep_splash", "android_largerp_splash", "android_normalp_splash", "android_smallp_splash", "android_xlargel_splash", "android_largerl_splash", "android_normall_splash", "android_smalll_splash"];
        }

        var selected = false;
        if ($(object.toElement).hasClass('active')) {
            $(object.toElement).removeClass('active');
            $(child).removeClass('active');
        } else {
            $(object.toElement).addClass('active');
            $(child).addClass('active');
            selected = true;
        }
        updateSelectedItem(keys, selected);
    }
}]);