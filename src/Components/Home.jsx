import '../assets/css/Home.css'


function Home({onNav}) {
    return(
        <div className="main-container">
            <div className="landing-button">
                <h1 className="description">Refresh, Rejuvenate, Rediscover: Your Passport to Limitless Exploration Awaits!</h1>
                <button className="home-button" onClick={onNav} data-page='ToursPackage'>
                    Lets Explore ➡️
                </button>
            </div>
        </div>

    );

    

}

export default Home