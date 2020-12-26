/*Funktionen für die buttons */

function printDiv(x) {
     var printContents = document.getElementById(x).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}