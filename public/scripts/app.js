$(document).ready(function () {
    loadTweets();

//rendering a new tweet and prepending it to the top of the section//
    function renderTweet(tweets) {
        $('#tweet-container').empty()
        tweets.forEach(function(element) {
            let $tweet = createTweetElement(element);
            $('#tweet-container').prepend($tweet);
        })
    };

    //this function creates the structure of the tweet and sends it to be rendered
    function createTweetElement(tweet) {
        let $tweet = $('<article>').addClass('tweeter');
        let image = $('<img>').attr('src', tweet.user.avatars.small).addClass('profile'); 
        let handle = $('<span>').text(tweet.user.handle).addClass('handle')
        let userName = $('<h2>').text(tweet.user.name).append(handle);
        let $header = $('<header>').addClass('tweet');
        $header.append(image, userName); //adds the image, handle, and username to the header
        let $tweetBody = $('<p>').text(tweet.content.text);
        let iconSpan = $('<span>').addClass('icons');
        let icon1 = $('<i>').addClass("fas fa-flag");
        let icon2 = $('<i>').addClass("fas fa-retweet");
        let icon3 = $('<i>').addClass("fas fa-heart");
        iconSpan.append(icon1, icon2, icon3);
        let date = new Date(tweet.created_at)
        let $footer = $('<footer>').append(today - date.toLocaleDateString()), iconSpan);
        $tweet.append($header, $tweetBody, $footer);
        return $tweet;
    }

    $('#tweet-compose-form').on('submit', function (e) {
        e.preventDefault();

        let data = $(this).serialize();
        let counter = e.target[0].value;
        if (counter.length <= 0) {
            alert('Please enter some text')
        }
        if (counter.length > 140) {
            alert('This tweet is too long')
        } else {
            $.ajax('/tweets', {
                method: 'POST',
                data: data
            }).done(function (res) {
                loadTweets(res);
                $('.textarea').val('');
            })
        }
    });

    function loadTweets() {
        $.ajax({
            url: '/tweets',
            method: 'GET',
            success: function (data) {
                renderTweet(data);
                $('#counter').html(140);
            }
        })
    }

    //function to hide/show compose tweet section 
    $('#nav-bar button').on('click', function(){
        $('.new-tweet').slideToggle('slow', function(){
        $('textarea').focus();
        })
    })

});