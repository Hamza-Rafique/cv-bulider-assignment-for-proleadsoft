import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const generatePDF = (elementId: string, pdfName: string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    return;
  }

  html2canvas(element).then((canvas) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297); // Assuming A4 size

    pdf.save(`${pdfName}.pdf`);
  });
};

export default generatePDF;
