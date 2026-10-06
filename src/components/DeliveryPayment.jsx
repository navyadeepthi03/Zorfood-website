import "./DeliveryPayment.css";

function DeliveryPayment() {
    return (

        <div className = "card">

            <div>
                <h1 className = "heading">
                    Delivery & Payment
                </h1>

                <div>
                    <img className = "image mobileImage" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" />
                </div>

                <p className = "text">
                    Enjoy hassle-free payment with the plenitude of payment options available for you. Get live tracking and locate your food on a live map. It's quite a sight to see your food arrive to your door. Plus, you get a 5% discount on every order every time you pay online.
                </p>

                <button className = "button">
                    Order Now
                </button>
                <br />
                <img styles = {{marginLeft: "60px"}} className = "payment-image" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/visa-card-img.png" />
                <img className = "payment-image" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/master-card-img.png" />
                <img className = "payment-image" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" />
                <img className = "payment-image" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/american-express-img.png" />
            </div>

            <div>
                <img className = "image desktopImage" src = "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" />
            </div>
        </div>


    );
}

export default DeliveryPayment