document.addEventListener("DOMContentLoaded", function(event) {
  var re = /(\d+)-download$/;
  var divs = document.getElementsByClassName("download-link");
  for (i in divs) {
    var links = divs[i].getElementsByTagName("a");
    for (j in links) {
      var matches = links[j].getAttribute("href").match(re);
      if (matches != null) {
        links[j].setAttribute("href", "/roms/get-download.php?gid=" + matches[1] + "&test=true");
      }
    }
  }
});
