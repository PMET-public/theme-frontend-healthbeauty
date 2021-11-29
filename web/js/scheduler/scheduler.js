define(['jquery','scheduler'], function($)
 {
     return function()
     {
         //suppress minutes from display and disable time selection
    $("[id^='options'][id$='minute']").val(00);
    $("[id^='options'][id$='minute']").css("display","none");
    $("#product-options-wrapper > div > div:nth-child(3) > fieldset > div > b").css("display","none");
    if($("[id^='options'][id$='date']").val()==''){
        $("[id^='options'][id$='hour']").prop("disabled",true);
        $("[id^='options'][id$='day_part']").prop("disabled",true);
    }
    //enable time when date is slected
    $("[id^='options'][id$='date']").change(function() {
        if($("[id^='options'][id$='date']").val()!=''){
            $("[id^='options'][id$='hour']").prop("disabled",false);
            $("[id^='options'][id$='day_part']").prop("disabled",false);
        }
    }); 
     };
 });