import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
            <Header/>

            <main className="section">
                <div className="container">

                <ul className="content-list">

                    <li className="content-list__item" id="about">
                    <h2>We will show you the beauty of Egypt </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem aliquam soluta sequi eaque dignissimos praesentium minima facere, beatae molestias non est corporis nemo architecto perferendis vel tenetur aliquid veniam?</p>
                    </li>

                    <li className="content-list__item">
                    <h2>We will show you the beauty of Egypt </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem aliquam soluta sequi eaque dignissimos praesentium minima facere, beatae molestias non est corporis nemo architecto perferendis vel tenetur aliquid veniam?</p>
                    </li>

                </ul>

                </div>
            </main>
        </>
     );
}

export default Home;