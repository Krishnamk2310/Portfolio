import { motion } from "framer-motion";

export const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 scale-50 md:scale-100 origin-center">
            {/* Cube 1 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 0.2,
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    y: [0, -20, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.5 },
                    rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/4 left-10 w-24 h-24 border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm"
                style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
            />
            
             {/* Pyramid/Triangle shape */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 0.15,
                    rotate: [0, -360],
                    y: [0, 30, 0],
                    x: [0, 20, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.8 },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-1/3 right-10 w-32 h-32 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm rounded-full"
            />
            
            {/* Another Cube */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 0.1,
                    rotateX: [0, -360],
                    rotateY: [0, 180],
                }}
                transition={{
                    opacity: { duration: 1, delay: 1 },
                    rotateX: { duration: 40, repeat: Infinity, ease: "linear" },
                    rotateY: { duration: 50, repeat: Infinity, ease: "linear" },
                }}
                className="absolute top-20 right-1/4 w-16 h-16 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm rotate-45"
            />
        </div>
    );
};
