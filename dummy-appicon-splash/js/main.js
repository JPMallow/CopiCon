function toggle(object, parent, child) {
    var chosen = true;
    if ($(object).hasClass('active')) {
        $(object).removeClass('active');
    } else {
        $(object).addClass('active');
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


function toggleAll(object, child) {
    if ($(object).hasClass('active')) {
        $(object).removeClass('active');
        $(child).removeClass('active');
    } else {
        $(object).addClass('active');
        $(child).addClass('active');
    }
}