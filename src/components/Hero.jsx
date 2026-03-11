import { motion } from "framer-motion"

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+524731140791?text=Hola,%20me%20interesa%20digitalizar%20mi%20negocio', '_blank')
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img src="/logo-cts.jpg" alt="CTS Logo" className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border border-cyan-400/40" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
      >
        Digitaliza tu Negocio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl mb-4 text-gray-200 font-semibold"
      >
        Llevamos tu empresa al mundo digital
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl"
      >
        Creamos páginas web profesionales, optimizadas y diseñadas para convertir visitantes en clientes. 
        Más de 100 negocios ya confían en nosotros. 
        <span className="block mt-2 text-blue-400 font-semibold">¡Aumenta tus ventas hasta un 300%!</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/50 flex items-center gap-2 justify-center"
        >
          <span>💬</span> Consulta Gratis por WhatsApp
        </motion.button>

        <motion.a
          href="#servicios"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 justify-center"
        >
          <span>📋</span> Ver Servicios
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-8 text-center mt-8"
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-purple-400">24/7</span>
          <span className="text-gray-400">Soporte Disponible</span>
        </div>
      </motion.div>
    </section>
  )
}