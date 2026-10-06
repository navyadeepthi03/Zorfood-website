import "./ThankingUs.css";

function ThankingUs() {
    return (

            <div className = "card">

                <div>
                    <h1 className = "heading">
                        Thank you for being valuable customer to us.
                    </h1>

                    <p className = "text">
                        We have a surprise gift for you.
                    </p>

                    <div>
                        <img className = "image mobileImage" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" />
                    </div>

                    <button className = "button">
                        Redeem Gift
                    </button>
                </div>

                <div>
                    <img className = "image desktopImage" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" />
                </div>
            </div>

    );
}

export default ThankingUs