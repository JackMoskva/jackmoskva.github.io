$(document).ready(function() {

  function mouseOver()
  {
    $('.en').css('background', '#5b5b5b');
  }
  function mouseOut()
  {
    $('.en').css('background', '#f4365c');
  }

  // either of these might work
  $('.ru').hover(mouseOver, mouseOut); 
  $('.ru').mouseover(mouseOver).mouseout(mouseOut); 
  // otherwise use this
  $('.ru').bind('mouseover', mouseOver).bind('mouseout', mouseOut);


  // then to unbind
  $('.ru').click(function(e) {
    e.preventDefault();
    $('.ru').unbind('mouseover', mouseOver).unbind('mouseout', mouseOut);
  });

});