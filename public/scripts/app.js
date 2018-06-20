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
    console.log(renderTweet(data));


    function renderTweet(data) {
        //loops over each object in the data array and passes through the createTweetElement function
        data.forEach(function (element) {
            var $tweet = createTweetElement(element);
            //appends the new tweet to the tweet-container
            $('#tweet-container').append($tweet);
        })
    };


    function createTweetElement(tweet) {
        var $tweet = $('<article>').addClass('tweeter');
        var image = $('<img>').attr('src', tweet.user.avatars.small).addClass('profile'); //creates new image tag with the avatars small object image source
        var handle = $('<span>').text(tweet.user.handle).addClass('handle')
        var userName = $('<h2>').text(tweet.user.name).append(handle);
        var $header = $('<header>').addClass('tweet');
        $header.append(image, userName); //adds the image, handle, and username to the header
        var $tweetBody = $('<p>').text(tweet.content.text);
        var iconSpan = $('<span>').addClass('icons');
        var icon1 = $('<i>').addClass("fas fa-flag");
        var icon2 = $('<i>').addClass("fas fa-retweet");
        var icon3 = $('<i>').addClass("fas fa-heart");
        iconSpan.append(icon1, icon2, icon3);
        var $footer = $('<footer>').append(tweet.created_at, iconSpan); //how to put in icons?
        $tweet.append($header, $tweetBody, $footer); //adds the header, body, and footer to the article
        return ($tweet);
    }


});
//var $tweet = createTweetElement(tweet);
//$('#tweet-container').append($tweet);





//var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 * 
 * 
 * Within the app.js file, we're going to define a function createTweetElement that takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.

The tweet data object that the function will take will have all the necessary tweet data:
 * 
 * 
 * 
 * 
 */