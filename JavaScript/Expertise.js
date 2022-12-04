window.addEventListener('load', function() {

    var count = sessionStorage.getItem('count');

    var chess = ["Chess", "Chess is an abstract strategy game and involves no hidden information. It is played on a chessboard with 64 squares arranged in an eight-by-eight grid.", "../Source/Old-People-playing-chess.jpg"];
    var movies = ["Movies", "Movies are a recording of moving images that tell a story and that people watch on a screen or television.", "../Source/Movies.jpeg"];
    var fishing = ["Fishing", "Fishing is the activity of trying to catch fish.", "../Source/Fishing.jpg"];
    var camping = ["Camping", "Camping is the activity of spending a vacation living in a camp, tent, or camper.", "../Source/Camping.jpg"];
    var gardening = ["Gardening", "Gardening is about finding the right combination of sunlight, fertile soil, and water to make your plants thrive.", "../Source/Gardening.jpg", "../Source/Gardening.jpg"];
    var reading = ["Reading", "Reading is the action or skill of reading written or printed matter silently or aloud.", "../Source/Reading.jpg"];
    var music = ["Music", "Music is defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm or otherwise expressive content.", "../Source/Music.jpg"];
    var travelling = ["Travelling", "Travelling is the movement of people between distant geographical locations.", "../Source/Travelling.jpg"];
    var cooking = ["Cooking", "Cooking is the art, science and craft of using heat to prepare food for consumption.", "../Source/Cooking.jpg"];

    console.log('DOM Content loaded for expertise!')

    for(let i=1; i <= count; i++){
        console.log("Reached here");
        var id = "list"+i;
        var list = document.getElementById(id);
        list.classList.remove("hobby_list");

        var hobby_id = "hobby"+i;
        var hobby_name = "hobby_name"+i;
        var hobby_desc = "hobby_desc"+i;
        var hobby_img = "hobby_img"+i;
        let hobby = sessionStorage.getItem(hobby_id);
        if (hobby == "chess") {
            document.getElementById(hobby_name).innerHTML = chess[0];
            document.getElementById(hobby_desc).innerHTML = chess[1];
            document.getElementById(hobby_img).src = chess[2];
        } else if (hobby == "movies") {
            document.getElementById(hobby_name).innerHTML = movies[0];
            document.getElementById(hobby_desc).innerHTML = movies[1];
            document.getElementById(hobby_img).src = movies[2];
        } else if (hobby == "fishing") {
            document.getElementById(hobby_name).innerHTML = fishing[0];
            document.getElementById(hobby_desc).innerHTML = fishing[1];
            document.getElementById(hobby_img).src = fishing[2];
        } else if (hobby == "camping") {
            document.getElementById(hobby_name).innerHTML = camping[0];
            document.getElementById(hobby_desc).innerHTML = camping[1];
            document.getElementById(hobby_img).src = camping[2];
        } else if (hobby == "gardening") {
            document.getElementById(hobby_name).innerHTML = gardening[0];
            document.getElementById(hobby_desc).innerHTML = gardening[1];
            document.getElementById(hobby_img).src = gardening[2];
        } else if (hobby == "reading") {
            document.getElementById(hobby_name).innerHTML = reading[0];
            document.getElementById(hobby_desc).innerHTML = reading[1];
            document.getElementById(hobby_img).src = reading[2];
        } else if (hobby == "music") {
            document.getElementById(hobby_name).innerHTML = music[0];
            document.getElementById(hobby_desc).innerHTML = music[1];
            document.getElementById(hobby_img).src = music[2];
        } else if (hobby == "travelling") {
            document.getElementById(hobby_name).innerHTML = travelling[0];
            document.getElementById(hobby_desc).innerHTML = travelling[1];
            document.getElementById(hobby_img).src = travelling[2];
        } else if (hobby == "cooking") {
            document.getElementById(hobby_name).innerHTML = cooking[0];
            document.getElementById(hobby_desc).innerHTML = cooking[1];
            document.getElementById(hobby_img).src = cooking[2];
        }
    }

})


