
$(function(){

$('#add_number').click(numbox);
$('#square').click(square);
$('#fn').click(generic_function);
$('#start').click(start_timer);
$('#stop').click(stop_timer);
});

a=[]; //he calls this numbers
var timer = null; //global varable.

function start_timer(){
 timer = setInterval(generate_random_number, 500); //key word. call function every 500ms (.5 second). Initiates timer. accessing global variable, so don't call var.

};

function stop_timer(){
clearInterval(timer); ///since global, you can cancel it.

};

function generic_function(){
  empty_boxes();
  a = _.map(a, funky_calc);  //same as square except we're doing a different computation.
  show_numbers();
}

function generate_random_number(){
var number = _.random(0, 1000); //random number will go in box. this will occur EVERY HALF SECOND.
  a.push(number)
  var box = $('<div>');
  box.addClass('pic');
  box.text(number);
  $('#numbers').prepend(box);

}


function numbox(){
  var numbox = parseInt($('#number').val());
  a.push(numbox);
  $('#array').text(a); //use this instead of appending. which would make it long.

  var i = $('<div>');
  i.addClass('pic');
  i.text(numbox);
  $('#numbers').prepend(i); //we will erase numbers and replace w/ squares
};

function square(){
empty_boxes();
a = _.map(a, square_value); //map function transforms current array and runs the function on each element. takes name of function
show_numbers();
};

function show_numbers(){

_.each(a, create_number_box);   //mad functions. loop through array. each number. each numbr goes to create_number_box as parameter. //ADdd numbers and square current numbers?


};

function create_number_box(i){
  var box = $('<div>');
  box.addClass('pic');
  box.text(i);
  $('#numbers').prepend(box);

}

function funky_calc(i){
  var equation = $('#number').val(); //they may give an algorithm like i*i*i in a string.JS will try to execute this in a string
  return eval(equation);
}

function square_value(i){  //each value of array acts as i
  return i*i;
};

function empty_boxes(){
  var clear =  $('#numbers').children('.clear');  //find the one box w/ .clear class      //points to one box inside of #numbers that has .clear
  $('#numbers').empty(); //we now want to reattach clear box to boxes.
  $('#numbers').append(clear); //bring the node back into #numbers. ASK ABOUT CLEAR.

}