let lines = document.querySelectorAll("line");

fillSvglines();

document.addEventListener("scroll", fillSvglines);

function fillSvglines() {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  for (var i = 0; i < lines.length; i++) {
    let line = lines[i];
    let lineLength = line.getTotalLength();

    line.style.strokeDasharray = lineLength;
    line.style.strokeDashoffset = lineLength;

    line.style.strokeDashoffset = lineLength - scrollPercentage * lineLength;
  }
}
