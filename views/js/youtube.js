var channelName = 'TechGuyWeb';
var api_key = 'AIzaSyCPj2eoc5HF-6Ia8V3lAUl3gZYQJfuVv5Y';
$(document).ready(function () {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {part: 'contentDetails', forUsername: channelName, key: api_key},
        function(data){
            $.each(data.items, function(i, item){
                console.log(item);
                pid = item.contentDetails.relatedPlaylists.uploads;
                console.log(pid);
                getVids(pid);
            })
        }
    );


    function getVids(pid){
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {part: 'snippet', maxResults: 50, playlistId: pid, key: api_key},
            function(data){
                var output;
                $.each(data.items, function(i, item){
                    console.log(item);
                    videoTitle = item.snippet.title;
                    console.log(videoTitle);
                    
                    output = '<li><iframe src=\"//www.youtube.com/embed/' + videoTitle + '\"></iframe></li>';
                    
                })
            }
        );  
    }

});