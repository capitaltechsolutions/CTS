import { motion } from "framer-motion"

export default function Servicios() {
  const servicios = [
    {
      icon: "🎨",
      titulo: "Diseño Web Profesional",
      descripcion: "Páginas web modernas, responsivas y atractivas que reflejan la identidad de tu marca",
      caracteristicas: ["Diseño personalizado", "Adaptable a móviles", "Carga rápida", "SEO optimizado"]
    },
    {
      icon: "🛒",
      titulo: "Tienda en Línea",
      descripcion: "Vende tus productos 24/7 con una tienda online completa y fácil de administrar",
      caracteristicas: ["Carrito de compras", "Pagos seguros", "Inventario", "Panel admin"]
    },
    {
      icon: "📱",
      titulo: "Marketing Digital",
      descripcion: "Estrategias efectivas para que más personas encuentren tu negocio en internet",
      caracteristicas: ["Redes sociales", "Google Ads", "Email marketing", "Análisis"]
    },
    {
      icon: "🔧",
      titulo: "Mantenimiento Web",
      descripcion: "Mantenemos tu sitio actualizado, seguro y funcionando perfectamente",
      caracteristicas: ["Actualizaciones", "Seguridad", "Backups", "Soporte técnico"]
    },
    {
      icon: "📊",
      titulo: "Optimización SEO",
      descripcion: "Aparece en los primeros resultados de Google y atrae más clientes potenciales",
      caracteristicas: ["Keywords", "Posicionamiento", "Analytics", "Reportes"]
    },
    {
      icon: "💼",
      titulo: "Branding Digital",
      descripcion: "Creamos la identidad visual de tu marca: logo, colores, tipografías y más",
      caracteristicas: ["Logo profesional", "Paleta de colores", "Guía de marca", "Tarjetas"]
    }
  ]

  return (
    <section id="servicios" className="py-24 px-6 text-center bg-gradient-to-b from-black to-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          Soluciones completas para llevar tu negocio al siguiente nivel digital
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all shadow-xl"
          >
            <div className="text-6xl mb-4">{servicio.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-white">{servicio.titulo}</h3>
            <p className="text-gray-400 mb-6">
              {servicio.descripcion}
            </p>
            <ul className="text-left space-y-2">
              {servicio.caracteristicas.map((car, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  {car}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/+524731140791?text=Me interesa: ' + servicio.titulo, '_blank')}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Consultar
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <p className="text-lg text-gray-300 mb-6">¿No encuentras lo que buscas?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://wa.me/+524731140791?text=Necesito un servicio personalizado', '_blank')}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
        >
          Consulta por Servicios Personalizados
        </motion.button>
      </motion.div>
    </section>
  )
}