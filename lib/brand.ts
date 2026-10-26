export interface BrandConfig {
  name: string;
  descriptor: string;
  location: string;
  instagramHandle: string;
  instagramUrl: string;
  establishedYear: string;
  generations: string;
  founderName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursSunday: string;
  googleMapsUrl: string;
}

export const brandConfig: BrandConfig = {
  name: "MOTIWALA & SONS",
  descriptor: "FINE JEWELLERY",
  location: "Karol Bagh",
  instagramHandle: "@motiwalaandsons",
  instagramUrl: "https://instagram.com/motiwalaandsons",
  establishedYear: "1928",
  generations: "Third Generation",
  founderName: "Mohanlal Motiwala",
  phone: "+91 98765 43210",
  whatsappNumber: "+919876543210",
  email: "hello@motiwalaandsons.com",
  address: "Karol Bagh, New Delhi & Fort, Mumbai",
  hoursWeekday: "Mon - Sat: 10:30 AM - 7:30 PM",
  hoursSunday: "Sun: 11:00 AM - 6:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Motiwala+and+Sons+Karol+Bagh",
};

export function getWhatsAppLink(message: string): string {
  const cleanNumber = brandConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
