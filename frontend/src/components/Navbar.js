import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div
        style={{
            background:"white",
            padding:"20px 60px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            position:"sticky",
            top:"0",
            zIndex:"1000",
            boxShadow:"0 2px 20px rgba(0,0,0,0.05)"
        }}
        >

            <Link
            to="/"
            style={{
                textDecoration:"none",
                fontSize:"32px",
                fontWeight:"bold",
                color:"#4f46e5"
            }}
            >

                UJ TRADING

            </Link>

            <div
            style={{
                display:"flex",
                gap:"30px"
            }}
            >

                <Link
                to="/"
                style={linkStyle}
                >

                    Home

                </Link>

                <Link
                to="/admin"
                style={linkStyle}
                >

                    Admin

                </Link>

            </div>

        </div>

    );

}

const linkStyle = {

    textDecoration:"none",

    color:"#334155",

    fontSize:"18px",

    fontWeight:"500"

};

export default Navbar;