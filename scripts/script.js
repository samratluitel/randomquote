var shown = false;
var getQuote = function(){
    $.get("https://talaikis.com/api/quotes/random/")
    .done(function(data){
        $("#quote").text(data.quote);
        $("#author").text(`- ${data.author}`);
    })
    .fail(function(){
        console.log("Opps some error occured")
    })
}
var AnimateshowQuote=function(){
    $(".quote-container").animate({
        "opacity":"1"
    },300,"swing",function(){
        $(".quote-container").animate({
            "width":"60%"
        },1000,"swing",function(){
            ToogleDisplayQuote();
        })
    })
}
var AnimatehideQuote= function(){
    ToogleDisplayQuote(function(){
        $(".quote-container").animate({
            "width":"0.1%",
        },1000,"swing",function(){
            $(".quote-container").animate({
                opacity:0
            },300,"linear",function(){
               shown = false;
               getQuote();
                AnimateshowQuote();
            })
        })
    })
}
getQuote();
AnimateshowQuote();
function ToogleDisplayQuote(callback){
    if(!shown){
        $("#quote").animate({
            "opacity":"1"
        },400)

        $("#author").animate({
            "opacity":"1"
        },400,()=> shown=true);
    }
    else{
        $("#quote").animate({
            "opacity":"0"
        },400)
        
        $("#author").animate({
            "opacity":"0"
        },400,function(){
            callback();
        });
    }
}
$("#btn").on("click",function(){
    AnimatehideQuote(); // this automatically calls animate show quote
})

