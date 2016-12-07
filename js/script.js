var jacks= ["Jack", "Steve", "Mike","Nick","Noah","Bohao","Brian", "Parker", "Milton","Jonathan","Luke","James","Thelonius","Bernard","William","Albert","Francis","Marc","Carlos","Fred","Neil","Gareth","Brock","Ross","Logan","Tom"];
var jills= ["Jill", "Carol", "Janet","Chantal","Emma","Tyler","Kelly", "Theresa", "Sheryl","Carol","Joyce","Susan","Haley","Dolores","Debra","Monique","Gertie","Joan","Carrie","Irene","Mags","Flossie","Naomi","Rachel","Rose","Francine"];
var hills= ["hill", "slide", "street","stairs","ladder","wall","cliff", "creek", "pile","mountain","ramp","building","knoll","mound","car","trashpile","mill","beanstalk","bookshelf","rock","iceberg","ridge","slope","dune","hillock","mesa"];
var pails= ["pail", "handful", "bucket","pile","crock","lump","bath", "bag", "sack","box","carful","fuckton","shitload","lot","line","can","backpack","maze","pyramid","shoeful","tank","ball","pack","stick","bottle","clump"];
var waters= ["water", "grits", "dreams","calamari","thumbs","turkey","vegetables", "swag", "ants","despair","hope","gravy","nutella","garbage","cocaine","Coke","tears","children","puppies","popsicles","wind","fire","ashes","books","jewels","nothing"];
var crowns= ["crown", "skull", "spleen","psyche","shins","heart","pride", "collarbone", "femur","cyst","flow","patience","marbles","coccyx","artery","face","mustache","girlfriend","composure","streak","wrist","fiancee","granny","football","undershirt","toupee"];
var fetchs= ["fetch", "investigate", "spill","drink","consume","chug","smoke", "steal", "snag","break","banish","scare","murder","huff","engage","find","realize","ruin","destroy","preserve","keep","do","buy","dump","throw","open"];
var brokes= ["broke", "ruptured", "replaced","removed","ate","tossed","sucked", "cut", "tore","pinched","tickled","swallowed","inhaled","gathered","admonished","loved","examined","barfed","opened","killed","tore","chewed","hit","crushed","serenaded","brushed"];
var tumbles= ["tumbling", "bumbling", "rumbling","plummeting","rolling","sliding","fucking", "plunging", "flying","hovering","running","sprinting","jogging","screaming","hollering","floundering","flopping","wallowing","thrashing","flopping","crying","sobbing","laughing","slobbering","whining","blabbering"];



// //get width and height of window
// var width = window.innerWidth;
// var height = window.innerHeight;

// // //start
// // var startWidth = window.innerWidth;
// // var startHeight = window.innerHeight;

// //call this function everytime page size changes
// $(window).resize(function () {
    
//     //measure current width and height
//     var newWidth = window.innerWidth;
//     var newHeight = window.innerHeight;

//     //random variable
//     var rand= Math.round(Math.random() * 26);
    
//     //if new width is more than 20 pixels larger/smaller...change word
//     //change 20 to change interval
//     //Math.abs= absolute value: ex Math.abs(-3)=3
//     if (Math.abs(newWidth-width) > 25) {
        
//         //fill span with random word from array
//         // $("#Jack").html(jacks[rand]);
//         changeW();
        
//         //set width = new Width
//         width=newWidth;
        
//     }
    
//     //same thing with height
//     if (Math.abs(newHeight-height) > 25) {
        
//         changeH();
        
//         height=newHeight;
        
//     }
    
    
// });


// function changeW() {

//     var rand= Math.round(Math.random() * 26);
//     var rand2= Math.round(Math.random() * 26);
//     var rand3= Math.round(Math.random() * 26);
//     var rand4= Math.round(Math.random() * 26);
//     var rand5= Math.round(Math.random() * 26);
//     var rand6= Math.round(Math.random() * 26);

//     var chooser = Math.round(Math.random()*7);

//     if(chooser==0) {
//         $("#hill").html(hills[rand2]);

//     } if(chooser=1) {
//         $("#fetch").html(fetchs[rand]);
//         $("#hill").html(hills[rand2]);


//     } if(chooser=2) {
//         $("#fetch").html(fetchs[rand]);
//         $("#hill").html(hills[rand2]);
//         $("#pail").html(pails[rand3]);

//     } if(chooser=3) {
//         $("#fetch").html(jacks[rand]);
//         $("#hill").html(hills[rand2]);
//         $("#pail").html(pails[rand3]);
//         $("#water").html(waters[rand4]);

//     } if(chooser=4) {
//         $("#fetch").html(fetchs[rand]);
//         $("#hill").html(hills[rand2]);
//         $("#pail").html(pails[rand3]);
//         $("#water").html(waters[rand4]);
//         $("#crown").html(crowns[rand5]);

//    } if(chooser=5) {
//         $("#fetch").html(fetchs[rand]);
//         $("#hill").html(hills[rand2]);
//         $("#pail").html(pails[rand3]);
//         $("#water").html(waters[rand4]);
//         $("#crown").html(crowns[rand5]);
//         $("#broke").html(brokes[rand]);

//    } if(chooser=6) {
//         $("#fetch").html(fetchs[rand]);
//         $("#hill").html(hills[rand2]);
//         $("#pail").html(pails[rand3]);
//         $("#water").html(waters[rand4]);
//         $("#crown").html(crowns[rand5]);
//         $("#broke").html(brokes[rand]);
//         $("#tumble").html(tumbles[rand6]);

