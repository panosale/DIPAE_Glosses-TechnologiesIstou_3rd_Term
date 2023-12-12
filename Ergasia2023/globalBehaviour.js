function checkRequiredField(labelName, inputFieldName) { // ΜΑΛΛΟΝ ΔΕΝ ΧΡΕΙΑΖΕΤΑΙ
//  alert(document.getElementById(inputFieldName.id).ariaLabel.value);
      // if (document.getElementById(inputFieldName.id.label).value == "")
      //   document.getElementById(inputFieldName.id.label).style.color = "red";
      // else
      //   document.getElementById(inputFieldName.id.label).style.color = "black";

  // switch (labelName.id) {
  //   case ("lbl_name"):
  //     if (document.getElementById(inputFieldName.id).value == "")
  //       document.getElementById(labelName.id).style.color = "red";
  //     else
  //       document.getElementById(labelName.id).style.color = "black";
  //     break;
  //   case ("lbl_email"):
  //     if (document.getElementById(inputFieldName.id).value == "")
  //       document.getElementById(labelName.id).style.color = "red";
  //     else
  //       document.getElementById(labelName.id).style.color = "black";
  //     break;
  // }
}
// ΓΙΑ ΤΗ ΔΙΑΧΕΙΡΙΣΗ ΤΩΝ ΦΩΤΟΓΡΑΦΙΩΝ ΣΤΗΝ ΕΝΟΤΗΤΑ ΧΟΜΠΙ & ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ
var currentPos = 0;
const imagesPath = "images\\";
const picsArray = new Array("PANO_20230418_174909.jpg", "PANO_20230419_194026.jpg", "PANO_20230419_201414.jpg", "Dsc00939.jpg", "IMG_4452.JPG", "IMG_1662.JPG", "IMG_0695.JPG", "MpleTzami.jpg", "IMG_9563.JPG", "IMG_9537.JPG");
function previousImage() { 
  if (currentPos > 0)
    currentPos--;
  else
    currentPos = picsArray.length - 1;
  document.getElementById("img_myImages").src = imagesPath + picsArray[currentPos];
}
function nextImage() {
  if (currentPos < picsArray.length-1)
    currentPos++;
  else
    currentPos = 0;
  document.getElementById("img_myImages").src = imagesPath + picsArray[currentPos];
}

function clearAllElementsFromMainElement(elmnt) {
  elmnt.innerHTML = "";
}
function messageWriting(labelName, messageFieldName){
  if (document.getElementById(messageFieldName.id).value == "")
    document.getElementById(labelName.id).style.color = "red";
  else {
    document.getElementById(labelName.id).style.color = "black";
  }
  document.getElementById("lbl_messageLength").innerText = messageFieldName.value.length + "/100";
}
function messageSent() { // ΓΙΑ ΔΟΚΙΜΕΣ ΚΑΙ ΔΙΑΓΡΑΦΗ
  // const contactDivElements = document.getElementById("fieldsArea").children;
  // alert(contactDivElements[4].className);
  var originalState = $("#fieldsArea").html();
  clearAllElementsFromMainElement(document.getElementById("fieldsArea"));
  setTimeout(() => {
    
    if (tmpDiv.style.display === "none")
      tmpDiv.style.display = "block";
    else
      tmpDiv.style.display = "none";
    }, 2000);
    $("#fieldsArea").html(originalState);
}
function btn_submit() {
  messageSent();
  alert("*** ΜΗΝΥΜΑ ΠΡΟΣΟΜΕΙΩΣΗΣ ***\n***** ΝΑ ΑΛΛΑΧΤΕΙ ΣΕ ΑΥΤΟ ΠΟΥ ΖΗΤΑΕΙ Η ΑΣΚΗΣΗ *****\n\nΤο μήνυμα σας στάλθηκε με επιτυχία στη διεύθυνση: \n" + document.getElementById("inp_email").value);
}
  