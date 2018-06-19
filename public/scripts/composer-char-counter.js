$(document).ready(function () {
    //charCount();
   $('section.new-tweet textarea').change(charCount);
   $('section.new-tweet textarea').keyup(charCount);
});

function charCount() {
    var remaining = 140 - $(this).val().length;
    $(this).parent().find('.counter').html(remaining);
    if (remaining < 0) {
        $(this).parent().find('.counter').addClass('red');
     } else {
        $(this).parent().find('.counter').removeClass("red")
     }
    console.log(this);
}; 