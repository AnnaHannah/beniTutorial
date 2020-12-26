/*Das ist ein Kommentar*/

function printDiv(x) {
     var printContents = document.getElementById(x).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}