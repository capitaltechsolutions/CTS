import { motion } from "framer-motion"

export default function Beneficios() {
  const beneficios = [
    {
      icon: "🌍",
      titulo: "Alcance Global",
      descripcion: "Tu negocio visible 24/7 para clientes de todo el mundo"
    },
    {
      icon: "💰",
      titulo: "Más Ventas",
      descripcion: "Aumenta tus ingresos vendiendo online sin límites"
    },
    {
      icon: "🎯",
      titulo: "Clientes Precisos",
      descripcion: "Atrae exactamente a las personas interesadas en tu producto"
    },
    {
      icon: "⚡",
      titulo: "Rápido y Fácil",
      descripcion: "Tu página lista en días, no meses. Sin complicaciones"
    },
    {
      icon: "📈",
      titulo: "Crece Sin Límites",
      descripcion: "Escala tu negocio sin necesidad de local físico"
    },
    {
      icon: "🛡️",
      titulo: "Profesionalismo",
      descripcion: "Proyecta confianza y credibilidad ante tus clientes"
    }
  ]

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            ¿Por Qué Digitalizarte?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Los beneficios de tener presencia digital son inmediatos y duraderos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-all"
            >
              <div className="text-5xl mb-4">{beneficio.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {beneficio.titulo}
              </h3>
              <p className="text-gray-300">
                {beneficio.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
