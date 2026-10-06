import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function FollowUs() {

    return (

        <div style={styles.card}>
            
            <h1 style = {styles.heading}>
                Follow Us
            </h1>

            <div style = {styles.iconsDisplay}>
                <div style = {styles.iconsContainer}>
                    <FaInstagram style={styles.icon}/>
                </div>
                <div style = {styles.iconsContainer}>
                    <FaTwitter style={styles.icon}/>
                </div>
                <div style = {styles.iconsContainer}>
                    <FaFacebook style={styles.icon}/>
                </div>
            </div>
        </div>

    );
}

const styles = {

    card: {
        backgroundColor: "#ffffff",
    },
    
    heading: {
        color: "#183b56",
        fontSize: "30px",
        marginTop: 0
    },

    iconsContainer: {
        width: "40px",
        height: "40px",
        backgroundColor: "#faf7e8",
        paddingTop: "22px",
        paddingBottom: "14px",
        paddingRight: "16px",
        paddingLeft: "22px",
        marginLeft: "15px",
        borderRadius: "40px",
        marginBottom: "30px"
    },

    icon: {
        color: "#d0b200",
        fontSize: "35px"
    },

    iconsDisplay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}

export default FollowUs