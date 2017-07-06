var urlBase = "https://twitter.com/intent/tweet?text=";

function tweetText() {
    $("a[href^='https://twitter.com/intent/tweet?text=']").prop("href", urlBase + $("#quote").text().trim() + "%0D%0A" + $("#author").text().trim());
}

function getNewQuote() {

$( "#quote" ).fadeOut(500, function() {
  $.getJSON(" https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(getQuote) {
      $("#quote").html(getQuote[0].content);
      $("#author").text("- " + getQuote[0].title);
      $("#quote").fadeIn(700);
      $("#author").fadeIn(700);
      tweetText();
  });
});


}

$(document).ready(function(){
  getNewQuote();
  $('#quote-btn').on('click', getNewQuote);
});