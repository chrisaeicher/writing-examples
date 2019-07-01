// buttons
var desc_button = document.getElementById('desc_button');
var article_button = document.getElementById('article_button');
var keywords_button = document.getElementById('keywords_button');

// samples
var sample_div = document.getElementsByClassName('writing-samples')[0];
var desc = document.getElementById('desc');
var article = document.getElementById('article');
var keywords = document.getElementById('keywords');

// onclick handlers
desc_button.onclick = function() {
  sample_div.style = "display:block;";
  desc.style = "display: block;";
  article.style = "display: none;";
  keywords.style = "display: none;"
}

article_button.onclick = function() {
  sample_div.style = "display:block;";
  article.style = "display: block";
  desc.style = "display: none;";
  keywords.style = "display:none;"
}

keywords_button.onclick = function() {
  sample_div.style = "display:block;";
  keywords.style = "display: block;";
  desc.style = "display: none;";
  article.style = "display: none;";
}
