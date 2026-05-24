import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (

        <div
        style={{
            width:"300px",
            background:"white",
            borderRadius:"20px",
            overflow:"hidden",
            boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
            transition:"0.3s"
        }}
        >

            <img
            src={product.image}
            alt={product.name}
            style={{
                width:"100%",
                height:"320px",
                objectFit:"cover"
            }}
            />

            <div
            style={{
                padding:"25px"
            }}
            >

                <h2
                style={{
                    color:"#0f172a",
                    marginBottom:"10px"
                }}
                >

                    {product.name}

                </h2>

                <h3
                style={{
                    color:"#6366f1",
                    marginBottom:"20px"
                }}
                >

                    ৳ {product.price}

                </h3>

                <Link
                to={`/product/${product._id}`}
                >

                    <button
                    style={{
                        width:"100%",
                        padding:"14px",
                        border:"none",
                        borderRadius:"12px",
                        background:"#6366f1",
                        color:"white",
                        fontWeight:"bold",
                        cursor:"pointer"
                    }}
                    >

                        View Details

                    </button>

                </Link>

            </div>

        </div>

    );

}

export default ProductCard;