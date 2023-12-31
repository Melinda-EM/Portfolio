import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="skills" className="pt-36 pb-36">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    view={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <p className="font-playfair font-semibold text-5xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7 text-xl">
                        Force de proposition, j'aime apprendre des autres.
                        <br/>
                        Chaque expérience est bonne à partager
                        <br/>
                        J'ai une préférence pour la stack Javascript.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div 
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10 w-96"
                                src={require("../assets/skills.jpg")} 
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src={require("../assets/skills.jpg")}
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between md:mt-10 gap-32">
                
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    view={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-31">
                        <div className="z-10">
                            <p className="font-playfair text-blue font-semibold text-5xl ml-6">01</p>
                            <p className="font-playfair font-semibold text-4xl mt-3 ml-6">
                                Organisation
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-36 bg-blue absolute right-0 top-1 z-[-1]">
                        </div>
                        <p className='mt-5 text-lg'>
                           J'ai besoin que tout mon travail soit organisé,
                           réparti en plusieurs petites tâches.
                           C'est également un point fort dans les projets de groupes, je suis le capitaine qui gère son équipage sur les mers agitées. 
                        </p>
                    </div>
                </motion.div>

               
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    view={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-31">
                        <div className="z-10">
                            <p className="font-playfair text-red font-semibold text-5xl ml-6">02</p>
                            <p className="font-playfair font-semibold text-4xl mt-3 ml-6">
                                Autonomie
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-36 bg-red absolute right-0 top-1 z-[-1]">
                        </div>
                        <p className="mt-5 text-lg">
                           J'aime apprendre de nouvelles choses chaque jour et Epitech me le
                           rend bien avec la pédagogie par projet, en effet il faut être autonome,
                           curieux et impliqué afin de rendre des projets convenables.
                        </p>
                    </div>
                </motion.div>

            
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    view={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-31">
                        <div className="z-10">
                            <p className="font-playfair text-yellow font-semibold text-5xl ml-6">03</p> 
                            <p className="font-playfair font-semibold text-4xl mt-3 ml-6">
                                Créativité
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-36 bg-yellow absolute right-0 top-1 z-[-1]">
                        </div>
                        <p className="mt-5 text-lg">
                           Grâce à mes études dans l'art, j'ai une patte artistique
                           qui m'aide et est un plus dans le monde du Web.
                           Cette liberté offerte me permet de créer des designs sobres mais colorés,
                           simple mais percutant.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;