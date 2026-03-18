export default function WhatsAppButton({
  message = "Hi, I am interested in your services",
}) {
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/918802805667?text=${encodedMessage}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-green-700 hover:scale-105 transition"
    >
      Chat with CA
    </a>
  );
}