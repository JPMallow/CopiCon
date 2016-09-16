'use strict';

angular.module('dummyAppIconApp')

    .controller('DashboardCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
        $('#apple').on('click', function() {
            if ($(this).attr('aria-pressed') === 'false') {
                $(".apple").removeAttr("disabled");
                $('.apple').addClass('active');
            } else {
                $(".apple").attr("disabled", "disabled");
                $('.apple').removeClass('active');
            }
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