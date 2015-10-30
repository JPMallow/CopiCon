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
    // Apple Splash 
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
     
    // Android Icon
     $('#all_droid_icon').on('click',function(){
        if(this.checked){
            $('.droid_icon').each(function(){
                this.checked = true;
            });
        }else{
             $('.droid_icon').each(function(){
                this.checked = false;
            });
        }
    });
    $('.droid_icon').on('click',function(){
        if($('.droid_splash:checked').length == $('.droid_icon').length){
            $('#all_droid_icon').prop('checked',true);
        }else{
            $('#all_droid_icon').prop('checked',false);
        }
    });
    
    // Android Splash 
    $('#all_droid_splash').on('click',function(){
        if(this.checked){
            $('.droid_splash').each(function(){
                this.checked = true;
            });
        }else{
             $('.droid_splash').each(function(){
                this.checked = false;
            });
        }
    });
    $('.droid_splash').on('click',function(){
        if($('.droid_splash:checked').length == $('.droid_splash').length){
            $('#all_droid_splash').prop('checked',true);
        }else{
            $('#all_droid_splash').prop('checked',false);
        }
    });
    
});
    