import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

const Header = () => {
    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            className="header"
        >
            <div className="container">
                <div className="header__wrapper">
                    <motion.h1 custom={0.5} variants={textAnimation} className="header__title">Ghabour</motion.h1>
                    <motion.div custom={1} variants={textAnimation} className="header__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis et voluptatum repellat! Autem recusandae omnis reprehenderit, hic quas excepturi dicta quibusdam laudantium iure accusamus error ipsam id tenetur consectetur rerum.
                    </motion.div>
                </div>
            </div>
        </motion.header>
     );
}

export default Header;