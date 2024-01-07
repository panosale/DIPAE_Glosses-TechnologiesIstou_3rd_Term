var barInterval;
var msecondsBarRan = 0;
// var innerWidth = parseInt(document.getElementById("div_Inner").style.width);
// Το παραπάνω γίνεται και έτσι:
//var innerWidth = parseInt(div_Inner.style.width);
function updateSeconds() {
    msecondsBarRan++;
    // document.getElementById("span_secondsBarRan").innerHTML = msecondsBarRan;
    // Το παραπάνω γίνεται και έτσι:
    //span_secondsBarRan.innerHTML = msecondsBarRan;
}
function progressStarted() {
    if (innerWidth > 0)
        document.getElementById("div_Inner").style.width = innerWidth-- + "px";
        // Το παραπάνω γίνεται και έτσι:
    //div_Inner.style.width = innerWidth-- + "px";
    else
        progressReset();
}
function runBar() {
    progressReset();
    var totalSecondsToBarRun = 4000; // 4 Seconds
    barInterval = setInterval(progressStarted, totalSecondsToBarRun);
}
function progressReset() {
    clearInterval(barInterval);
    msecondsBarRan = 0;
    document.getElementById("div_Outer").style.width = inp_barWidth.value + "px";
    innerWidth = parseInt(document.getElementById("div_Outer").style.width) - 1;
    document.getElementById("div_Inner").style.width = innerWidth + "px";
    document.getElementById("div_Inner").style.backroundcolor= "darkgreen"; // Έλεγχος αν χρειάζεται αυτή η γραμμή
}

// ΔΕΝ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ - ΑΡΧΗ
// var id = null;
// function myMove() {
//   var elem = document.getElementById("div_fieldsArea");
//   var pos = 800;
//   elem.style.left = pos + 'px'; 
//   clearInterval(id);
//   id = setInterval(frame, 1);
//   function frame() {
//     if (pos == 0) {
//       clearInterval(id);
//     } else {
//       pos--;
//       elem.style.left = pos + 'px'; 
//     }
//   }
//   id = null;
// }
// ΔΕΝ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ - ΤΕΛΟΣ

