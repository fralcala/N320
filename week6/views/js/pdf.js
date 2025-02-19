import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

const myDoc = new jsPDF();

const nums = [];

function addNum() {
  nums.push();
}

function downloadPdf() {
  myDoc.text("Title", 10, 10);
  myDoc.save("myDOC.pdf");
}

function viewPdf() {
  myDoc.text("Title", 10, 10);
  const dataUrl = myDoc.output("bloburl");

  document.querySelector();
}

document.querySelector("#download-pdf").onclick = downloadPdf;
