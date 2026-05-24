import ProductList from "../components/ProductList";

function Home() {

    return (

        <div
        style={{
            background:"#f8fafc",
            minHeight:"100vh"
        }}
        >

            {/* HERO SECTION */}

            <div
            style={{
                minHeight:"55vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                background:
                "linear-gradient(135deg,#eef2ff,#f8fafc,#fdf2f8)",
                borderRadius:"0 0 40px 40px",
                padding:"40px 20px",
                position:"relative",
                overflow:"hidden"
            }}
            >

                {/* GLOW EFFECTS */}

                <div
                style={{
                    width:"300px",
                    height:"300px",
                    background:"#818cf8",
                    opacity:"0.15",
                    borderRadius:"50%",
                    position:"absolute",
                    top:"-100px",
                    left:"-100px",
                    filter:"blur(80px)",
                    animation:"float 6s ease-in-out infinite"
                }}
                />

                <div
                style={{
                    width:"250px",
                    height:"250px",
                    background:"#c084fc",
                    opacity:"0.15",
                    borderRadius:"50%",
                    position:"absolute",
                    bottom:"-80px",
                    right:"-80px",
                    filter:"blur(80px)",
                    animation:"float2 8s ease-in-out infinite"
                }}
                />

                <h1
                style={{
                    fontSize:"80px",
                    fontWeight:"800",
                    color:"#0f172a",
                    marginBottom:"10px",
                    zIndex:"2",
                    animation:"fadeUp 1s ease"
                }}
                >

                    UJ TRADING

                </h1>

                <p
                style={{
                    fontSize:"26px",
                    color:"#475569",
                    marginBottom:"35px",
                    zIndex:"2",
                    animation:"fadeUp 1.3s ease"
                }}
                >

                    Modern Product Store

                </p>

                <button
                style={{
                    padding:"18px 45px",
                    border:"none",
                    borderRadius:"999px",
                    background:
                    "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    color:"white",
                    fontSize:"18px",
                    fontWeight:"600",
                    cursor:"pointer",
                    boxShadow:
                    "0 10px 30px rgba(99,102,241,0.35)",
                    transition:"0.3s",
                    zIndex:"2",
                    animation:"fadeUp 1.6s ease"
                }}
                onMouseOver={(e)=>{

                    e.target.style.transform =
                    "translateY(-4px) scale(1.03)";

                }}
                onMouseOut={(e)=>{

                    e.target.style.transform =
                    "translateY(0px)";

                }}
                >

                    Explore Products

                </button>

                {/* ANIMATIONS */}

                <style>{`

                    @keyframes fadeUp {

                        from {

                            opacity:0;
                            transform:translateY(40px);

                        }

                        to {

                            opacity:1;
                            transform:translateY(0);

                        }

                    }

                    @keyframes float {

                        0% {

                            transform:translateY(0px);

                        }

                        50% {

                            transform:translateY(20px);

                        }

                        100% {

                            transform:translateY(0px);

                        }

                    }

                    @keyframes float2 {

                        0% {

                            transform:translateY(0px);

                        }

                        50% {

                            transform:translateY(-20px);

                        }

                        100% {

                            transform:translateY(0px);

                        }

                    }

                `}</style>

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
    "0 5px 20px rgba(0,0,0,0.06)",

    transition:"0.3s",

    cursor:"pointer"

};

export default Home;