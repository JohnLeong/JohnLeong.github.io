function ScrollToTarget(target) {
  var offset = $('#' + target).offset();
  var scrollto = offset.top - 90;
  window.scrollTo({
    top: scrollto,
    behavior: "smooth"
  });
}

function ShowProjectItem(target_ID) {
  var project_items = document.getElementsByClassName("project-item");
  for (i = 0; i < project_items.length; i++) {
    project_items[i].style.display = "none";
  }
  var project_thumbnails = document.getElementsByClassName("project-thumbnail");
  for (i = 0; i < project_thumbnails.length; i++) {
    project_thumbnails[i].style.borderColor = "#5c5c5c"
  }

  document.getElementById(target_ID).style.display = "block";
  document.getElementById(target_ID.concat("-thumbnail")).style.borderColor = "cyan"
}
