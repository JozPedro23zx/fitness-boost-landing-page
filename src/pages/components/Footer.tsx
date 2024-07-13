
export function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <div className="mb-4 md:mb-0">
          <a href="#" className="block md:inline-block mr-4">Termos de uso</a>
          <a href="#" className="block md:inline-block mr-4">Política de Privacidade</a>
        </div>
        <div className="mb-4 md:mb-0">
          <a href="#" className="block md:inline-block mr-4">Facebook</a>
          <a href="#" className="block md:inline-block mr-4">Instagram</a>
          <a href="#" className="block md:inline-block mr-4">Twitter</a>
          <a href="#" className="block md:inline-block">Linkedin</a>
        </div>
        <div className="text-center md:text-right">
          <p>Endereço: Street of the flowers, 222</p>
          <p>Email: email@email.com</p>
          <p>Phone: 9999-9999</p>
        </div>
      </div>
    </footer>
  );
}
