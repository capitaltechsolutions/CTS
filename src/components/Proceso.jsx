import { motion } from "framer-motion"

export default function Proceso() {
  const pasos = [
    {
      titulo: "Reunión",
      descripcion:
        "Escuchamos tus objetivos, definimos alcance, tiempos y prioridades del proyecto.",
    },
    {
      titulo: "Diseño",
      descripcion:
        "Creamos la propuesta visual y estructura de contenido enfocada en tu marca y usuarios.",
    },
    {
      titulo: "Desarrollo",
      descripcion:
        "Construimos el sitio con buenas prácticas, optimización y adaptación a todos los dispositivos.",
    },
    {
      titulo: "Publicación",
      descripcion:
        "Realizamos pruebas finales, desplegamos tu web y te acompañamos en los primeros ajustes.",
    },
  ]

  return (
    <section id="proceso" className="py-24 px-6 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-12">Nuestro Proceso</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {pasos.map((paso, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <h3 className="font-semibold text-xl mb-3">{paso.titulo}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{paso.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}