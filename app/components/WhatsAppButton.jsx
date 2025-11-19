"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-xl hover:bg-green-700 transition-all"
    >
      <img src="/images/Group 60.svg" className="w-7" />
      <span className="font-medium hidden sm:block">Chat Now</span>
    </a>
  );
}
