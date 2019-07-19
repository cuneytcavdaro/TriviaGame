
var allQuestions = [{q : "What is the capital city of the United States",c :["Dallas","Washington D.C.","Seattle","Chicago"],a :1},
{q: "What is the capital city of Australia?", c: ["Canberra","Sydney","Melbourne","Perth"],a: 0},
{q: "What is the capital city of United Kingdom?",c: ["Manchester","Bermingham","London","Liverpool"],a: 2},
{q: "What is the capital city of Brazil?",c: ["Sao Paulo","Rio de Janerio","Goiania","Brasilia"],a: 3},
{q: "What is the capital city of Italy?",c: ["Milan","Venice","Rome","Florence"],a: 2},
{q: "What is the capital city of Germany?",c: ["Frankfurt","Berlin","Hamburg","Munich"],a: 1},
{q: "What is the capital city of Turkey",c: ["Izmir","Antalya","Istanbul","Ankara"],a: 3},
{q: "What is the capital city of France?",c: ["Marseille","Lyon","Nice","Paris"],a: 3},
{q: "What is the capital city of Japan?",c: ["Tokyo","Osaka","Kyoto","Yokohama"],a: 0},
{q: "What is the capital city of Nigeria?",c: ["Lagos","Abuja","Benin City","Calabar"],a: 1}];
$(document).ready(function(){
    var windowTimeout = setTimeout(function() {
   
  
var multipleC = {
    draw : function() {
        var wrapper = $("#form"); 
        for(var i = 0; i < allQuestions.length; i++){
            var n = parseInt(i) + 1;
            var wrap = $('<div/>');
            wrap.addClass(".question");

            var question = $('<h1/>');
            $(question).html(n + "." + allQuestions[i]['q']);
            $(wrap).append($(".question"));

            for(var j = 0; j < allQuestions[i]['c']; j++ ){
                var label = $('<label/>');
                $(wrap).append($(label));
                var option = $('<input/>');
                option.value = j;
                option.type = "radio";
                option.name = "quiz-" + n;
                option.required = true;
                option.addClass("jquiz");
                $(label).append($(option));

                var txt = $(document.createTextNode(allQuestions[i]['c'][j]));
                $(label).append($(txt));
            }
                $(wrapper).append($(wrap));
        }
                var subButton = $("<input/>");
                subButton.type = "submit";
                $(wrapper).append($(subButton));
                $(wrapper).ready("submit",multipleC.submit());
            },
            submit : function (){
                var selected = $("jquiz");

                var score = 0;
                for(var z = 0; z < allQuestions.length; z++){
                    if(selected[z].value === allQuestions[z]['a']){
                        score++;
                    }
                }
                var total = selected.length;
                var percent = score/total;


                var rating = "<h1>"
      
                rating+="</h1>";
                rating+="<div>You scored " + score + "out of " + total + ".</div>";
                $("#form").html(rating);
        } 
    };
}, 1200000);
    clearTimeout(windowTimeout);
    $(window).ready("load",multipleC.draw);
})