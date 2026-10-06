import "./FoodMenu.css";

function FoodMenu({ food }) {

  return (

        <div style = {styles.foodContainer}>

            <div style={styles.card}>

                <img
                    src={food.image}
                    alt={food.name}
                    style={styles.image} />

                <h2 style = {styles.heading2}>
                    {food.name}
                </h2>
                <a className= "viewAll">
                    View all →
                </a>
            </div>
        </div>
  );
}

const styles = {

  card: {

    width: "280px",
    padding: "15px",
    backgroundColor: "#ffffff",
    color: "black",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px gray",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer"

  },

  image: {

    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px"

  },

  heading2: {
    color: "#183b56"
  }
}

export default FoodMenu