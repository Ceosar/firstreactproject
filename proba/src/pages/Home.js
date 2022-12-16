import { motion } from "framer-motion";

import Header from "../components/header/Header";

const textAnimationDown = {
    hidden:{
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    }),
}

const Home = () => {
    return (
        <>
            <Header/>

            <motion.main
                initial="hidden"
                whileInView= "visible"
                viewport={{amount: 0.4, once: true}}
                className="section"
            >
                <div className="container">

                <ul className="content-list">

                    <motion.li custom={1} variants={textAnimationDown} className="content-list__item" id="about">
                    <h2>We will show you the beauty of Egypt </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem aliquam soluta sequi eaque dignissimos praesentium minima facere, beatae molestias non est corporis nemo architecto perferendis vel tenetur aliquid veniam?</p>
                    </motion.li>

                    <motion.li custom={1} variants={textAnimationDown} className="content-list__item">
                    <h2>We will show you the beauty of Egypt </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem aliquam soluta sequi eaque dignissimos praesentium minima facere, beatae molestias non est corporis nemo architecto perferendis vel tenetur aliquid veniam?</p>
                    </motion.li>

                </ul>

                </div>
            </motion.main>
        </>
     );
}

export default Home;