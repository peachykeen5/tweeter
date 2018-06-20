$(document).ready(function () {
    $('section.new-tweet textarea').keyup(charCount);

//Function to count the characters entered in the text area -- max allowed is 140.
    function charCount() {
        var remaining = 140 - $(this).val().length;
        $(this).parent().find('.counter').html(remaining);
        if (remaining < 0) {
            $(this).parent().find('.counter').addClass('red');
            //alert('Tweet is too long');
        } else {
            $(this).parent().find('.counter').removeClass("red")
        }
    };
});


// $(document).ready(function () {
//     $('section.new-tweet textarea').keyup(function(event) {
//         var remaining = 140 - event.target.value;
//         $(this).parent().find('.counter').html(remaining);
//         if (remaining < 0) {
//             $(this).parent().find('.counter').addClass('red');
//             //alert('Tweet is too long');
//         } else {
//             $(this).parent().find('.counter').removeClass("red")
//         }
//     });
//     // charCount(event));
      
// });