// @ts-nocheck
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Map, Trophy, Target, Flag } from 'lucide-react'

export default function LandingPage() {
    const [dark, setDark] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(dark) {
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [dark])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const menuItems = [
        {label: 'Our Mission', path: '#mission', icon: Flag, color: 'from-blue-500 to-cyan-500'},
        {label: 'Activity Maps', path: '/maps', icon: Map, color: 'from-purple-500 to-pink-500'},
        {label: 'Geoguesser', path: '/crime_guesser', icon: Target, color: 'from-orange-500 to-red-500'},
    ]

    const handleNavigation = (path) => {
        if (path === '#mission') {
            const element = document.getElementById('mission')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate(path)
        }
    }

    return (
        <div className="min-h-screen w-full flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500 overflow-x-hidden relative">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[100px]" />
            </div>

            {/* Theme Toggle */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDark(!dark)}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={dark ? "dark" : "light"}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {dark ? <Moon size={20} /> : <Sun size={20} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500">
                            WELCOME TO
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x bg-[length:200%_auto]">
                            C.A.M.P
                        </span>
                    </h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium tracking-widest uppercase"
                    >
                        Criminal Activity Mapping Platform
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl"
                >
                    {menuItems.map(({ label, path, icon: Icon, color }) => (
                        <motion.button
                            key={label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleNavigation(path)}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${color}`} />
                            <div className="flex items-center justify-between relative z-10">
                                <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neutral-900 group-hover:to-neutral-600 dark:group-hover:from-white dark:group-hover:to-neutral-400 transition-colors">
                                    {label}
                                </span>
                                <div className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Mission Section */}
            <section id="mission" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
                <div className="max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-2xl"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                                Our Mission
                            </h2>
                        </div>
                        
                        <div className="space-y-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                            <p>
                                At <span className="font-bold text-neutral-900 dark:text-white">C.A.M.P</span>, we believe that knowledge is the first step towards safety. New York City is vibrant and dynamic, but staying informed about local safety can be challenging.
                            </p>
                            <p>
                                Our goal is to <span className="font-bold text-blue-600 dark:text-blue-400">democratize crime data</span>. We transform complex police reports and statistics into intuitive, real-time visualizations that everyone can understand.
                            </p>
                            <p>
                                By empowering New Yorkers with accurate, accessible information, we hope to foster safer communities and encourage proactive engagement in neighborhood safety.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="py-8 text-center text-neutral-400 dark:text-neutral-600 text-sm relative z-10"
            >
                © 2025 C.A.M.P. All rights reserved.
            </motion.div>
        </div>
    )
}