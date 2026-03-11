import { motion } from "framer-motion"

export default function Portafolio() {
  const proyectos = [
    {
      icon: "🛍️",
      categoria: "E-commerce",
      nombre: "Tienda de Moda Fashion",
      descripcion: "Tienda online completa con catálogo de 500+ productos",
      resultados: "+300% ventas en 6 meses",
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: "🍽️",
      categoria: "Restaurante",
      nombre: "Sabores del Mar",
      descripcion: "Menú digital con sistema de pedidos y reservas online",
      resultados: "+150 pedidos mensuales",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: "🏋️",
      categoria: "Fitness",
      nombre: "PowerGym Centro",
      descripcion: "Sitio web con membresías, clases y blog de fitness",
      resultados: "200+ nuevos miembros",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: "💼",
      categoria: "Consultoría",
      nombre: "Business Solutions",
      descripcion: "Web corporativa con blog y generación de leads",
      resultados: "+80% leads cualificados",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: "🏠",
      categoria: "Inmobiliaria",
      nombre: "Casas & Propiedades",
      descripcion: "Catálogo de propiedades con búsqueda avanzada",
      resultados: "50+ ventas cerradas",
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      icon: "💅",
      categoria: "Belleza",
      nombre: "Beauty Spa Deluxe",
      descripcion: "Sistema de reservas online y catálogo de servicios",
      resultados: "+250% reservas online",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ]

  return (
    <section id="portafolio" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Proyectos Modelo
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ejemplos de lo que podemos crear para tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${proyecto.color} backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all`}
            >
              <div className="text-6xl mb-4">{proyecto.icon}</div>
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {proyecto.categoria}
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-300 mb-4">
                {proyecto.descripcion}
              </p>
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mt-4">
                <p className="text-green-400 font-semibold flex items-center gap-2">
                  <span>📈</span> {proyecto.resultados}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-10 rounded-3xl border border-blue-500/30"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Tu Proyecto Puede Ser el Próximo Modelo
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Adaptamos estos modelos a tu marca, objetivos y tipo de cliente
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/+524731140791?text=Quiero conocer más proyectos modelo', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Ver Más Proyectos Modelo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
