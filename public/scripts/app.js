$(document).ready(function () {

    const data = [{
            "user": {
                "name": "Newton",
                "avatars": {
                    "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                    "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                    "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                },
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": {
                    "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                    "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                    "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
                },
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        },
        {
            "user": {
                "name": "Johann von Goethe",
                "avatars": {
                    "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                    "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                    "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
                },
                "handle": "@johann49"
            },
            "content": {
                "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
            },
            "created_at": 1461113796368
        }
    ];

    //The first function that gets loaded and called
    renderTweet(data);
    //console.log(renderTweet(data));


    function renderTweet(data) {
        for (let index of data) {
            let $tweet = createTweetElement(index);
            $('#tweet-container').append($tweet);
        }
    };

    //this function creates the structure of the tweet and appends it to the section
    function createTweetElement(tweet) {
        let $tweet = $('<article>').addClass('tweeter');
        let image = $('<img>').attr('src', tweet.user.avatars.small).addClass('profile'); //creates new image tag with the avatars small object image source
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
        let $footer = $('<footer>').append(tweet.created_at, iconSpan);
        $tweet.append($header, $tweetBody, $footer); //adds the header, body, and footer to the article
        //console.log(createTweetElement(data));
        return ($tweet);
    }

    
    $('form').on('submit', function (e) {
        e.preventDefault();
        //gets the data entered into the form and sends it as a serialized string to our //database using the POST method.
        let data = $('form').serialize();
        let counter = $('form textarea').val()
        if (counter.length <= 0) {
            alert('Please enter some text')
        } else {
            if (counter.length > 140 ) {
                alert('This tweet is too long')
            } else {
                $.ajax('/tweets/', {
                    method: 'POST',
                    data: data
                }).done(function () {
                    $('form textarea').val(''); //clears text area
                })
            }
        }
    });

    //CONDITIONAL FUNCTION FOR TWEET TEXT AREA LENGTH 


    //END CONDITIONAL FUNCTION

//
////loadTweets is responsible for fetching tweets from the http://localhost:8080/tweets //page.
function loadTweets() {
    $.ajax({
        url: '/tweets/', //makes a request with jQuery to /tweets to receive array  //tweets as JSON
        method: 'GET',
        success: function (data) {
            renderTweet(data);
        } //success callback will renderTweets;
    })
}
//
loadTweets();

});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 * 

The tweet data object that the function will take will have all the necessary tweet data:
 * 
 * 
 * 
 * 
 */