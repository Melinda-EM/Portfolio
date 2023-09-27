import LineGradient from "../components/LineGradient";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
    }
}

    return (
        <section id="contact" className="pt-36 pb-24">
            {/* HEADING */}
            <motion.div
                className="flex justify-end w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <div>
                <p className="font-playfair font-semibold text-5xl">
                    <span className="text-yellow">CONTACTEZ-MOI</span>
                </p>
                <div className="flex md:justify-end my-5">
                <LineGradient width="w-full"/>
                </div>
                <span className="text-lg">Une question, une demande de renseignement ?</span>
                </div>
            </motion.div>

            {/* FORM & IMAGES */}
            <div className="md:flex md:justify-between gap-16 mt-8">
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0},
                    }}
                >
                    <img src={require('../assets/contact-image.jpeg')} alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0},
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/esteves.melinda@outlook.fr"
                        method="POST"
                    >
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NOM"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "Ce champ est requis."}
                                {errors.name.type === 'maxLength' && "La taille maximale est de 100 caractères"}
                            </p>
                        )}
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black mt-5 p-3"
                            type="text"
                            placeholder="PRENOM"
                            {...register("firstname", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.firstname && (
                            <p className="text-red mt-1">
                                {errors.firstname.type === 'required' && "Ce champ est requis."}
                                {errors.firstname.type === 'maxLength' && "La taille maximale est de 100 caractères"}
                            </p>
                        )}
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === 'required' && "Ce champ est requis."}
                                {errors.email.type === 'pattern' && "Email invalide."}
                            </p>
                        )}
                        <textarea
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === 'required' && "Ce champ est requis."}
                                {errors.message.type === 'maxLength' && "Le nombre de caractère est de 2000."}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="p-5 bg-red font-semibold text-white mt-5 hover:bg-blue
                            hover:text-white transition duration-500"
                        >
                            Envoyez-moi un message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;