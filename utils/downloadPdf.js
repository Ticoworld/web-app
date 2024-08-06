import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downloadPdf = () => {
  const input = document.getElementById('user-cv');
  
  // Temporarily set the size to the original dimensions
  input.style.width = '793px';
  input.style.height = '842px';

  html2canvas(input, { scale: 2 })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv.pdf');

      // Revert to original size after generating the PDF
      input.style.width = '';
      input.style.height = '';
    })
    .catch((err) => {
      console.error('Failed to generate PDF:', err);
      // Revert to original size if there is an error
      input.style.width = '';
      input.style.height = '';
    });
};

export default downloadPdf;
