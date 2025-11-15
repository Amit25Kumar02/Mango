import { motion } from "framer-motion"
export default function BackgroundParticle({position = "absolute"}){
    return <div className={`${position} inset-0 z-1`}>
    <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
    <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
    <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-500" />
    <div className="absolute bottom-20 right-40 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-700" />
    
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] left-[10%] w-16 h-16 border border-primary/30 rounded-lg"
    />
    <motion.div
      animate={{ rotate: -360, y: [0, -20, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[30%] w-12 h-12 border border-secondary/30 rounded-full"
    />
    <motion.div
      animate={{ rotate: [0, 180, 360], x: [0, 15, 0], y: [0, -10, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[50%] w-8 h-8 border-2 border-accent/40 transform rotate-45"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180, 270, 360] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] left-[70%] w-10 h-10 border border-primary-glow/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -25, 0], rotate: [0, -180, -360] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[90%] w-6 h-6 border border-secondary/60 transform rotate-12"
    />
    
    <motion.div
      animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 0.8, 1] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[30%] left-[5%] w-14 h-14 border-2 border-accent/30 rounded-lg transform rotate-45"
    />
    <motion.div
      animate={{ rotate: [0, 120, 240, 360], scale: [1, 1.2, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      className="absolute top-[30%] left-[25%] w-8 h-8 border border-primary/40 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -30, 0], rotate: [0, -90, -180, -270, -360] }}
      transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[30%] left-[45%] w-12 h-12 border border-secondary-glow/40 transform rotate-12"
    />
    <motion.div
      animate={{ x: [0, -15, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[30%] left-[65%] w-6 h-6 border-2 border-accent/50 rounded-full"
    />
    <motion.div
      animate={{ rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360], y: [0, -18, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[30%] left-[85%] w-7 h-7 border border-primary/35 transform rotate-12"
    />
    
    <motion.div
      animate={{ scale: [1, 1.4, 0.8, 1], rotate: [0, -360] }}
      transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50%] left-[15%] w-9 h-9 border-2 border-secondary/45 rounded-full"
    />
    <motion.div
      animate={{ x: [0, 25, 0], y: [0, -12, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50%] left-[35%] w-5 h-5 border border-accent/55 transform rotate-45"
    />
    <motion.div
      animate={{ y: [0, -35, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50%] left-[55%] w-11 h-11 border border-primary-glow/40 rounded-lg"
    />
    <motion.div
      animate={{ rotate: [0, -90, -180, -270, -360], x: [0, -20, 0], y: [0, 25, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[50%] left-[75%] w-8 h-8 border-2 border-secondary-glow/35 transform rotate-30"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], rotate: [0, 120, 240, 360], y: [0, -20, 0] }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50%] left-[95%] w-6 h-6 border border-accent/60 rounded-full"
    />
    
    <motion.div
      animate={{ x: [0, 18, 0], y: [0, -25, 0], rotate: [0, 270, 360] }}
      transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[70%] left-[8%] w-10 h-10 border-2 border-primary/50 transform rotate-60"
    />
    <motion.div
      animate={{ rotate: [0, 180, 360], scale: [1, 0.7, 1.2, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[70%] left-[28%] w-7 h-7 border border-secondary/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -28, 0], x: [0, 22, 0], rotate: [0, -45, -90, -135, -180, -225, -270, -315, -360] }}
      transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
      className="absolute top-[70%] left-[48%] w-9 h-9 border-2 border-accent/40 transform rotate-15"
    />
    <motion.div
      animate={{ scale: [1, 1.5, 0.8, 1], rotate: [0, 360], y: [0, -15, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[70%] left-[68%] w-8 h-8 border border-primary-glow/45 rounded-lg transform rotate-45"
    />
    <motion.div
      animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 0.8, 1] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[70%] left-[88%] w-6 h-6 border border-secondary/55 rounded-full"
    />
    
    <motion.div
      animate={{ x: [0, -12, 0], y: [0, 18, 0], rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360] }}
      transition={{ duration: 29, repeat: Infinity, ease: "linear" }}
      className="absolute top-[90%] left-[12%] w-7 h-7 border border-primary/40 transform rotate-30"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 0.9, 1], y: [0, -22, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[90%] left-[32%] w-9 h-9 border-2 border-accent/45 rounded-lg"
    />
    <motion.div
      animate={{ rotate: [0, -120, -240, -360], x: [0, 16, 0] }}
      transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[90%] left-[52%] w-8 h-8 border border-secondary-glow/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, -25, 0], scale: [1, 1.1, 0.9, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[90%] left-[72%] w-6 h-6 border-2 border-primary/60 transform rotate-45"
    />
    <motion.div
      animate={{ x: [0, -18, 0], y: [0, 20, 0], rotate: [0, 270, 360] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[90%] left-[92%] w-5 h-5 border border-accent/65 rounded-full"
    />
  </div>
}