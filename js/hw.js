for(var i = 0; i < 1; i++){
    alert("<<警告>>本当にこのページを開いてもよろしいですか？")
}

$("audio").prop('volume',0.2);

$("#div1").click(function(){
    
    $("#table").fadeToggle();
    
});

$("#div2").click(function(){
    
    $("#ol").fadeToggle();
    
});

$("#div3").click(function(){
    
    $("img").fadeToggle();
    
});

$("#div4").click(function(){
    
    $("button").fadeToggle();
    
});


function question(num){
    if(num <= 2){
        att = "※エラーが発生しました。選択しなおしてください。";   
    }else if(num == 3){
        att = "ご協力ありがとうございます。";
    }else if(num == 4){
        att = "ご協力誠にありがとうございます♥♥♥"; 
    }
    $("#result").text(att);
}


$("#div5").click(function(){
    
    $("#form").fadeToggle();
    
});