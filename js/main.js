$(document).ready(function() {

    function image_with_background_color(image, color, name) {
        
        var text = ("<div class='small-12 medium-6 large-4 columns left bussiness-card'>" +
                    "<div style='background-color:" + color + ";'>" +
                    "<img alt='none' src='" + image + "'/>" +
                    "</div>" +
                    "<h2>" + name + "</h2>" +
                    "</div>");
        return text;
    }
    
    function images_with_background_colors(images, colors, names) {
        var text = "";
        for (var i = 0; (i < images.length) && (i < colors.length) && (i < names.length); i++) {
            text += image_with_background_color(images[i], colors[i], names[i]);
        }
        return text;
    }

    var images = ["img/1439292739_imoticon_1.png",
                  "img/1439292760_imoticon_2.png",
                  "img/1439292946_imoticon_3.png",
                  "img/1439292983_imoticon_6.png",
                  "img/1439292964_imoticon_7.png",

                  "img/1439292792_imoticon_10.png",
                  "img/1439292780_imoticon_12.png",
                  "img/1439292771_imoticon_15.png",
                  "img/1439292987_imoticon_16.png",
                  "img/1439293010_imoticon_17.png",

                  "img/1439292815_imoticon_20.png",
                  "img/1439292823_imoticon_22.png",
                  "img/1439293000_imoticon_23.png",
                  "img/1439293005_imoticon_28.png",
                  "img/1439292995_imoticon_30.png"];
    
    var colors = ["#91baa0",
                  "#4c7782",
                  "#FF7CBF",
                  "#A2FFE9",
                  "#ffb342",

                  "#6670a0",
                  "#2cea45",
                  "#e2f41a",
                  "#ce583d",
                  "#ea7215",

                  "#7ea084",
                  "#45a855",
                  "#2185c8",
                  "#BBFFAA",
                  "#CC9922"
                 ];

    var names = ["Noah",
                 "Emma",
                 "Liam",
                 "Olivia",
                 "Mason",
                 
                 "Sophia",
                 "Jacob",
                 "Isabella",
                 "William",
                 "Ava",

                 "Ethan",
                 "Mia",
                 "Michael",
                 "Emily",
                 "Alexander"
                ];
    
    $('#bussiness-cards').html(images_with_background_colors(images, colors, names));

});


