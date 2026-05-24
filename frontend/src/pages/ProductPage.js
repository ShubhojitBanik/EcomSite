import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {

    const { id } = useParams();

    const [product,setProduct] = useState(null);

    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");

    const [quantity,setQuantity] = useState(1);

    useEffect(()=>{

        axios.get(
            "http://localhost:5000/api/products"
        )

        .then((res)=>{

            const found = res.data.find(
                (p)=>p._id === id
            );

            setProduct(found);

        })

        .catch((err)=>{

            console.log(err);

        });

    },[id]);

    // PLACE ORDER

    const placeOrder = async ()=>{

        try {

            await axios.post(

                "http://localhost:5000/api/orders",

                {
                    product:product.name,
                    name,
                    mobile,
                    quantity
                }

            );

            alert("Order Placed");

            setName("");
            setMobile("");

        } catch(err) {

            console.log(err);

        }

    };

    if(!product) {

        return <h1>Loading...</h1>;

    }

    return (

        <div
        style={{
            width:"1100px",
            margin:"50px auto",
            display:"flex",
            gap:"60px",
            background:"white",
            padding:"40px",
            borderRadius:"20px",
            boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)"
        }}
        >

            {/* IMAGE */}

            <div>

                <img
                src={product.image}
                alt={product.name}
                style={{
                    width:"500px",
                    height:"550px",
                    objectFit:"cover",
                    borderRadius:"20px"
                }}
                />

            </div>

            {/* DETAILS */}

            <div
            style={{
                flex:"1"
            }}
            >

                <h1
                style={{
                    fontSize:"45px",
                    marginBottom:"20px",
                    color:"#0f172a"
                }}
                >

                    {product.name}

                </h1>

                <h2
                style={{
                    color:"#6366f1",
                    marginBottom:"25px",
                    fontSize:"35px"
                }}
                >

                    ৳ {product.price}

                </h2>

                <p
                style={{
                    color:"#475569",
                    lineHeight:"1.8",
                    marginBottom:"30px"
                }}
                >

                    {product.description}

                </p>

                {/* QUANTITY */}

                <h3
                style={{
                    marginBottom:"15px"
                }}
                >

                    Quantity

                </h3>

                <div
                style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"15px",
                    marginBottom:"30px"
                }}
                >

                    <button
                    onClick={()=>
                        quantity > 1 &&
                        setQuantity(quantity - 1)
                    }
                    style={qtyBtn}
                    >
                        -
                    </button>

                    <h2>

                        {quantity}

                    </h2>

                    <button
                    onClick={()=>
                        setQuantity(quantity + 1)
                    }
                    style={qtyBtn}
                    >
                        +
                    </button>

                </div>

                {/* INPUTS */}

                <input
                placeholder="Your Name"
                value={name}
                onChange={(e)=>
                    setName(e.target.value)
                }
                style={inputStyle}
                />

                <input
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e)=>
                    setMobile(e.target.value)
                }
                style={inputStyle}
                />

                {/* BUY BUTTON */}

                <button
                onClick={placeOrder}
                style={{
                    width:"100%",
                    padding:"18px",
                    border:"none",
                    borderRadius:"14px",
                    background:"#6366f1",
                    color:"white",
                    fontSize:"18px",
                    fontWeight:"bold",
                    cursor:"pointer",
                    marginTop:"10px"
                }}
                >

                    Buy Now

                </button>

            </div>

        </div>

    );

}

// STYLES

const qtyBtn = {

    width:"45px",

    height:"45px",

    border:"none",

    borderRadius:"12px",

    background:"#6366f1",

    color:"white",

    fontSize:"22px",

    cursor:"pointer"

};

const inputStyle = {

    width:"100%",

    padding:"15px",

    borderRadius:"12px",

    border:"1px solid #cbd5e1",

    marginBottom:"15px",

    fontSize:"16px"

};

export default ProductPage;