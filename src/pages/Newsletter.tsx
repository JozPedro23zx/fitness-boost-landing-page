
export function Newsletter() {
  return (
    <section className="bg-purple-500 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">NEWSLETTER</h2>
          <p className="mb-6">Subscribe in our newsletter to receive exclusive tips and promotions.</p>
        </div>
        <form className="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
