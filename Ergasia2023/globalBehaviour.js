function checkRequiredField(labelName, inputFieldName) {
//  alert(document.getElementById(inputFieldName.id).ariaLabel.value);
      // if (document.getElementById(inputFieldName.id.label).value == "")
      //   document.getElementById(inputFieldName.id.label).style.color = "red";
      // else
      //   document.getElementById(inputFieldName.id.label).style.color = "black";

  switch (labelName.id) {
    case ("lbl_name"):
      if (document.getElementById(inputFieldName.id).value == "")
        document.getElementById(labelName.id).style.color = "red";
      else
        document.getElementById(labelName.id).style.color = "black";
      break;
    case ("lbl_email"):
      if (document.getElementById(inputFieldName.id).value == "")
        document.getElementById(labelName.id).style.color = "red";
      else
        document.getElementById(labelName.id).style.color = "black";
      break;
  }
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
  var tmpDiv = document.getElementsByName("fieldsArea");
  tmpDiv.style.display = "none";
  setTimeout(() => {
    if (tmpDiv.style.display === "none")
      tmpDiv.style.display = "block";
    else
      tmpDiv.style.display = "none";
    }, 2000);
}
function btn_submit() {
  messageSent();
  // var tmpDiv = document.getElementById("fieldsArea");
  // tmpDiv.style.display = "none";
  // setTimeout(() => {
  //   if (tmpDiv.style.display === "none")
  //     tmpDiv.style.display = "block";
  //   else
  //     tmpDiv.style.display = "none";
  //   }, 2000);
//  alert("*** ΜΗΝΥΜΑ ΠΡΟΣΟΜΕΙΩΣΗΣ ***\n***** ΝΑ ΑΛΛΑΧΤΕΙ ΣΕ ΑΥΤΟ ΠΟΥ ΖΗΤΑΕΙ Η ΑΣΚΗΣΗ *****\n\nΤο μήνυμα σας στάλθηκε με επιτυχία στη διεύθυνση: \n" + document.getElementById("inp_email").value);
}
  