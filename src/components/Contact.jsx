function Contact() {
    return (

        <div style = {styles.footerCard}>

            <img style = {styles.image} src = "https://res.cloudinary.com/djhuqjvrl/image/upload/v1767081824/f2919e58-e032-43d0-8553-7aaa4bf5aa7b.png" />

            <p>
                orderfood@foodmunch.com
            </p>

            <p>
                123 Ayur Vignan Nagar, New Delhi, India
            </p>

        </div>


    );
}

const styles = {
    footerCard: {
        backgroundColor: "#183b56",
        height: "28vh",
        paddingTop: "10px",
        padding: "15px"
    },

    image: {
        height: "48px",
        width: "auto",
        objectFit: "contain"
    },

    text: {
        color: "#5a7184"
    }
}

export default Contact