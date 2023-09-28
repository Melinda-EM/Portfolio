import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const About = () => {
    // const aboutStyles = `mx-auto relative max-w-[400px] h-[350px] flex
    // flex-col justify+end pt-16 mt-48 before:absolute before:top-[-120px]
    // before:-ml-[110px] before:left-1/2`

    return (
        <section id="about" className="pt-36 pb-24">
            {/* HEADING */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                view={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-5xl">
                        <span className="text-red">A PRO</span>POS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <div>
            <p className="mt-10 mb-7 text-lg text-justify">
                    Pour vous parler un peu de moi :
                    <br/>
                    Passionnée de jeux vidéos comme Call Of Duty, Final Fantasy,
                     Dead Or Alive ou encore Les Sims pour n'en citer que quelques uns.
                     J'aime aussi Stitch, c'est un peu mon animal spirituel et il m'accompagne dans chaque projet.
                <br /> 
                <br/>
                Après 3 ans dans milieu hôtellier, j'ai décidé de me reconvertir et de faire le
                grand plongeon dans l'univers du Développement Web et j'ai entamée ma quête avec la formation
                de la Web@cadémie by Epitech pour étancher ma soif d'apprentissage et m'améliorer, si ce n'est
                de me perfectionner dans ce domaine si vaste.
                <br/>
                <br />
                Comme j'aime à dire, <i>Je ne suis pas là pour chasser des papillons</i>.
            </p>
            <img src={require("../assets/dodo.gif")}
                className="justify-left" alt="gif de Stitch"/>
            </div>
            </motion.div>

            
        </section>
    )
}

export default About