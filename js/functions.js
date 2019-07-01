// buttons
var desc_button = document.getElementById('desc_button');
var article_button = document.getElementById('article_button');
var keywords_button = document.getElementById('keywords_button');

// samples
var desc = document.getElementById('desc');
var article = document.getElementById('article');
var keywords = document.getElementById('keywords');

// onclick handlers
desc_button.onclick = function() {
  desc.style = "display: block;";
  article.style = "display: none;";
  keywords.style = "display: none;"
}

article_button.onclick = function() {
  article.style = "display: block";
  desc.style = "display: none;";
  keywords.style = "display:none;"
}

keywords_button.onclick = function() {
  keywords.style = "display: block;";
  desc.style = "display: none;";
  article.style = "display: none;";
}

desc_button.click();
