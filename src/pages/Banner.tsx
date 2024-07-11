
export function Banner() {
  return (
    <section className="flex items-center" style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: "100vw 100vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw" }}>
      <div className="container mx-auto px-4 md:px-6 text-left">
        <h1 className="text-white text-4xl md:text-6xl font-bold">IMPROVE <br /> YOUR RESULTS</h1>
        <p className="text-white text-lg mt-2 md:mt-4">The best supplements with discounts to guarantee your physical development</p>
        <a href="#products" className="mt-4 md:mt-8 inline-block bg-purple-500 text-white text-lg font-medium px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple-600">Shop Now</a>
      </div>
    </section>
  );
}
