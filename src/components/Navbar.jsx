import { useState } from "react"
import "./Navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {

        const section =
        document.getElementById(id)

        if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        })

        }

        setMenuOpen(false)
    }

    return (

        <div className = "navbar">
            <h1 className="logo"
                onClick={() =>
                    scrollToSection("Home")
                } 
            >
                <img className = "logo-img" src = "https://res.cloudinary.com/djhuqjvrl/image/upload/v1767081824/f2919e58-e032-43d0-8553-7aaa4bf5aa7b.png"/>
            </h1>

            <div className = {

                menuOpen
                    ? "menu active"
                    : "menu"

                }
            >
                <p onClick={() => scrollToSection("WhyChooseUs")}>

                    Why Choose Us?

                </p>

                <p onClick={() => scrollToSection("FoodMenu")}>

                    Explore Menu 

                </p>

                <p onClick={() => scrollToSection("DeliveryPayment")}>

                    Delivery & Payment

                </p>

                <p onClick={() => scrollToSection("ThankingUs")}>

                    Thanking Us 

                </p>

                <p onClick={() => scrollToSection("FollowUs")}>

                    Follow Us 

                </p>

                <p onClick={() => scrollToSection("Contact")}>

                    Contact

                </p>

            </div>

            <div

                className="menuIcon"

                onClick={() =>

                setMenuOpen(!menuOpen)

                }

            >

                ☰

            </div>
        </div>
    )

}

export default Navbar