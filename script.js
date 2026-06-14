function upDate(previewPic) {
  // 1. Check that the event is triggering
  console.log("Mouseover event triggered!");

  // 2. Print out information about the previewPic variable (alt and src)
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  // 3. Change the text of the element with the id of 'image'
  const imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;

  // 4. Change the background image of the element with the id of 'image'
  // Note: We use template literals `url('${...}')` to dynamically set the path
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  // 1. Check that the undo event is triggering
  console.log("Mouseleave event triggered!");

  const imageDiv = document.getElementById('image');

  // 2. Update the url for the background image back to original empty value
  imageDiv.style.backgroundImage = "url('')";

  // 3. Update the text of the div back to the original text
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
