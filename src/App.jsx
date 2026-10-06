import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhyChooseUs from './components/WhyChooseUs';
import FoodMenu from './components/FoodMenu';
import DeliveryPayment from './components/DeliveryPayment';
import ThankingUs from './components/ThankingUs';
import FollowUs from './components/FollowUs';
import Contact from './components/Contact';

function App() {

  const foods = [

    {
      id: 1,
      name: "Non-Veg Starters",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767415407/non-veg_r5u1fo.jpg"
    },

    {
      id: 2,
      name: "Veg Starters",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767416625/veg_starters_juawgg.jpg"
    },

    {
      id: 3,
      name: "Soups",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767417907/soop_v6lxj5.jpg"
    },

    {
      id: 4,
      name: "Fish & Sea Foods",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767418297/sea_image_j4ynpj.jpg"
    },

    {
      id: 5,
      name: "Main Course",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767417051/biryani_twy4hi.jpg"
    },

    {
      id: 6,
      name: "Noodles",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767417130/noodles_rmthiz.jpg"
    },

    {
      id: 7,
      name: "Salads",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767417260/salads_wwdsm3.jpg"
    },

    {
      id: 8,
      name: "Desserts",
      image: "https://res.cloudinary.com/dkfyxoeem/image/upload/v1767417544/cake_esmjei.jpg"
    }
  ]

  return (
    <div>
      <Navbar />
      <Home />
      <div id = "WhyChooseUs">
        <WhyChooseUs />
      </div>
      <div id="FoodMenu" style = {styles.foodContainer}>

          <h1 style={styles.heading}>
            Explore Our Delicious Menu
          </h1>
          <div style={styles.foodContainer}>
          {
            foods.map((food) => (
            <FoodMenu 
              key={food.id} 
              food={food} />
            ))
          }
          </div>
      </div>
      <div id = "DeliveryPayment">
        <DeliveryPayment />
      </div>
      <div id = "ThankingUs">
        <ThankingUs />
      </div>
      <div id = "FollowUs">
        <FollowUs />
      </div>
      <div id = "Contact">
        <Contact />
      </div>
    </div>
  );
}

const styles = {

  foodContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    padding: "40px 20px",
    backgroundColor: "#f9fbfe"
  },

  heading: {

    fontSize: "45px",
    color: "#183b56",
    marginBottom: "40px"
  }

}
export default App