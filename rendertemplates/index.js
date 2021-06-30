function generate() {
  title = document.getElementById("titleinput").value
  desc = document.getElementById("descriptioninput").value
  color = document.getElementById("colorinput").value
  redirect = document.getElementById("redirectinput").value
  base = "http://embed.xfinnbar.repl.co/embed/?"
  if (title !== "") {
  base += `title=${title}`
  }
  if (desc !== "") {
  base += `&desc=${desc}`
  }
  if (color !== "") {
  base += `&hex=${color.replace("#", "")}`
  }
  if (redirect !== "") {
  base += `&url=${redirect}`
  }
  out = document.getElementById("link")
  out.value = encodeURI(base)
  console.log(encodeURI(base))
}

function colorPicked() {
  colorType = document.getElementById("colorinput")
  colorPicker = document.getElementById("colorpicker")
  colorType.value = colorPicker.value
}

function colorTyped() {
  colorType = document.getElementById("colorinput")
  colorPicker = document.getElementById("colorpicker")
  colorPicker.value = colorType.value
}