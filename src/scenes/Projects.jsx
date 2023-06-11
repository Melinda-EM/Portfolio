import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title, description, githubUrl, testUrl }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-gray z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const handleTestClick = () => {
        window.location.href = testUrl; // ou githubUrl
      };
      const handleGithubClick = () => {
        window.location.href =  githubUrl;
      };
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles} >
                <p className="text-2xl font-playfair">{title}</p>
                <p>{description}</p>
                <div>
                    {testUrl && (
                        <button className="text-red p-4 font-semibold text-xl" onClick={handleTestClick}>
                        Tester
                        </button>
                    )}
                    {githubUrl && (
                        <button className="text-blue font-semibold text-xl" onClick={handleGithubClick}>
                        GitHub
                        </button>
                    )}
                </div>
            </div>
            <img src={require(`../assets/${projectTitle}.png`)} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADING */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                view={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, y: -50},
                    visible: { opacity: 1, y: 0}
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JETS
                    </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-2/3" />
                    </div>
                </div>
                    <p className="mt-10 mb-10">
                    Vous pouvez observer, tester et vous renseigner sur certains de mes projets
                    <br/>
                    D'autres arriveront bientôt
                    </p>
                
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    view={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Connect Four" 
                        description="Puissance 4 réalisé en Javascript Vanilla, realisée en 1 semaine."
                        githubUrl="https://github.com/Melinda-EM/ConnectFour"
                        testUrl="https://me-connect-four.netlify.app"
                    />
                    <Project title="Spotify" 
                        description="Spotify en React/Docker, réalisée en groupe de 4 personnes et sur un rush de 3 jours."
                        githubUrl="https://github.com/Melinda-EM/Spotify"
                    />

                    {/* ROW 2 */}
                    <Project title="MyMeetic" 
                        description="Meetic en JavaScript Vanilla/PHP/HTML/CSS, realisée en 2 semaines."
                        githubUrl="https://github.com/Melinda-EM/MyMeetic"
                    />
                    <Project title="PushSwap" 
                        description="Algorithme du style bubble sort, réalisée en PHP/CLI, d'une durée d'une semaine."
                        githubUrl="https://github.com/Melinda-EM/PushSwap"
                    />
                    <Project title="Maquette" 
                        description="Reproduction d'une maquette, en une semaine." 
                        githubUrl="https://github.com/Melinda-EM/Maquette"
                        testUrl="me-maquette.netlify.app"
                    />

                    {/* ROW 3 */}
                    <Project title="ToDo List" 
                        description="Création d'une todo list en javascript, fait durant une colle en 4 heures" 
                        githubUrl="https://github.com/Melinda-EM/Todo_list"
                        testUrl="https://me-to-do-list.netlify.app"
                    />
                    <Project title="Site Photo" 
                        description="Mon premier site sur une de mes passions la photographie, HTML/CSS, réalisé en 4 jours"
                        githubUrl="https://github.com/Melinda-EM/First_site"
                    />
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;