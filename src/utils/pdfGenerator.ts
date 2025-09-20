import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generatePDF = async (cardElement: HTMLElement, username: string): Promise<void> => {
  try {
    const canvas = await html2canvas(cardElement, {
      scale: 2,
      logging: false,
      useCORS: true,
      backgroundColor: '#0d1c2a'
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    // Card dimensions (aspect ratio 5:7)
    const cardWidth = 85; // mm (standard business card width)
    const cardHeight = 119; // mm (to maintain the 5:7 aspect ratio)
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [cardWidth, cardHeight]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, cardWidth, cardHeight);
    pdf.save(`${username.replace(/\s+/g, '_')}_business_card.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};