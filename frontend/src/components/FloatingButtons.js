function FloatingButtons() {

    return (

        <div
        style={{
            position:"fixed",
            right:"20px",
            bottom:"20px",
            display:"flex",
            flexDirection:"column",
            gap:"15px",
            zIndex:"9999"
        }}
        >

            <a
            href="https://m.me/"
            target="_blank"
            rel="noreferrer"
            style={messengerStyle}
            >
                💬
            </a>

            <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noreferrer"
            style={whatsappStyle}
            >
                🟢
            </a>

            <a
            href="tel:+8801700000000"
            style={callStyle}
            >
                📞
            </a>

        </div>

    );

}

const baseStyle = {

    width:"60px",

    height:"60px",

    borderRadius:"50%",

    display:"flex",

    justifyContent:"center",

    alignItems:"center",

    fontSize:"28px",

    textDecoration:"none",

    color:"white",

    boxShadow:"0 5px 20px rgba(0,0,0,0.2)"

};

const messengerStyle = {

    ...baseStyle,

    background:"#3b82f6"

};

const whatsappStyle = {

    ...baseStyle,

    background:"#22c55e"

};

const callStyle = {

    ...baseStyle,

    background:"#14b8a6"

};

export default FloatingButtons;