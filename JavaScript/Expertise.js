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
        list.classList.remove("ondemand");

        var hobby_id = "hobby"+i;
        var exp_id = "exp"+i;
        var style_id = "style"+i;
        var audience_id = "audience"+i;
        var hobby_name = "hobby_name"+i;
        var hobby_desc = "hobby_desc"+i;
        var hobby_img = "hobby_img"+i;
        var hobby_label = "editModalLabel"+i;
        let hobby = sessionStorage.getItem(hobby_id);
        let exp = sessionStorage.getItem(exp_id);
        let style = sessionStorage.getItem(style_id);
        let audience = sessionStorage.getItem(audience_id);

        if (hobby == "chess") {
            document.getElementById(hobby_name).innerHTML = chess[0];
            document.getElementById(hobby_desc).innerHTML = chess[1];
            document.getElementById(hobby_img).src = chess[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = chess[0];
        } else if (hobby == "movies") {
            document.getElementById(hobby_name).innerHTML = movies[0];
            document.getElementById(hobby_desc).innerHTML = movies[1];
            document.getElementById(hobby_img).src = movies[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = movies[0];
        } else if (hobby == "fishing") {
            document.getElementById(hobby_name).innerHTML = fishing[0];
            document.getElementById(hobby_desc).innerHTML = fishing[1];
            document.getElementById(hobby_img).src = fishing[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = fishing[0];
        } else if (hobby == "camping") {
            document.getElementById(hobby_name).innerHTML = camping[0];
            document.getElementById(hobby_desc).innerHTML = camping[1];
            document.getElementById(hobby_img).src = camping[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = camping[0];
        } else if (hobby == "gardening") {
            document.getElementById(hobby_name).innerHTML = gardening[0];
            document.getElementById(hobby_desc).innerHTML = gardening[1];
            document.getElementById(hobby_img).src = gardening[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = gardening[0];
        } else if (hobby == "reading") {
            document.getElementById(hobby_name).innerHTML = reading[0];
            document.getElementById(hobby_desc).innerHTML = reading[1];
            document.getElementById(hobby_img).src = reading[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = reading[0];
        } else if (hobby == "music") {
            document.getElementById(hobby_name).innerHTML = music[0];
            document.getElementById(hobby_desc).innerHTML = music[1];
            document.getElementById(hobby_img).src = music[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = music[0];
        } else if (hobby == "travelling") {
            document.getElementById(hobby_name).innerHTML = travelling[0];
            document.getElementById(hobby_desc).innerHTML = travelling[1];
            document.getElementById(hobby_img).src = travelling[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = travelling[0];
        } else if (hobby == "cooking") {
            document.getElementById(hobby_name).innerHTML = cooking[0];
            document.getElementById(hobby_desc).innerHTML = cooking[1];
            document.getElementById(hobby_img).src = cooking[2];
            document.getElementById(exp_id).innerHTML = exp;
            document.getElementById(style_id).innerHTML = style;
            document.getElementById(audience_id).innerHTML = audience;
            document.getElementById(hobby_label).innerHTML = cooking[0];
        }
    }

})

function SaveLevel1() {

    var exp = document.getElementById("groups-order-by1").value;
    var style = document.getElementById("editInputStyle1").value;
    var audience = document.getElementById("editInputAudi1").value;

    sessionStorage.setItem('exp1', exp);
    sessionStorage.setItem('style1', style);
    sessionStorage.setItem('audience1', audience);

    document.getElementById("exp1").innerHTML = exp;
    document.getElementById("style1").innerHTML = style;
    document.getElementById("audience1").innerHTML = audience;
}

function SaveLevel2() {

    var exp = document.getElementById("groups-order-by2").value;
    var style = document.getElementById("editInputStyle2").value;
    var audience = document.getElementById("editInputAudi2").value;

    sessionStorage.setItem('exp2', exp);
    sessionStorage.setItem('style2', style);
    sessionStorage.setItem('audience2', audience);

    document.getElementById("exp2").innerHTML = exp;
    document.getElementById("style2").innerHTML = style;
    document.getElementById("audience2").innerHTML = audience;
}

function SaveLevel3() {

    var exp = document.getElementById("groups-order-by3").value;
    var style = document.getElementById("editInputStyle3").value;
    var audience = document.getElementById("editInputAudi3").value;

    sessionStorage.setItem('exp3', exp);
    sessionStorage.setItem('style3', style);
    sessionStorage.setItem('audience3', audience);

    document.getElementById("exp3").innerHTML = exp;
    document.getElementById("style3").innerHTML = style;
    document.getElementById("audience3").innerHTML = audience;
}

function SaveLevel4() {

    var exp = document.getElementById("groups-order-by4").value;
    var style = document.getElementById("editInputStyle4").value;
    var audience = document.getElementById("editInputAudi4").value;

    sessionStorage.setItem('exp4', exp);
    sessionStorage.setItem('style4', style);
    sessionStorage.setItem('audience4', audience);

    document.getElementById("exp4").innerHTML = exp;
    document.getElementById("style4").innerHTML = style;
    document.getElementById("audience4").innerHTML = audience;
}

function SaveLevel5() {

    var exp = document.getElementById("groups-order-by5").value;
    var style = document.getElementById("editInputStyle5").value;
    var audience = document.getElementById("editInputAudi5").value;

    sessionStorage.setItem('exp5', exp);
    sessionStorage.setItem('style5', style);
    sessionStorage.setItem('audience5', audience);

    document.getElementById("exp5").innerHTML = exp;
    document.getElementById("style5").innerHTML = style;
    document.getElementById("audience5").innerHTML = audience;
}

function SaveLevel6() {

    var exp = document.getElementById("groups-order-by6").value;
    var style = document.getElementById("editInputStyle6").value;
    var audience = document.getElementById("editInputAudi6").value;

    sessionStorage.setItem('exp6', exp);
    sessionStorage.setItem('style6', style);
    sessionStorage.setItem('audience6', audience);

    document.getElementById("exp6").innerHTML = exp;
    document.getElementById("style6").innerHTML = style;
    document.getElementById("audience6").innerHTML = audience;
}

function SaveLevel7() {

    var exp = document.getElementById("groups-order-by7").value;
    var style = document.getElementById("editInputStyle7").value;
    var audience = document.getElementById("editInputAudi7").value;

    sessionStorage.setItem('exp7', exp);
    sessionStorage.setItem('style7', style);
    sessionStorage.setItem('audience7', audience);

    document.getElementById("exp7").innerHTML = exp;
    document.getElementById("style7").innerHTML = style;
    document.getElementById("audience7").innerHTML = audience;
}

function SaveLevel8() {

    var exp = document.getElementById("groups-order-by8").value;
    var style = document.getElementById("editInputStyle8").value;
    var audience = document.getElementById("editInputAudi8").value;

    sessionStorage.setItem('exp8', exp);
    sessionStorage.setItem('style8', style);
    sessionStorage.setItem('audience8', audience);

    document.getElementById("exp8").innerHTML = exp;
    document.getElementById("style8").innerHTML = style;
    document.getElementById("audience8").innerHTML = audience;
}

function SaveLevel9() {

    var exp = document.getElementById("groups-order-by9").value;
    var style = document.getElementById("editInputStyle9").value;
    var audience = document.getElementById("editInputAudi9").value;

    sessionStorage.setItem('exp9', exp);
    sessionStorage.setItem('style9', style);
    sessionStorage.setItem('audience9', audience);

    document.getElementById("exp9").innerHTML = exp;
    document.getElementById("style9").innerHTML = style;
    document.getElementById("audience9").innerHTML = audience;
}



