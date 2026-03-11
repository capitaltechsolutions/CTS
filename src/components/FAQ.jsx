import { motion } from "framer-motion"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      pregunta: "¿Cuánto tiempo toma crear mi página web?",
      respuesta: "Dependiendo de la complejidad, entre 7 a 21 días. Una landing page simple puede estar lista en 1 semana, mientras que una tienda online completa puede tomar 3 semanas."
    },
    {
      pregunta: "¿Cuánto cuesta una página web?",
      respuesta: "Los precios varían según tus necesidades. Desde páginas básicas de $300 hasta tiendas online completas desde $800. Ofrecemos planes de pago flexibles y cotizaciones personalizadas sin compromiso."
    },
    {
      pregunta: "¿Necesito conocimientos técnicos?",
      respuesta: "¡Para nada! Nosotros nos encargamos de todo el aspecto técnico. Te enseñamos a administrar tu sitio de forma simple y te damos soporte continuo."
    },
    {
      pregunta: "¿Incluye hosting y dominio?",
      respuesta: "Sí, podemos incluir hosting por el primer año y ayudarte a registrar tu dominio (.com, .mx, etc). También te asesoramos en la mejor opción para tu negocio."
    },
    {
      pregunta: "¿La página será responsiva (móvil)?",
      respuesta: "¡Por supuesto! Todas nuestras páginas están optimizadas para verse perfectas en celulares, tablets y computadoras. Más del 70% de tus clientes te visitarán desde móvil."
    },
    {
      pregunta: "¿Puedo actualizar el contenido yo mismo?",
      respuesta: "Sí, te entregamos un panel de administración intuitivo donde puedes cambiar textos, imágenes, productos y más. También brindamos tutoriales y soporte cuando lo necesites."
    },
    {
      pregunta: "¿Qué pasa después de la entrega?",
      respuesta: "Ofrecemos soporte técnico, mantenimiento mensual, actualizaciones de seguridad y te ayudamos a crecer tu presencia digital con marketing y SEO."
    },
    {
      pregunta: "¿Aparecerá mi negocio en Google?",
      respuesta: "Sí, optimizamos tu sitio para SEO (posicionamiento en buscadores). Adicionalmente, podemos configurar Google My Business y campañas de publicidad para acelerar tu visibilidad."
    },
    {
      pregunta: "¿Puedo integrar redes sociales y WhatsApp?",
      respuesta: "¡Absolutamente! Integramos todos tus canales: WhatsApp, Facebook, Instagram, etc. Incluimos botones de contacto directo para que tus clientes te escriban fácilmente."
    },
    {
      pregunta: "¿Ofrecen garantía?",
      respuesta: "Sí, garantizamos tu satisfacción. Si algo no te gusta, lo corregimos sin costo adicional. Queremos que ames tu página web y que funcione para hacer crecer tu negocio."
    }
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-400">
            Resolvemos tus dudas más comunes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.pregunta}
                </span>
                <span className="text-3xl text-blue-400 flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  {faq.respuesta}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            ¿Tienes otra pregunta?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/+524731140791?text=Tengo una pregunta sobre...', '_blank')}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto"
          >
            <span>💬</span> Pregúntanos por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
