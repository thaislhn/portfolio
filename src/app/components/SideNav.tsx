import { motion } from 'motion/react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

interface SideNavProps {
  projects: Project[];
  activeIndex: number;
}

export function SideNav({ projects, activeIndex }: SideNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {projects.map((project, index) => (
        <motion.button
          key={project.id}
          className="group relative flex items-center justify-end"
          whileHover={{ scale: 1.2, x: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Dot indicator */}
          <motion.div
            className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${
              index === activeIndex ? 'bg-white scale-125' : 'bg-transparent'
            }`}
            animate={{
              scale: index === activeIndex ? 1.4 : 1,
              backgroundColor:
                index === activeIndex
                  ? 'rgba(255, 255, 255, 1)'
                  : 'rgba(255, 255, 255, 0)',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Tooltip on hover */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute right-6 px-3 py-1.5 bg-white text-black text-xs rounded whitespace-nowrap pointer-events-none"
          >
            <span className="block font-bold">{project.title}</span>
            <span className="block text-[10px] opacity-60">
              {project.category}
            </span>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45" />
          </motion.div>
        </motion.button>
      ))}
    </motion.div>
  );
}