//     } else {
//         $(".Jack").html(jacks[rand]);
//         $("#water").html(waters[rand4]);

//     }

// }

// function changeH() {

//     var rand= Math.round(Math.random() * 26);
//     var chooser = Math.round(Math.random()*2);

//     if(chooser==0) {
//         $(".Jill").html(jills[rand]);
//         $(".Jack").html(jacks[rand]);

//     } if(chooser=1) {
//         $(".Jill").html(jills[rand]);

//     } else {
//         $(".Jack").html(jacks[rand]);
//     }


//get width and height of window
var width = window.innerWidth;
var height = window.innerHeight;

//get width and height of window
var startWidth = window.innerWidth;
var startHeight = window.innerHeight;


//call this function everytime page size changes
$(window).resize(function () {
    
    //measure current width and height
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    //random variable
    var rand= Math.round(Math.random() * 26);
    
    //if new width is more than 20 pixels larger/smaller...change word
    //change 20 to change interval
    //Math.abs= absolute value: ex Math.abs(-3)=3
    if (Math.abs(newWidth-width) > 10) {
        

        if (newWidth>=startWidth*1.25) {
            widthXXXWide();
        }

        else if (newWidth>=startWidth*1.15) {
            widthXXWide();
        }


        else if (newWidth>=startWidth*1.1) {
            widthXWide();
        }


        else if (newWidth>=startWidth*1.05) {
            widthWide();
        }



        else if (newWidth>=startWidth*1) {
            widthNormal();
        }
        

        else if (newWidth>(startWidth*.95)) {
            
            widthMed();
        }
        

        else if (newWidth>(startWidth*.85)) {
            
            widthSmall();
        }


        else if (newWidth>(startWidth*.8)) {
            
            widthXSmall();
        }

        else if (newWidth>(startWidth*.75)) {
            
            widthXXSmall();

        }
        
        width=newWidth;
        
    }
    
    //same thing with height
    if (Math.abs(newHeight-height) > 10) {
        
        var rand= Math.round(Math.random() * 26);
    $(".Jack").html(jacks[rand]);
   var rand2= Math.round(Math.random() * 26);
    $(".Jill").html(jills[rand2]);
    $(".Jack").css("color", "white");
    $(".Jill").css("color", "white");
        
        height=newHeight;
        
    }
    
    
});

//only choose one variable to change
function widthXXXWide() {
    //FIXME

}

//only choose one variable to change
function widthXXWide() {
    //FIXME

   var rand3= Math.round(Math.random() * 26);
    $("#fetch").html(fetchs[rand3]);
   var rand4= Math.round(Math.random() * 26);
    $("#broke").html(brokes[rand4]);
    $("#fetch").css("color", "white");
    $("#broke").css("color", "white");

   var rand5= Math.round(Math.random() * 26);
    $("#tumble").html(tumbles[rand5]);
    $("#tumble").css("color", "white");

}

//only choose one variable to change
function widthXWide() {
    //FIXME

   var rand3= Math.round(Math.random() * 26);
    $("#fetch").html(fetchs[rand3]);
   var rand4= Math.round(Math.random() * 26);
    $("#broke").html(brokes[rand4]);
    $("#fetch").css("color", "white");
    $("#broke").css("color", "white");


}


//only choose one variable to change
function widthWide() {
    //FIXME

 var rand3= Math.round(Math.random() * 26);
    $("#fetch").html(fetchs[rand3]);
    $("#fetch").css("color", "white");
    $(".container").css("background-color", "black");
    $(".sans").css("color", "black");

}

//change each
function widthNormal() {
    //FIXME
    $(".sans").css("color", "white");
    $(".container").css("background-color", "red");
   
}



function widthMed() {
    //FIXME
   var rand= Math.round(Math.random() * 26);
    $("#hill").html(hills[rand]);
    $("#hill").css("color", "white");
    $(".container").css("background-color", "black");
    $(".sans").css("color", "black");

}

function widthSmall() {
    //FIXME
   var rand= Math.round(Math.random() * 26);
    $("#hill").html(hills[rand]);
    $("#hill").css("color", "white");
   var rand2= Math.round(Math.random() * 26);
    $("#pail").html(pails[rand2]);
    $("#pail").css("color", "white");
   
}

function widthXSmall() {
    //FIXME
   var rand= Math.round(Math.random() * 26);
    $("#hill").html(hills[rand]);
    $("#hill").css("color", "white");
   var rand2= Math.round(Math.random() * 26);
    $("#pail").html(pails[rand2]);
    $("#pail").css("color", "white");
    var rand3= Math.round(Math.random() * 26);
    $("#water").html(waters[rand3]);
    $("#water").css("color", "white");
   
}

function widthXXSmall() {
    //FIXME
   var rand= Math.round(Math.random() * 26);
    $("#hill").html(hills[rand]);
    $("#hill").css("color", "white");
   var rand2= Math.round(Math.random() * 26);
    $("#pail").html(pails[rand2]);
    $("#pail").css("color", "white");
    var rand3= Math.round(Math.random() * 26);
    $("#water").html(waters[rand3]);
    $("#water").css("color", "white");
    var rand4= Math.round(Math.random() * 26);
    $("#crown").html(crowns[rand4]);
    $("#crown").css("color", "white");
   
}

// }
