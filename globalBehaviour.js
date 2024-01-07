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
const slideshowPicsArray = new Array(["2008-06-06_Papakonstantinou-Maxairitsas_IMG_0052.jpg", "6/6/2008 Βασίλης Παπακωνσταντίνου & Λαυρέντης Μαχαιρίτσας στο ΦΙΞ"],
    ["2008-06-06_Zouganelis-Boulas_IMG_0045.jpg", "6/6/2008 Γιάννης Ζουγανέλης & Σάκης Μπουλάς στο ΦΙΞ"],
    ["2008-06-15_Knopfler_IMG_0057.JPG", "15/6/2008 Mark Knopfler στον Λυκαβητό"], ["2008-06-15_Knopfler_IMG_0110.JPG", "15/6/2008 Mark Knopfler στον Λυκαβητό"],
    ["2008-11-14_Arvanitaki&Galani_IMG_0736.jpg", "14/11/2008 Ελευθερία Αρβανιτάκη & Δήμητρα Γαλάνη στον ΦΙΞ"],
    ["2009-03-28_Pavlidis_IMG_1350.JPG", "28/3/2009 Παύλος Παυλίδης στον Μύλο"], ["2009-03-28_Pavlidis_IMG_1354.JPG", "28/3/2009 Παύλος Παυλίδης στον Μύλο"],
    ["2009-05-28_ACDC_IMG_1499.JPG", "28/5/2009 ACDC στο ΟΑΚΑ"], ["2009-05-28_ACDC_IMG_1530.JPG", "28/5/2009 ACDC στο ΟΑΚΑ"], ["2009-05-28_ACDC_IMG_1568.JPG", "28/5/2009 ACDC στο ΟΑΚΑ"], ["2009-05-28_ACDC_IMG_1577.JPG", "28/5/2009 ACDC στο ΟΑΚΑ"],
    ["2009-05-28_ACDC_IMG_1617.JPG", "28/5/2009 ACDC στο ΟΑΚΑ"],
    ["2009-07-08_Santana_IMG_2048.JPG", "8/7/2009 Carlos Santana στο ΟΑΚΑ"], ["2009-07-08_Santana_IMG_2054.JPG", "8/7/2009 Carlos Santana στο ΟΑΚΑ"], ["2009-07-08_Santana_IMG_2070.JPG", "8/7/2009 Carlos Santana στο ΟΑΚΑ"],
    ["2009-07-08_Santana_IMG_2074.JPG", "8/7/2009 Carlos Santana στο ΟΑΚΑ"], ["2009-07-08_Santana_IMG_2088.JPG", "8/7/2009 Carlos Santana στο ΟΑΚΑ"],
    ["2009-10-24_ZZTop_IMG_2850.jpg", "24/10/2009 ZZTop στο Κλειστό TaeKwonDo του Φαλήρου"], ["2009-10-24_ZZTop_IMG_2853.jpg", "24/10/2009 ZZTop στο Κλειστό TaeKwonDo του Φαλήρου"],
    ["2010-09-03_U2_IMG_4073.jpg", "3/9/2010 U2 στο ΟΑΚΑ"], ["2010-09-03_U2_IMG_4077.jpg", "3/9/2010 U2 στο ΟΑΚΑ"], ["2010-09-03_U2_IMG_4094.jpg", "3/9/2010 U2 στο ΟΑΚΑ"],
    ["2011-03-17_Manowar_IMG_7124.jpg", "17/3/2011 Manowar στο Principal"], ["2011-03-17_Manowar_IMG_7127.jpg", "17/3/2011 Manowar στο Principal"],
    ["2016-07-05_Malamas_DSC_0962.jpg", "5/7/2016 Σωκράτης Μάλαμας στο ΦΙΞ"],
    ["2019-06-08_James&IggyPop_IMG_20190608_210641.jpg", "8/6/2019 James στην Πλατεία Νερού"], ["2019-06-08_James&IggyPop_IMG_20190608_215840.jpg", "8/6/2019 James στην Πλατεία Νερού"],
    ["2019-06-08_James&IggyPop_IMG_20190608_231038.jpg", "8/6/2019 IggyPop στην Πλατεία Νερού"], ["2019-06-08_James&IggyPop_IMG_20190609_003004.jpg", "8/6/2019 IggyPop στην Πλατεία Νερού"],
    ["2022-07-16_IronMaiden_IMG_20220716_215231.jpg", "16/7/2022 Iron Maiden στο ΟΑΚΑ"], ["2022-07-16_IronMaiden_IMG_20220716_215810.jpg", "16/7/2022 Iron Maiden στο ΟΑΚΑ"],
    ["2023-07-22_Guns'n'Roses_IMG_20230722_212714.jpg", "22/7/2023 Guns n'Roses στο ΟΑΚΑ"], ["2023-07-22_Guns'n'Roses_IMG_20230722_212856.jpg", "22/7/2023 Guns n'Roses στο ΟΑΚΑ"],
    ["2023-07-22_Guns'n'Roses_IMG_20230722_224121_1.jpg", "22/7/2023 Guns n'Roses στο ΟΑΚΑ"], ["2023-07-22_Guns'n'Roses_IMG_20230722_233058_1.jpg", "22/7/2023 Guns n'Roses στο ΟΑΚΑ"]);
function slideShow() {
  slideshowCurrentPos++;
  if (slideshowCurrentPos == slideshowPicsArray.length)
    slideshowCurrentPos = 0;
  document.getElementById("img_currentImage").src = concertImagesPath + slideshowPicsArray[slideshowCurrentPos][0];
  document.getElementById("span_currentImageInfo").innerHTML = slideshowPicsArray[slideshowCurrentPos][1];
  // console.log(slideshowPicsArray[slideshowCurrentPos][1]);
}
function slideshowStart() {
  slideshowInterval = setInterval(slideShow, 2000);
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
    }, 2000);
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
