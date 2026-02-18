import { motion } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const projectsData = {
  bnf: {
    title: 'BNF',
    subtitle: 'Les Évangiles de la Sainte-Chapelle',
    category: 'Borne interractive',
    description: 'dans le cadre d\'un partenariat entre gobelins et la BNF de richelieu nous avons du développé une borne interractive.',
    detailDescription: 'L\'interface développée pour la BNF combine des algorithmes de génération d\'images avec une navigation intuitive. Les visiteurs peuvent explorer les détails microscopiques des manuscrits tout en bénéficiant d\'analyses automatisées des motifs et des symboles présents dans les enluminures.',
    videoCaption: 'La borne interactive permet aux visiteurs de découvrir les enluminures des manuscrits médiévaux de la Sainte-Chapelle à travers une expérience immersive utilisant l\'intelligence artificielle générative pour révéler les détails cachés et les symboles mystiques des évangiles.',
    designer: 'Thaïs L\'Hocine',
    role: 'Creative Developer',
    completed: '2026',
    url: 'bnf.fr',
    projectUrl: 'https://projets.gobelins-pedago.fr/dnmade-bnf/dnmade2-bnf-2025/html/views/book-restauration.html',
    heroImage: 'https://images.unsplash.com/photo-1616405160919-c209d0062a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFudXNjcmlwdCUyMG1lZGlldmFsJTIwYm9va3xlbnwxfHx8fDE3NzE0MjcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    carouselImage: 'https://images.unsplash.com/photo-1616405160919-c209d0062a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFudXNjcmlwdCUyMG1lZGlldmFsJTIwYm9va3xlbnwxfHx8fDE3NzE0MjcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'https://images.unsplash.com/photo-1651223969333-7a02ad74c4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzcxNDI3MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    colors: ['#f8a500', '#252525', '#e9e3d8'],
    typography: 'Theano Didot',
    nextProject: { title: 'Date Mark', slug: 'date-mark' },
  },
  'date-mark': {
    title: 'Date Mark',
    subtitle: 'Application Design',
    category: 'Application Design',
    description: 'Design d\'une application moderne pour la gestion de dates et dévénements.',
    detailDescription: 'Application mobile conçue avec une interface intuitive pour faciliter la planification et l\'organisation.',
    designer: 'Thaïs L\'Hocine',
    role: 'UI/UX Designer',
    completed: '2025',
    url: 'datemark.app',
    heroImage: 'https://images.unsplash.com/photo-1638376007478-83141a1eddd1?w=1920',
    logo: 'https://images.unsplash.com/photo-1651223969333-7a02ad74c4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzcxNDI3MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#000000', '#ffffff'],
    typography: 'Inter',
    nextProject: { title: 'Pochette CD', slug: 'pochette-cd' },
  },
  'pochette-cd': {
    title: 'Pochette CD',
    subtitle: 'Graphic Design & 3D',
    category: 'Graphic Design & 3D',
    description: 'Dans le cadre d\'un projet à l\'école, on devait créer la pochette d\'un artiste. J\'ai choisi la cover réalisée par une artiste, puis de la transformer en y ajoutant mes propres éléments.',
    detailDescription: 'J\'ai travaillé en mélangeant mes propres dessins et textures avec des retouches, en passant par Illustrator, InDesign et Photoshop. Je voulais trouver une façon originale de présenter ma cover.',
    designer: 'Thaïs L\'Hocine',
    role: 'Graphic Designer & 3D Artist',
    completed: '2025',
    url: '',
    heroImage: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480882/mockup_pochette1_nmwmia.jpg',
    processImages: [
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480882/mockup_pochette1_nmwmia.jpg',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1755268100/mock_up_cd_iiiz03.jpg',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480837/mock_klwezr.png'
    ],
    nextProject: { title: 'Underdog', slug: 'underdog' },
  },
  'underdog': {
    title: 'Underdog',
    subtitle: 'Stage & Web Design',
    category: 'Stage & Web Design',
    description: 'Lors de mon stage chez UnderDog, j\'ai participé à la gestion des annonces en ligne.',
    detailDescription: 'Je prenais en photo les appareils, les détourais puis préparais leur mise en page avant publication. J\'ai également conçu plusieurs visuels graphiques à l\'aide d\'Illustrator et contribué à la mise en ligne du site sur WordPress.',
    designer: 'Thaïs L\'Hocine',
    role: 'Stagiaire Designer & Web',
    completed: '2024',
    url: 'underdog.fr',
    heroImage: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575612/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.38_llrmp6.png',
    processImages: [
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575612/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.38_llrmp6.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575611/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.48_bnytps.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575603/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.29_znjqca.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575617/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.42_bsoqyl.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575618/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.53_rnid5p.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575614/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.20.57_zwqgxo.png',
      'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575631/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.13_ashakj.png'
    ],
  },
};

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#0f1]">Project not found</h1>
          <Link to="/" className="text-white underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <CustomCursor />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
        onClick={() => navigate('/')}
        className="fixed top-8 left-12 z-50 flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors group"
      >
        <motion.span 
          className="text-xl"
          animate={{ x: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ←
        </motion.span>
        <span className="relative">
          retour
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </span>
      </motion.button>

      {/* Main Content */}
      <div className="relative w-full">
        {/* Title Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="pt-28 pb-12 px-12 md:px-24"
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-8 font-light">
            {project.title}
          </h1>
          
          <p className="text-white text-sm md:text-base max-w-lg leading-relaxed">
            {project.description}
          </p>
        </motion.section>

        {/* Charte Graphique Section - Only for BNF and Date Mark */}
        {(slug === 'bnf' || slug === 'date-mark') && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-12 md:px-24 py-20"
          >
            <h2 className="text-[#0f1] text-2xl md:text-3xl mb-16">charte graphique</h2>

            {/* Color Palette and Typography on same line */}
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mb-16">
              {/* Typography Showcase */}
              <div className="flex items-start gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white text-8xl md:text-9xl"
                >
                  Aa
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white text-xs space-y-1 pt-6"
                >
                  <p>{project.typography}</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890/.?/%¨*_</p>
                </motion.div>
              </div>

              {/* Color Palette */}
              <div className="flex gap-4">
                {project.colors.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-16 h-40 border border-white/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Logo - For BNF and Date Mark */}
              {'logo' in project && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <img 
                    src={project.logo} 
                    alt={`${project.title} Logo`}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </motion.div>
              )}
            </div>

            {/* Navigation Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-end"
            >
              <div className="text-white text-2xl transform rotate-90">
                ↓
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Process Images Section - Only for BNF */}
        {slug === 'bnf' && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-12 md:px-24 py-20 space-y-32"
          >
            {/* Image 1 - Research */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616405160919-c209d0062a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMG1hbnVzY3JpcHQlMjBpbGx1bWluYXRpb24lMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MTM1NzMwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BNF Research Process"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white/60 text-xs mt-4">Recherche et analyse des manuscrits</p>
            </motion.div>

            {/* Image 2 - Wireframes */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl ml-auto"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lJTIwc2tldGNoJTIwZGVzaWdufGVufDF8fHx8MTc3MTM1NzMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BNF Wireframe Design"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white/60 text-xs mt-4 text-right">Conception de l'interface</p>
            </motion.div>

            {/* Image 3 - Final Interface */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697176668343-7d513a7af337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGtpb3NrJTIwbXVzZXVtJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTM1NzMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BNF Interactive Kiosk"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white/60 text-xs mt-4 text-center">Borne interactive finale</p>
            </motion.div>
          </motion.section>
        )}

        {/* Process Images Section - For projects with processImages */}
        {'processImages' in project && project.processImages && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-12 md:px-24 py-20 space-y-32"
          >
            {project.processImages.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`max-w-3xl ${
                  index % 3 === 0 ? '' : index % 3 === 1 ? 'ml-auto' : 'mx-auto'
                }`}
              >
                <img
                  src={imageUrl}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            ))}
          </motion.section>
        )}

        {/* Full Screen Video Section - Only for BNF */}
        {slug === 'bnf' && 'videoUrl' in project && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-8 md:px-12 py-16"
          >
            <div className="w-full max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="relative w-full bg-[#d9d9d9] rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.section>
        )}

        {/* YouTube Video Section - For Pop Culture project */}
        {slug === 'pop-culture' && 'youtubeUrl' in project && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-8 md:px-12 py-16"
          >
            <div className="w-full max-w-4xl mx-auto">
              {/* YouTube Embed Container */}
              <div className="relative w-full rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <iframe
                  className="w-full h-full"
                  src={project.youtubeUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.section>
        )}

        {/* Project Image - For non-BNF projects */}
        {slug !== 'bnf' && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-12 md:px-24 py-16"
          >
            <div className="max-w-md mx-auto md:ml-auto md:mr-24">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>
        )}

        {/* Detail Description */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-12 md:px-24 py-20"
        >
          <p className="text-white text-sm md:text-base max-w-md leading-relaxed">
            {project.detailDescription}
          </p>
        </motion.section>

        {/* Footer with Next Project */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 py-20 px-12 md:px-24 text-center"
        >
          <p className="text-white/60 text-sm mb-8">Projet suivant</p>
          
          <Link
            to={`/project/${project.nextProject.slug}`}
            className="group inline-block"
          >
            <motion.h2
              className="text-white font-display tracking-tight mb-12 transition-opacity group-hover:opacity-60"
              style={{ fontSize: 'clamp(3rem, 10vw, 10rem)', lineHeight: 0.9 }}
            >
              {project.nextProject.title}
            </motion.h2>
            
            <motion.button
              whileHover={{ y: 4 }}
              className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto backdrop-blur-sm group-hover:bg-white transition-all duration-300"
            >
              <span className="text-white text-2xl group-hover:text-black transition-colors">↓</span>
            </motion.button>
          </Link>
        </motion.section>

        {/* Green Footer Bar */}
        <div className="bg-[#0f1] h-42 md:h-40 w-full flex items-center justify-center relative">
          <p className="text-black text-xs md:text-sm">
            © 2026 Developed by Thaïs L'Hocine
          </p>
          
          {/* Project URL Link - Only for BNF */}
          {slug === 'bnf' && 'projectUrl' in project && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-8 text-black text-xs md:text-sm hover:underline transition-all"
            >
              Voir le projet →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}