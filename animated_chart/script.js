$(function(){
  $(".chart").each(function(){
    let ch = $(this).children("span").text();
     $(this).find(".inner").animate({"width":ch}, 1200);
     $(this).find(".inner").animate({"width": "+=70px"}, 200);
     $(this).find(".inner").animate({"width":"-=70px"}, 300);
    });
  });
