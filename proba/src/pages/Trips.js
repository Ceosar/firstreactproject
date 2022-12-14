import cairo from "../img/cairo3.jpg"

const Trips = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 id="cairo" >Cairo</h2>
                <div className="information">
                    <div className="info-text">
                        <p>Situated by the Nile, Egypt’s capital Cairo holds some of the country’s best historical and contemporary offerings,
                        lively streets that never sleep, and diverse neighborhoods.</p>
                            <br/>
                        <p>The dynamic metropolis features numerous heritage sites that imbue the city with a distinct charm and offer a glimpse into its Islamic and Coptic histories.
                        These include the renowned Al-Muiz street, Amr Ibn Al As Mosque, the Hanging Church, and the Saint Samaan Monastery.</p>
                            <br/>
                        <p> From local to international dining, Cairo’s variety of restaurants and cuisines cater to every taste, with prominent neighborhoods like Zamalek,
                        Downtown Cairo, and Maadi housing many favorites. Those who love dining with a view can enjoy their meals on a boat restaurant,
                        followed by an exhilarating felucca ride for a wonderful view of the sunset. Cairo’s nightlife is also well-known for its diversity,
                        creating a fusion of different genres and styles. Local and international live music concerts, from jazz to electronic,
                        are regularly hosted at venues around the city, as well as at its cultural landmark, the Cairo Opera House.</p>
                        <br/>
                        <p> All in all, Cairo’s culturally rich landscape makes for a must-visit destination.</p>
                    </div>
                    <img className="trips__image" src={cairo} alt=""/>
                </div>
            </div>
        </main>
     );
}

export default Trips;