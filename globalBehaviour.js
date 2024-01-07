// ΓΕΝΙΚΑ
// ΕΝΟΤΗΤΑ: ΧΟΜΠΙ & ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ - "ΦΩΤΟΓΡΑΦΙΑ"
var currentPos = 0;
const imagesPath = "images\\";
const picsArray = new Array("PANO_20230418_174909.jpg", "PANO_20230419_194026.jpg", "PANO_20230419_201414.jpg", "Dsc00939.jpg", "IMG_4452.JPG", "IMG_1662.JPG", "IMG_0695.JPG", "MpleTzami.JPG", "IMG_9563.JPG", "IMG_9537.JPG");
function previousImage() { 
  if (currentPos > 0)
    currentPos--;
  else
    currentPos = picsArray.length - 1;
  document.getElementById("img_currentImage").src = imagesPath + picsArray[currentPos];
}
function nextImage() {
  if (currentPos < picsArray.length-1)
    currentPos++;
  else
    currentPos = 0;
  document.getElementById("img_currentImage").src = imagesPath + picsArray[currentPos];
}
// ΕΝΟΤΗΤΑ: ΧΟΜΠΙ & ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ - "ΜΟΥΣΙΚΗ"
var slideshowCurrentPos = 0;
var slideshowInterval;
const concertImagesPath = "images\\concerts\\";
const slideshowPicsArray = new Array("2008-06-15_Knopfler_IMG_0057.JPG", "PANO_20230419_194026.jpg", "PANO_20230419_201414.jpg", "Dsc00939.jpg", "IMG_4452.JPG", "IMG_1662.JPG", "IMG_0695.JPG", "MpleTzami.JPG", "IMG_9563.JPG", "IMG_9537.JPG");
function slideShow() {
  slideshowCurrentPos++;
  if (slideshowCurrentPos == slideshowPicsArray.length)
    slideshowCurrentPos = 0;
  document.getElementById("img_currentImage").src = concertImagesPath + slideshowPicsArray[slideshowCurrentPos];
}
function slideshowStart() {
  slideshowInterval = setInterval(slideShow, 1000);
}
function slideshowStop() {
  clearInterval(slideshowInterval);
}

// ΕΝΟΤΗΤΑ: ΕΠΙΚΟΙΝΩΝΙΑ
function messageWriting(labelName, messageFieldName) {
  // if (document.getElementById(messageFieldName.id).value == "")
  //   document.getElementById(labelName.id).style.color = "red";
  // else {
  //   document.getElementById(labelName.id).style.color = "black";
  // }
  document.getElementById("lbl_messageLength").innerText = messageFieldName.value.length;// + "/100";
}
function clearContactFields() {
  document.getElementById("inp_name").value = "";
  document.getElementById("inp_email").value = "";
  document.getElementById("inp_message").value = "";
  document.getElementById("lbl_messageLength").innerText = "0";
}
function checkFilledContactFields() {
  if (document.getElementById("inp_name").value.length == 0)
    return false;
  // if (document.getElementById("inp_email").value.length == 0)
  if (!document.getElementById("inp_email").checkValidity())
    return false;
  if (document.getElementById("inp_message").value.length == 0)
    return false;
  return true;
}
function messageSent() { // ΓΙΑ ΔΟΚΙΜΕΣ ΚΑΙ ΔΙΑΓΡΑΦΗ Ή ΧΡΗΣΗ
  if (!checkFilledContactFields())
    alert("Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.");
  else {
    var tmpDiv = document.getElementById("div_fieldsArea");
    var tmpElement = document.createElement("h2");
    tmpElement.innerHTML = "Το μήνυμα εστάλη με επιτυχία.";
    // tmpElement.innerHTML = "Το μήνυμα εστάλη με επιτυχία." + "<br>*Λειτουργία προσομοίωσης.";
    tmpElement.setAttribute("class", "contactDiv");
    tmpElement.setAttribute("style", "color: darkgreen; border: 3px solid; width: 520px; text-align: center; padding: 30px 0");
    document.getElementById("div_contactForm").setAttribute("style", "width: fit-content; background-color: lightgreen")
    document.getElementById("div_contactForm").appendChild(tmpElement);
    tmpDiv.style.display = "none";
    setTimeout(() => {
    if (tmpDiv.style.display === "none") {
      tmpDiv.style.display = "block";
      document.getElementById("div_contactForm").removeChild(tmpElement);
      document.getElementById("div_contactForm").setAttribute("style", "width: 340px");
    }
    else {
      tmpDiv.style.display = "none";
    }
    }, 4000);
    clearContactFields();
  }
}
// ΤΟ ΠΑΡΑΚΑΤΩ ΜΠΟΡΕΙ ΝΑ ΧΡΗΣΙΜΟΠΟΙΗΘΕΙ ΑΝ ΚΑΝΟΥΜΕ ΧΡΗΣΗ ΤΗΣ ΙΔΙΟΤΗΤΑΣ ΤΟΥ form onsubmit()
function btn_submit() {
  messageSent();
  alert("*** ΜΗΝΥΜΑ ΠΡΟΣΟΜΕΙΩΣΗΣ ***\n***** ΝΑ ΑΛΛΑΧΤΕΙ ΣΕ ΑΥΤΟ ΠΟΥ ΖΗΤΑΕΙ Η ΑΣΚΗΣΗ *****\n\nΤο μήνυμα σας στάλθηκε με επιτυχία στη διεύθυνση: \n" + document.getElementById("inp_email").value);
}

// ΧΡΗΣΙΜΗ ΔΙΑΔΙΚΑΣΙΑ ΓΙΑ ΤΗΝ ΕΠΙΣΤΡΟΦΗ ΤΟΥ ΕΠΙΛΕΓΜΕΝΟΥ ΣΤΟΙΧΕΙΟΥ li ΜΙΑΣ ΛΙΣΤΑΣ - ΑΡΧΗ
// ΕΔΩ ΔΕΝ ΧΡΕΙΑΖΕΤΑΙ
var smallMenuChoice;
function clearAllElementsFromMainElement(elmnt) {
  elmnt.innerHTML = "";
}
function saveCurrentChoice(evt) {
  var tmpItems = document.querySelectorAll("#smallerTabs li"), 
  tmpTab = [], tmpIndex;
  // alert(tmpItems.length);
  for(var i = 0; i < tmpItems.length; i++) {
      tmpTab.push(tmpItems[i].innerHTML);
  }
  for(var i = 0; i < tmpItems.length; i++) {
      tmpItems[i].onclick = function() {
          //  alert("clicked");
          tmpIndex = tmpTab.indexOf(this.innerHTML);
          smallMenuChoice = tmpIndex;
      }
    }
}
function smallMenuSelection() {
  alert(smallMenuChoice);  
}
// ΧΡΗΣΙΜΗ ΔΙΑΔΙΚΑΣΙΑ ΓΙΑ ΤΗΝ ΕΠΙΣΤΡΟΦΗ ΤΟΥ ΕΠΙΛΕΓΜΕΝΟΥ ΣΤΟΙΧΕΙ li ΜΙΑΣ ΛΙΣΤΑΣ - ΤΕΛΟΣ
