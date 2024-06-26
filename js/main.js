$(document).ready(function () {

  // Mailto
  $('a[href^=mailto]').addClass('mailto-link');

  var mailto = $('.mailto-link');
  var messageCopy = 'Click to copy email address';
  var messageSuccess = 'Email copied';
  
  mailto.append('<span class="mailto-message"></span>');
  $('.mailto-message').append(messageCopy);
  
  // Disable opening your email client. yuk.
  $('a[href^=mailto]').click(function() {
      return false; 
  })
  
  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function() {
    var href = $(this).attr('href');
    var email = href.replace('mailto:', '');
    copyToClipboard(email);
    $('.mailto-message').empty().append(messageSuccess);
    setTimeout(function() {
    $('.mailto-message').empty().append(messageCopy);}, 2000); 
  });


  function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    dummy.focus();
  }

});