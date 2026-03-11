import { motion } from "framer-motion"

export default function Navbar() {
  const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/+524731140791?text=Hola,%20quiero%20digitalizar%20mi%20negocio", "_blank")
  }

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-black/80 backdrop-blur-md z-50 px-6 py-4 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logo-cts.jpg"
            alt="CTS Logo"
            className="h-11 w-11 rounded-full object-cover border border-cyan-400/40"
          />
          <div className="leading-tight">
            <p className="font-bold text-base md:text-lg bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              CTS
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase">
              Capital Tech Solutions
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition font-semibold hidden sm:block"
          >
            WhatsApp
          </button>
          <a href="#contacto" className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition font-semibold">
            Contactar
          </a>
        </div>
      </div>
    </motion.nav>
  )
}