import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChefHat, 
  Palette, 
  BookOpen, 
  Plane, 
  Heart, 
  Cat, 
  Coffee, 
  ShoppingBag, 
  Mail, 
  Instagram, 
  ChevronDown 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Pasiones', href: '#pasiones' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Mis Sueños', href: '#suenos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen selection:bg-soft-lavender selection:text-old-rose">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="text-2xl font-serif font-bold text-old-rose tracking-tighter">
            Mariajose Roldan
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-old-rose transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-old-rose"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-cream shadow-xl py-8 md:hidden flex flex-col items-center space-y-6"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-old-rose transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="ruta/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?auto=format&fit=crop&q=80&w=1920';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-old-rose mb-6 leading-tight">
              Creando, Explorando y <br />
              <span className="italic">Saboreando la Vida.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light">
              Chef, artista y viajera de corazón. Bienvenidos a mi espacio personal.
            </p>
            <a 
              href="#sobre-mi" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-old-rose text-old-rose hover:bg-old-rose hover:text-white transition-all duration-300 animate-bounce"
            >
              <ChevronDown size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-soft-lavender rounded-2xl z-0"></div>
                <img 
                  src="ruta/mariajose-perfil.jpg" 
                  alt="Mariajose Roldan" 
                  className="relative z-10 w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <span className="text-old-rose font-medium tracking-widest uppercase text-sm mb-4 block">Conóceme</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Más que una profesión, una mentalidad.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  A mis 31 años, he descubierto que la vida es un lienzo en constante evolución. Mi trayectoria en el mundo del Call Center me ha permitido dominar el arte de la resolución de problemas y, sobre todo, cultivar una empatía profunda. Estas no son solo habilidades laborales; son herramientas que aplico cada día para conectar con las personas y entender el mundo que me rodea.
                </p>
                <p>
                  Soy una fiel creyente del "aprendizaje continuo". Cada desafío es una oportunidad para crecer, y cada curiosidad es una puerta abierta a una nueva pasión. Mi vida es un equilibrio entre la precisión de la cocina, la libertad del arte y la emoción de descubrir nuevos horizontes.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <div className="p-4 bg-cream rounded-xl border border-soft-lavender">
                  <span className="block text-2xl font-serif text-old-rose">31</span>
                  <span className="text-xs uppercase tracking-tighter text-gray-500">Años de Vida</span>
                </div>
                <div className="p-4 bg-cream rounded-xl border border-soft-lavender">
                  <span className="block text-2xl font-serif text-old-rose">Chef</span>
                  <span className="text-xs uppercase tracking-tighter text-gray-500">Título Profesional</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section id="pasiones" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Mis Grandes Pasiones</h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">Lo que hace que mi corazón lata con más fuerza.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gastronomy */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="ruta/cocina.jpg" 
                  alt="Gastronomía" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center text-old-rose mb-6">
                  <ChefHat size={24} />
                </div>
                <h3 className="text-2xl mb-4">Gastronomía</h3>
                <p className="text-gray-600 italic mb-4">"No solo sigo recetas, creo experiencias."</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mi título de Chef es el reflejo de mi amor por los sabores. Mi cocina es una mezcla de técnica rigurosa y experimentación constante, donde cada plato cuenta una historia.
                </p>
              </div>
            </motion.div>

            {/* Art */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="ruta/arte.jpg" 
                  alt="Arte y Manualidades" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-soft-lavender rounded-full flex items-center justify-center text-indigo-400 mb-6">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl mb-4">Arte y Manualidades</h3>
                <p className="text-gray-600 italic mb-4">"Pintura y Cerámica: Mi refugio creativo."</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mis manos siempre están ocupadas creando algo nuevo. Desde lienzos vibrantes hasta piezas de barro con textura, el arte es donde encuentro mi paz y libertad.
                </p>
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="ruta/musica-libros.jpg" 
                  alt="Cultura y Relax" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-gray-400 border border-gray-200 mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl mb-4">Cultura y Relax</h3>
                <p className="text-gray-600 italic mb-4">"La banda sonora de mis tardes."</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Amo la lectura profunda y el cine de autor. La música en inglés acompaña mis tardes de café, creando el ambiente perfecto para reflexionar y soñar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life Stories Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-24">
            {/* NY Trip */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-3 text-old-rose mb-4">
                  <Plane size={20} />
                  <span className="uppercase tracking-widest text-xs font-bold">Historias de Vida</span>
                </div>
                <h2 className="text-4xl mb-6">El Gran Viaje: New York</h2>
                <p className="text-gray-600 text-lg mb-6 italic">
                  "La ciudad que nunca duerme me enseñó que soy capaz de conquistar cualquier horizonte por mi cuenta."
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Viajar sola a Nueva York fue un punto de inflexión. Caminar por sus calles, perderme en sus museos y sentir la energía de la Gran Manzana me dio una confianza inquebrantable en mis propias capacidades.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img 
                  src="ruta/ny-trip.jpg" 
                  alt="New York Trip" 
                  className="rounded-3xl shadow-xl w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
            </div>

            {/* Home and Cat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-cream p-12 rounded-[3rem] flex flex-col justify-center">
                <Heart className="text-old-rose mb-6" size={32} />
                <h3 className="text-3xl mb-6">Hogar y Amor</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vivo con mi mamá, mi pilar fundamental. Compartimos un apoyo incondicional que hace que cada día sea especial. El hogar es donde el corazón se siente seguro y amado.
                </p>
              </div>
              <div className="relative group">
                <img 
                  src="ruta/tuxedo-cat.jpg" 
                  alt="Tuxedo Cat" 
                  className="rounded-[3rem] w-full h-full object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-old-rose/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] flex flex-col items-center justify-center p-8 text-white text-center">
                  <Cat size={48} className="mb-4" />
                  <h4 className="text-2xl mb-2">Tuxedo</h4>
                  <p className="italic">"Mi compañero de vida, elegante y juguetón, que siempre sabe cuándo necesito un descanso."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section id="suenos" className="py-24 bg-soft-lavender/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Proyectos Futuros</h2>
            <p className="text-gray-500 italic">Visiones que pronto serán realidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm flex gap-8 items-start">
              <div className="bg-cream p-4 rounded-2xl text-old-rose">
                <Coffee size={32} />
              </div>
              <div>
                <h3 className="text-2xl mb-4">Le Petit Café</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mi sueño es abrir una cafetería estilo francés. Un rincón acogedor con aroma a croissant recién horneado y café de especialidad, donde el tiempo se detenga un poquito.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm flex gap-8 items-start">
              <div className="bg-cream p-4 rounded-2xl text-indigo-400">
                <ShoppingBag size={32} />
              </div>
              <div>
                <h3 className="text-2xl mb-4">Tienda de Arte Online</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pronto lanzaré mi plataforma para vender cerámica y piezas hechas a mano. "Transformando la arcilla en piezas con alma" para que lleguen a hogares de todo el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Galería Visual</h2>
            <p className="text-gray-500 italic">Un vistazo a mi mundo creativo.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img 
                  src={`ruta/galeria${i}.jpg`} 
                  alt={`Galería ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/majo${i}/800/800`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-old-rose p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl mb-8">Hablemos</h2>
                <p className="mb-12 opacity-80">¿Tienes alguna pregunta o simplemente quieres saludar? Me encantaría escucharte.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail size={20} />
                    <span className="text-sm">Majoslove94@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram size={20} />
                    <span className="text-sm">@majo_roldan</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-xs uppercase tracking-widest opacity-60">Basado en Guatemala</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Nombre</label>
                    <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-old-rose outline-none transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email</label>
                    <input type="email" className="w-full border-b border-gray-200 py-2 focus:border-old-rose outline-none transition-colors" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Mensaje</label>
                  <textarea rows={4} className="w-full border-b border-gray-200 py-2 focus:border-old-rose outline-none transition-colors resize-none" placeholder="¿En qué puedo ayudarte?"></textarea>
                </div>
                <button className="bg-old-rose text-white px-10 py-4 rounded-full hover:bg-old-rose/90 transition-all duration-300 shadow-lg shadow-old-rose/20 uppercase tracking-widest text-sm font-bold">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-24">
            <p className="text-2xl font-serif text-old-rose italic mb-4">
              "Cada experiencia me ha moldeado. Soy una persona curiosa que nunca deja de soñar."
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Mariajose Roldan. Hecho con amor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
