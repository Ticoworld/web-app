import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downloadPdf = () => {
  const input = document.getElementById('user-cv');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv.pdf');
    })
    .catch((err) => {
      console.error('Failed to generate PDF:', err);
    });
};

export default downloadPdf;
