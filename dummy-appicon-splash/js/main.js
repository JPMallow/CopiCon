$(document).ready(function(){
    
    // ios App icon
    $('#all_ios_app_icon').on('click',function(){
        if(this.checked){
            $('.iOS_app_icon').each(function(){
                this.checked = true;
            });
        }else{
             $('.iOS_app_icon').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.iOS_app_icon').on('click',function(){
        if($('.iOS_app_icon:checked').length == $('.iOS_app_icon').length){
            $('#all_ios_app_icon').prop('checked',true);
        }else{
            $('#all_ios_app_icon').prop('checked',false);
        }
    });
    
    // ios splash
    
    $('#all_ios_splash').on('click',function(){
        if(this.checked){
            $('.iOS_splash').each(function(){
                this.checked = true;
            });
        }else{
             $('.iOS_splash').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.iOS_splash').on('click',function(){
        if($('.iOS_splash:checked').length == $('.iOS_splash').length){
            $('#all_ios_splash').prop('checked',true);
        }else{
            $('#all_ios_splash').prop('checked',false);
        }
    });
    
    // android App icon
    
    $('#all_android_app_icon').on('click',function(){
        if(this.checked){
            $('.android_app_icon').each(function(){
                this.checked = true;
            });
        }else{
             $('.android_app_icon').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.android_app_icon').on('click',function(){
        if($('.android_app_icon:checked').length == $('.iOS_app_icon').length){
            $('#all_android_app_icon').prop('checked',true);
        }else{
            $('#all_iandroid_app_icon').prop('checked',false);
        }
    });
    
    //  android splash
    
    $('#all_android_splash').on('click',function(){
        if(this.checked){
            $('.android_splash').each(function(){
                this.checked = true;
            });
        }else{
             $('.android_splash').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.android_splash').on('click',function(){
        if($('.android_splash:checked').length == $('.android_splash').length){
            $('#all_android_splash').prop('checked',true);
        }else{
            $('#all_android_splash').prop('checked',false);
        }
    
    });
    
});

var myPic = $("#get-image").val();


$.cloudinary.image(myPic, {transformation: [
  {width: 400},
  {opacity: 50, color: "#8b0f02", overlay: "text:helvetica_80_bold:Sea%20Shell", y: 20, gravity: "north"}
  ]})




