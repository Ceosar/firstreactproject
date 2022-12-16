import { motion } from "framer-motion";

const textAnimation = {
    hidden:{
        y: 20,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    }),
}

const Contacts = () => {
    return (
        <motion.main
            initial="hidden"
            whileInView="visible"
            className="section"
         >
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="contact-list">
                    <li className="contact-list__item-1">
                        <h2 className="title-2">Location</h2>
                        <motion.p custom={1} variants={textAnimation}>Hurghada, Egypt</motion.p>
                    </li>
                    <li className="contact-list__item-2">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <motion.p custom={2} variants={textAnimation}><a href="tel:+79051234567">+7 (777) 777-77-77</a></motion.p>
                    </li>
                    <li className="contact-list__item-3">
                        <h2 className="title-2">Email</h2>
                        <motion.p custom={3} variants={textAnimation}><a href="mailto:webdev@protonmail.com">mail@mail.com</a></motion.p>
                    </li>
                </ul>
            </div>
        </motion.main>
     );
}

export default Contacts;