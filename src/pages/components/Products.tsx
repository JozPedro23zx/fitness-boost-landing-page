export function Products() {
  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-4 md:px-6 ">
        <h2 className="text-3xl font-bold mb-6">PRODUCTS:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group relative text-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <img src={`/images/${product.image}`} alt={product.name} className="h-48 mx-auto transition-transform duration-300 transform group-hover:scale-105" />
              <p className="mt-4 text-xl font-semibold">{product.name}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-700 mb-4">{product.description}</p>
                <a href="#" className="bg-purple-500 text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-purple-600">Saiba Mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const products = [
  {
    name: 'Creatine',
    image: 'creatine.png',
    description: 'Boost your strength and muscle mass with our high-quality creatine.'
  },
  {
    name: 'Whey Protein',
    image: 'whey-protein.png',
    description: 'Increase your protein intake and build lean muscle with our whey protein.'
  },
  {
    name: 'Hypercaloric',
    image: 'hypercaloric.png',
    description: 'Gain mass and energy with our effective hypercaloric supplement.'
  },
  {
    name: 'Beta Alanine',
    image: 'beta-alanine.png',
    description: 'Enhance your performance and reduce fatigue with beta alanine.'
  }
]