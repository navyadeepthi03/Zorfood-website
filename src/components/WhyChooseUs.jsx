function WhyChooseUs() {
    const features = [

        {
        icon: (
            <img
            src="https://res.cloudinary.com/djhuqjvrl/image/upload/v1767162949/48aaa47c-14b2-4b4e-b3b2-2cb1119651da.png" />),
        title: "Food Service",
        description: "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect."
        },

        {
        icon: (
            <img
            src="https://res.cloudinary.com/djhuqjvrl/image/upload/v1767163070/32a3d53c-16bc-4e85-a8ca-9356fbef3301.png" />),
        title: "Fresh Food",
        description: "The Fresh Food group providers fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate."
        },

        {
        icon: (
            <img
            src="https://res.cloudinary.com/djhuqjvrl/image/upload/v1767163436/bb559392-3e8f-420c-8ea0-3044e5d51eb9.png" />),
        title: "Best Offers",
        description: "Food Coupons & Offers upto 50% OFF and Exclusive Promo Codes on All Online Food Orders."
        }
    ]

    return (

        <div style={styles.container}>

            <h1 style={styles.heading}>
                Why Choose Us?
            </h1>

            <p style={styles.text}>
                We use both original recipes and classic versions of famous food items.
            </p>

            <div style={styles.cardContainer}>

                {
                features.map((item) => (

                    <div style={styles.card}>

                    <h1 style={styles.icon}>
                        {item.icon}
                    </h1>

                    <h2 style = {styles.heading2}>
                        {item.title}
                    </h2>

                    <p style = {styles.description}>
                        {item.description}
                    </p>

                    </div>

                ))
                }

            </div>

        </div>
    );
}

const styles = {

  container: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#ffffff"
  },

  heading: {
    fontSize: window.innerWidth <= 768 ? "35px" : "50px",
    color: "#183b56"
  },

  text: {
    color: "#5a7184",
    marginBottom: "40px",
    fontSize: "20px",
    marginTop: "20px"
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    width: "250px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px gray",
    backgroundColor: "#ffffff"
  },

  icon: {
    fontSize: "30px"
  },

  heading2: {
    color: "black"
  },

  description: {
    color: "#7b8794"
  }

}

export default WhyChooseUs