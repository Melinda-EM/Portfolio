import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../assets/CV Melinda Esteves Mendes Dev.pdf";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" 
        className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <div 
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                        before:rounded-t-[400px] before:w-full before:max-w-[600px] before:h-full
                        before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transi duration-500 z-10 w-full
                            rounded-t-[400px] md:max-w-[300px] "
                            src={require('../assets/moi.png')}
                        />
                    </div>
                ) : (
                    <img 
                        alt="profile"
                        className="hover:filter hover:saturate-200 transi duration-500 z-10 w-full
                        max-w-[300px] rounded-t-[400px] md:max-w-[300px]"
                        src={require('../assets/moi.png')}
                    />
                )}
                </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADING */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        view={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Melinda
                            <span 
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                                xs:before:content-brush before:absolute before:-left-[30px]
                                before:-top-[85px] before:z-[-1]"
                            >
                                Esteves
                            </span>
                        </p>

                        <p className="mt-10 mb-7 text-md text-center md:text-start">
                            Future Développeuse Web à la Web@cadémie by Epitech.. 
                            <br/>
                            Je suis à la recherche d'une alternance à partir de 
                            Septembre 2023 pour une durée de 14 mois, 
                            <br/>
                            rythme 3 semaines entreprise, 1 semaine école.
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        view={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <AnchorLink
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Contactez-moi
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                            onClick={() => setSelectedPage("contact")}
                            href="#project"
                        >
                            <div
                            className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                            justify-center font-playfair px-10"
                            >
                                Projets
                            </div>    
                        </AnchorLink>
                        <a href={CV} download>
                            <div className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500">
                                <div >
                                Télécharger le CV
                                </div>
                            </div>
                        </a>

                    </motion.div>

                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        view={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50},
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <SocialMediaIcons />
                    </motion.div>
                </div>    
        </section>
    );
};

export default Landing;