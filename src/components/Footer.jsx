import { motion } from "framer-motion"

export default function Footer() {

  const handleSocial = (platform) => {
    const urls = {
      facebook: "https://facebook.com/TU_PAGINA",
      instagram: "https://instagram.com/TU_PERFIL",
      linkedin: "https://linkedin.com/company/TU_EMPRESA",
      twitter: "https://twitter.com/TU_USUARIO"
    }

    window.open(urls[platform], "_blank")
  }

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Columna 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              CLS Digital
            </h3>

            <p className="text-gray-400 mb-4">
              Transformamos negocios tradicionales en empresas digitales exitosas.
              Tu éxito es nuestra misión.
            </p>

            <div className="flex gap-3">

              {/* Facebook */}
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocial("facebook")}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.button>

              {/* Instagram */}
              <motion.button
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocial("instagram")}
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63C3.35.936 2.68 1.347 2.014 2.014C1.347 2.681.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12C0 15.26.015 15.667.072 16.947C.132 18.225.333 19.095.63 19.86C.936 20.649 1.347 21.319 2.014 21.986C2.681 22.653 3.35 23.064 4.14 23.37C4.905 23.667 5.775 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.225 23.868 19.095 23.667 19.86 23.37C20.649 23.064 21.319 22.653 21.986 21.986C22.653 21.319 23.064 20.649 23.37 19.86C23.667 19.095 23.869 18.225 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.775 23.667 4.905 23.37 4.14C23.064 3.35 22.653 2.681 21.986 2.014C21.319 1.347 20.649.936 19.86.63C19.095.333 18.225.131 16.947.072C15.667.012 15.26 0 12 0Z"/>
                </svg>
              </motion.button>

            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © 2026 CLS Digital - Todos los derechos reservados
            </p>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-blue-400">
                Términos de Servicio
              </a>
            </div>

          </div>

          <p className="text-center text-gray-600 text-xs mt-4">
            Hecho con ❤️ para ayudar a tu negocio a crecer
          </p>

        </div>

      </div>

    </footer>
  )
}
