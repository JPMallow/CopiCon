'use strict';

angular.module('dummyAppIconApp')

    .controller('DashboardCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
    
    	var iconHeight = 160;
    	var iconWidth = 160;
    	var iconText = "App icon comes here";
    	
    	var availableSizes = [
    	{"ios_icon_3x": {height: 180, width: 180}},
    	{"ios_icon_2x": {height: 120, width: 120}},
    	{"ipad_icon_1x": {height: 76, width: 76}},
    	{"ipad_icon_2x": {height: 152, width: 152}},
    	{"ipadpro_icon_2x": {height: 167, width: 167}},
    	{"iphone6+p_splash": {height: 1242, width: 2208}},
    	{"iphone6p_splash": {height: 750, width: 1334}},
    	{"iphone5p_splash": {height: 1136, width: 5640}},
    	{"iphone4sp_splash": {height: 640, width: 960}},
    	{"ipad1p_splash": {height: 1536, width: 2048}},
    	{"ipad2p_splash": {height: 768, width: 1024}},
    	{"ipadprop_splash": {height: 2048, width: 2732}},
    	{"iphone6+l_splash": {height: 2208, width: 1242}},
    	{"iphone6l_splash": {height: 1334, width: 750}},
    	{"iphone5l_splash": {height: 5640, width: 1136}},
    	{"iphone4sl_splash": {height: 960, width: 640}},
    	{"ipad1l_splash": {height: 2048, width: 1536}},
    	{"ipad2l_splash": {height: 1024, width: 768}},
    	{"ipadprol_splash": {height: 2732, width: 2048}},
    	];
    // 	
// //     	console.log(availableSizes);
//     	
//     	    var iOS = availableSizes.filter(function (i,n) {
// 							for (var key in i) {
// 								if (key == "ios_3x") {
// 									return true;
// 								}
// 							}					
// 		    		  });
// 		    console.log(iOS[0]);
		    
    	var updateAppIconPreview = function() {
    		var dataSource = "holder.js/" + iconHeight + "x" + iconWidth + "?text=" + iconText;    		
	    	var image = $("<img>").attr({
			    "data-src": dataSource
			})

			Holder.run({
			    images: image[0]
			});

			$("#app_icon_preview").replaceWith(image);
    	}
    	
        $('#apple').on('click', function() {
            if ($(this).attr('aria-pressed') === 'false') {
                $(".apple").removeAttr("disabled");
                $('.apple').addClass('active');
            } else {
                $(".apple").attr("disabled", "disabled");
                $('.apple').removeClass('active');
            }
            
			updateAppIconPreview();
        });
        
        $('#android').on('click', function() {
            if ($(this).attr('aria-pressed') === 'false') {
                $(".android").removeAttr("disabled");
                $('.android').addClass('active');
            } else {
                $(".android").attr("disabled", "disabled");
                $('.android').removeClass('active');
            }
        });
        
        function convertImgToBase64URL(url, callback, outputFormat) {
 		  	var img = new Image();
    		img.crossOrigin = 'Anonymous';
    		img.onload = function() {
      	  		var canvas = document.createElement('CANVAS'),
      	  		ctx = canvas.getContext('2d'), dataURL;
      			canvas.height = this.height;
      			canvas.width = this.width;
      			ctx.drawImage(this, 0, 0);
      			dataURL = canvas.toDataURL(outputFormat);
            	callback(dataURL, url);
      			canvas = null;
	    	};
    		img.src = url;
		}
		
		function createArchive(images) {
  			// Use jszip
  			var zip = new JSZip();
  			var img = zip.folder("images");
  			for (var i=0; i<images.length; i++) {
    			img.file(images[i].url, images[i].data, {base64: true});  
  			}
  			
  			zip.generateAsync({type:"blob"}).then(function (content) {
  				saveAs(content, "images.zip");
			});
			
		}

		$('#download').on("click",function() {
			var convertedImages = [];
			var counter = 0;
			
			for (var loop in availableSizes) {
				var json = availableSizes[loop];
				var model;
				
				for (var key in json) {
					model = key;
				}
				
				var sizes = json[model];
				
				var dataSource = "holder.js/" + sizes.height + "x" + sizes.width + "?text=" + iconText;    		
	    		var image = $("<img>").attr({
			    	"data-src": dataSource
				})

				Holder.run({
			    	images: image[0]
				});
				
				console.log(image.src);
				convertImgToBase64URL("http://i.imgur.com/pWAXcbp.png", function (base64Img, url) {
    				convertedImages.push({
      					url: url,
      					data: base64Img
    				});
    				counter++;
    				if (counter == 2) {
    					console.log("Archive");
      					createArchive(convertedImages);
    				}				
  				});
			}
		});
		
        $("#inputIcon")
            .keyup(function() {
                var value = $(this).val();
                $(".text-disp").text(value);
            })

        $("#inputCaptionIcon")
            .keyup(function() {
                var value = $(this).val();
                $(".caption-icon").text(value);
            })
        $("#inputCaptionSplash")
            .keyup(function() {
                var value = $(this).val();
                $(".caption-splash").text(value);
            })
            .keyup();

        $scope.toggle = function(object, parent, child) {
            var chosen = true;
            if ($(object.toElement).hasClass('active')) {
                $(object.toElement).removeClass('active');
            } else {
                $(object.toElement).addClass('active');
            }

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
            if ($(object.toElement).hasClass('active')) {
                $(object.toElement).removeClass('active');
                $(child).removeClass('active');
            } else {
                $(object.toElement).addClass('active');
                $(child).addClass('active');
            }
        }
    }]);