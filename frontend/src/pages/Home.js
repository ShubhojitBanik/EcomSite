import ProductList from "../components/ProductList";

function Home() {

    return (

        <div
        style={{
            background:"#f8fafc",
            minHeight:"100vh"
        }}
        >

            {/* HERO */}

            <div
            style={{
                padding:"100px 20px",
                textAlign:"center",
                background:
                "linear-gradient(to right,#dbeafe,#f0f9ff,#fae8ff)"
            }}
            >

                <h1
                style={{
                    fontSize:"70px",
                    color:"#0f172a",
                    marginBottom:"20px"
                }}
                >

                    UJ TRADING
                    

                </h1>

                <p
                style={{
                    fontSize:"22px",
                    color:"#475569",
                    marginBottom:"30px"
                }}
                >

                    Modern Product Store

                </p>

                <button
                style={{
                    padding:"14px 40px",
                    border:"none",
                    borderRadius:"50px",
                    background:"#6366f1",
                    color:"white",
                    fontSize:"18px",
                    cursor:"pointer",
                    boxShadow:
                    "0 10px 30px rgba(99,102,241,0.3)"
                }}
                >

                    Explore Products

                </button>

            </div>

            {/* FEATURE TAGS */}

            <div
            style={{
                display:"flex",
                justifyContent:"center",
                gap:"20px",
                flexWrap:"wrap",
                padding:"40px 20px"
            }}
            >

                <div style={tagStyle}>
                    Fast Delivery
                </div>

                <div style={tagStyle}>
                    Premium Quality
                </div>

                <div style={tagStyle}>
                    Trusted Seller
                </div>

                <div style={tagStyle}>
                    Best Prices
                </div>

            </div>

            {/* PRODUCTS */}

            <div
            style={{
                padding:"20px"
            }}
            >

                <h1
                style={{
                    textAlign:"center",
                    color:"#0f172a",
                    marginBottom:"50px",
                    fontSize:"45px"
                }}
                >

                    Featured Products

                </h1>

                <ProductList />

            </div>

        </div>

    );

}

const tagStyle = {

    background:"white",

    padding:"18px 35px",

    borderRadius:"14px",

    fontWeight:"600",

    color:"#334155",

    boxShadow:
    "0 5px 20px rgba(0,0,0,0.06)"

};

export default Home;