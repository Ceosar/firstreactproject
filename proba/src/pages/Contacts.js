const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="contact-list">
                    <li className="contact-list__item-1">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="contact-list__item-2">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (777) 777-77-77</a></p>
                    </li>
                    <li className="contact-list__item-3">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">mail@mail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
     );
}

export default Contacts;