$("form#input-form").submit(function(event){
  $("ul#output").empty();

  var number = parseInt($("input").val());

  for (var index = 1; index <= number; index+=1) {
  if (index%15==0) {
    $("ul#output").append('<li>'+"PingPong"+'</li>')
  }
  else if (index%5==0) {
    $("ul#output").append('<li>'+"Pong"+'</li>')
  }
  else if (index%3==0) {
    $("ul#output").append('<li>'+"Ping"+'</li>')
  }
  else {
    $("ul#output").append('<li>'+index+'</li>')
  }
  }
  $("form#input-form")[0].reset();

  event.preventDefault();
  });