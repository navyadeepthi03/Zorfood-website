function Home() {

    return (

        <div
            id = "Home" 
            style={{

                textAlign: "center",
                padding: "120px 20px",
                backgroundImage: "url(https://images.unsplash.com/photo-1690983322857-0811d47fedfc?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat",
                minHeight: "50vh",
                marginTop: 0

            }}
        >
            <h1

                style = {{

                    fontSize:
                        window.innerWidth <= 768 ? "35px" : "60px",
                    color: "#ffffff",
                    marginBottom: "20px",
                    textAlign: "center",
                    paddingTop: "100px"

                }}

            >

                Get Delicious Food Anytime

            </h1>

            <p

                style={{

                    fontSize:
                        window.innerWidth <= 768
                        ? "20px"
                        : "22px",
                    color: "#f5f5f5",
                    maxWidth: "700px",
                    margin: "auto",
                    lineHeight:
                        window.innerWidth <= 768
                        ? "28px"
                        : "35px",
                    marginBottom: "30px",
                    marginTop: "30px"

                }}

            >

                Eat Smart & healthy

            </p>

            <button

                style={{

                    backgroundColor: "#d0b200",
                    color: "white",
                    border: "none",
                    padding: "15px 35px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginRight: "10px",
                    width:
                        window.innerWidth <= 768
                        ? "180px"
                        : "auto"

                }}

            >

                View Menu

            </button>

            <button

                style={{

                    backgroundColor: "transparent",
                    color: "#d0b200",
                    borderColor: "#d0b200",
                    padding: "15px 35px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginTop: "5px",
                    width:
                        window.innerWidth <= 768
                        ? "180px"
                        : "auto"

                }}

            >

                View Menu

            </button>
        </div>
    );
}

export default Home