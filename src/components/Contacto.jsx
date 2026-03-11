import { useState } from "react"
import { motion } from "framer-motion"

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes integrar con un backend real o EmailJS
    console.log(form)
    
    // Redirigir a WhatsApp con el mensaje
    const mensaje = `Hola! Me llamo ${form.nombre}%0A%0AEmail: ${form.email}%0ATeléfono: ${form.telefono}%0AServicio: ${form.servicio}%0A%0AMensaje: ${form.mensaje}`
    window.open(`https://wa.me/+524731140791?text=${mensaje}`, '_blank')
    
    // Resetear formulario
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/+524731140791?text=Hola, quiero más información', '_blank')
  }

  const handleMessenger = () => {
    window.open('https://m.me/Capital_Tech_Solutions', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:contacto@clsdigital.com'
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hablemos de Tu Proyecto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estamos listos para digitalizar tu negocio. Contáctanos por tu método preferido
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Métodos de Contacto Rápido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Contacto Directo</h3>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-2xl cursor-pointer shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-1">WhatsApp</h4>
                  <p className="text-green-100">Respuesta inmediata</p>
                  <p className="text-sm text-green-200 mt-1">+52 (473) 114-0791</p>
                </div>
                <div className="text-2xl">→</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={handleMessenger}
              className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-2xl cursor-pointer shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.11C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-1">Messenger</h4>
                  <p className="text-blue-100">Chat en vivo</p>
                  <p className="text-sm text-blue-200 mt-1">Facebook Messenger</p>
                </div>
                <div className="text-2xl">→</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={handleEmail}
              className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-2xl cursor-pointer shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-1">Email</h4>
                  <p className="text-purple-100">Escríbenos</p>
                  <p className="text-sm text-purple-200 mt-1">capitaltechsolutions4@gmail.com</p>
                </div>
                <div className="text-2xl">→</div>
              </div>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-white">Horario de Atención</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="text-green-400">●</span> Lunes - Viernes: 9:00 AM - 6:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-400">●</span> Sábado: 10:00 AM - 2:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-400">●</span> Domingo: Cerrado
                </p>
              </div>
              <p className="text-sm text-blue-400 mt-4">
                💬 WhatsApp disponible 24/7 para emergencias
              </p>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  value={form.nombre}
                  onChange={(e) => setForm({...form, nombre: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 234 567 890"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  value={form.telefono}
                  onChange={(e) => setForm({...form, telefono: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Servicio de Interés *
                </label>
                <select
                  required
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  value={form.servicio}
                  onChange={(e) => setForm({...form, servicio: e.target.value})}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Diseño Web">Diseño Web</option>
                  <option value="Tienda Online">Tienda Online</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                  <option value="SEO">Optimización SEO</option>
                  <option value="Branding">Branding Digital</option>
                  <option value="Otro">Otro / Personalizado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe tu negocio y qué necesitas..."
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  value={form.mensaje}
                  onChange={(e) => setForm({...form, mensaje: e.target.value})}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all"
              >
                Enviar Mensaje 🚀
              </motion.button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Al enviar, serás redirigido a WhatsApp para completar tu consulta
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}