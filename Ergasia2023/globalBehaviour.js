function messageWriting(labelName, messageFieldName){
  if (document.getElementById(messageFieldName.id).value == "")
    document.getElementById(labelName.id).style.color = "red";
  else {
    document.getElementById(labelName.id).style.color = "black";
  }
  document.getElementById("lbl_messageLength").innerText = messageFieldName.value.length;
}

function btn_submit(inputFieldName) {
  alert("*** ΜΗΝΥΜΑ ΠΡΟΣΩΜΕΙΩΣΗΣ ***\n\nΤο μήνυμα σας στάλθηκε με επιτυχία στη διεύθυνση: " + document.getElementById("inp_email").value);
}

function checkRequiredField(labelName, inputFieldName) {
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
