import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { SideNav } from '../components/SideNav';
import { Link } from 'react-router';

const projects = [
  {
    id: 1,
    title: 'BNF',
    category: 'Generative AI Experiment',
    image: 'iconbnf.png',
    slug: 'bnf',
  },
  {
    id: 2,
    title: 'Date Mark',
    category: 'Application Design',
    image: 'icondatemakr.png',
    slug: 'date-mark',
  },
  {
    id: 3,
    title: 'Pochette CD',
    category: 'Graphic Design & 3D',
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1756480837/mock_klwezr.png',
    slug: 'pochette-cd',
  },
  {
    id: 4,
    title: 'Underdog',
    category: 'Stage & Web Design',
    image: 'https://res.cloudinary.com/diai5g2u8/image/upload/v1756575631/Capture_d_%C3%A9cran_2025-08-30_%C3%A0_19.21.13_ashakj.png',
    slug: 'underdog',
  },
];

export function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera configuration
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Alpha à 0 pour fond transparent

    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const meshes: THREE.Mesh[] = [];

    // Carousel group with rotation
    const carouselGroup = new THREE.Group();
    carouselGroup.rotation.z = 0.1;
    carouselGroup.rotation.x = 0.1;

    scene.add(carouselGroup);

    // Create slides with curved effect
    projects.forEach((project, i) => {
      const texture = loader.load(project.image);
      texture.minFilter = THREE.LinearFilter;

      // Géométrie avec plus de segments pour courbure fluide
      const geometry = new THREE.PlaneGeometry(5, 3.2, 64, 64);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: 0 },
          uOpacity: { value: 1 },
          uBend: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uProgress;
          uniform float uBend;

          void main() {
            vUv = uv;
            vec3 pos = position;

            // Courbure cylindrique principale sur X (horizontale) - AUGMENTÉE
            float radius = 9.0; // Réduit de 7.5 à 6.0 pour plus de courbure
            float angleX = pos.x / radius;
            
            // Transformation cylindrique horizontale
            pos.z = radius * (1.0 - cos(angleX));
            pos.x = radius * sin(angleX);
            
            // Courbure verticale dynamique basée sur uBend (Y) - AUGMENTÉE
            float bendAmount = uBend * 0.4; // Augmenté de 0.5 à 0.7
            float angleY = (pos.y / radius) * bendAmount;
            pos.z += sin(angleY) * 1.8; // Augmenté de 1.2 à 1.8
            pos.x += cos(angleY) * 0.5; // Augmenté de 0.3 à 0.5

            // Pliage sur X pour effet cercle complet - AUGMENTÉ
            float angleXBend = (pos.x / radius) * bendAmount * 1.0; // Augmenté de 0.6 à 0.9
            pos.z += sin(angleXBend) * 0.9; // Augmenté de 0.4 à 0.7
            pos.y += cos(angleXBend) * 0.45; // Augmenté de 0.15 à 0.25

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uOpacity;
          varying vec2 vUv;

          void main() {
            vec4 texColor = texture2D(uTexture, vUv);
            
            // Vignette progressive
            vec2 center = vUv - 0.5;
            float dist = length(center);
            float vignette = 1.0 - smoothstep(0.2, 0.8, dist);
            
            // Assombrissement des bords
            float edgeDarkness = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
            
            vec3 finalColor = texColor.rgb * (0.8 + vignette * 0.2) * (0.7 + edgeDarkness * 0.3);
            
            gl_FragColor = vec4(finalColor, texColor.a * uOpacity);
          }
        `,
        side: THREE.DoubleSide,
        transparent: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = -i * 4.2;

      carouselGroup.add(mesh);
      meshes.push(mesh);
    });

    // Scroll system
    let targetScroll = 0;
    let currentScroll = 0;

    const handleWheel = (e: WheelEvent) => {
      targetScroll += e.deltaY * 0.002;
      targetScroll = Math.max(0, Math.min(targetScroll, projects.length - 1));
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      currentScroll += (targetScroll - currentScroll) * 0.08;

      meshes.forEach((mesh, i) => {
        const offset = i - currentScroll;

        // Position verticale linéaire
        mesh.position.y = -offset * 3.8;

        // PROFONDEUR EN ARC - crée une belle courbure circulaire
        const arcDepth = Math.pow(Math.abs(offset), 1.3) * 0.8;
        mesh.position.z = arcDepth;
        
        // Décalage horizontal pour renforcer l'effet cercle
        mesh.position.x = offset * 0.15;

        // ROTATION PROGRESSIVE en arc fluide
        // Utilise une fonction plus douce pour la courbure
        const bendFactor = 0.4;
        const bendAngle = -Math.atan(offset * bendFactor); // atan pour arc naturel
        mesh.rotation.x = bendAngle;
        
        // Rotation Y pour effet 3D renforcé
        mesh.rotation.y = offset * 0.12;
        mesh.rotation.z = offset * 0.02;

        // Pas de scale - toutes les images gardent la même taille
        mesh.scale.set(1, 1, 1);

        // Opacité et courbure dans le shader
        if (mesh.material instanceof THREE.ShaderMaterial) {
          const distanceFromCenter = Math.abs(offset);
          const opacity = Math.max(0.2, 1 - distanceFromCenter * 0.35);
          mesh.material.uniforms.uOpacity.value = opacity;
          
          // Courbure cylindrique progressive pour harmoniser avec la rotation
          mesh.material.uniforms.uBend.value = Math.pow(distanceFromCenter, 0.8) * 1.5;
          
          mesh.material.uniforms.uProgress.value = distanceFromCenter;
        }

        // Détecter l'élément actif
        if (Math.abs(offset) < 0.4) {
          setActiveIndex(i);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      
      // Safe cleanup: check if the renderer's canvas is actually a child of mountRef
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative size-full overflow-hidden bg-[#0a3f3f]">
      <CustomCursor />

      {/* Dégradé principal */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              #0a3f3f 0%,
              #0d4d4d 15%,
              #1a5d5d 25%,
              #2d7171 35%,
              #448585 45%,
              #5d9999 55%,
              #78acac 65%,
              #92bebe 75%,
              #a8caca 85%,
              #b8d4d4 95%,
              #c2d9d9 100%
            )
          `
        }}
      />

      {/* Effet diagonal lumineux subtil */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              transparent 30%,
              rgba(255, 255, 255, 0.03) 40%,
              rgba(255, 255, 255, 0.08) 48%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.08) 52%,
              rgba(255, 255, 255, 0.03) 60%,
              transparent 70%,
              transparent 100%
            )
          `
        }}
      />

      {/* Effet de grain - couche 1 */}
      <div 
        className="fixed inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.05) 1px,
              rgba(255, 255, 255, 0.05) 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(0, 0, 0, 0.03) 1px,
              rgba(0, 0, 0, 0.03) 2px
            )
          `,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Effet de grain - couche 2 (plus grand) */}
      <div 
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3px,
              rgba(255, 255, 255, 0.04) 3px,
              rgba(255, 255, 255, 0.04) 6px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, 0.02) 3px,
              rgba(0, 0, 0, 0.02) 6px
            )
          `,
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Bruit statique */}
      <div 
        className="fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
          `,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-xl"
            >
              Chargement...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <Header />

      {/* Side Navigation */}
      <SideNav projects={projects} activeIndex={activeIndex} />

      {/* WebGL Canvas */}
      <div ref={mountRef} className="fixed inset-0 z-[5]" id="main" />

      {/* Text Overlay */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20 pl-12">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white/60 text-sm mb-3 font-bold"
          >
            {projects[activeIndex].category}
          </motion.div>

          <motion.h2
            className="text-white font-display tracking-tight mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              lineHeight: 1,
            }}
          >
            {projects[activeIndex].title}
          </motion.h2>

          <Link
            to={`/project/${projects[activeIndex].slug}`}
            className="inline-flex items-center gap-3 text-white pointer-events-auto group relative"
          >
            <motion.span 
              className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="absolute inset-0 block rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:scale-110" />
              <motion.span
                className="relative text-xl transition-colors duration-300 group-hover:text-black flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.span>
            <motion.span 
              className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              View Project
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 left-8 z-50 text-white text-sm"
      >
        <div className="font-bold">en recherche d'alternance</div>
        <div className="text-white/50 flex items-center gap-2">
          février 2026
          <span className="inline-block transform rotate-45">↑</span>
        </div>
      </motion.div>
    </div>
  );
}