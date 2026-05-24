import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Admin() {

    // CHECK TOKEN

    const token = localStorage.getItem("token");

    if(!token){

        window.location.href = "/login";

    }

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    const imageRef = useRef();

    const [orders,setOrders] = useState([]);
    const [products,setProducts] = useState([]);

    // FETCH PRODUCTS

    const fetchProducts = async ()=>{

        try {

            const res = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(res.data);

        } catch(err) {

            console.log(err);

        }

    };

    // ADD PRODUCT

    const addProduct = async (e)=>{

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name",name);

            formData.append("price",price);

            formData.append(
                "description",
                description
            );

            formData.append(
                "image",
                imageRef.current.files[0]
            );

            await axios.post(

                "http://localhost:5000/api/products",

                formData,

                {

                    headers:{

                        "Content-Type":
                        "multipart/form-data",

                        authorization:
                        localStorage.getItem("token")

                    }

                }

            );

            alert("Product Added");

            setName("");
            setPrice("");
            setDescription("");

            fetchProducts();

        } catch(err) {

            console.log(err);

        }

    };

    // DELETE PRODUCT

    const deleteProduct = async (id)=>{

        try {

            await axios.delete(

                `http://localhost:5000/api/products/${id}`,

                {

                    headers:{

                        authorization:
                        localStorage.getItem("token")

                    }

                }

            );

            fetchProducts();

        } catch(err) {

            console.log(err);

        }

    };

    // LOAD DATA

    useEffect(()=>{

        fetchProducts();

        axios.get(

            "http://localhost:5000/api/orders",

            {

                headers:{

                    authorization:
                    localStorage.getItem("token")

                }

            }

        )

        .then((res)=>{

            setOrders(res.data);

        })

        .catch((err)=>{

            console.log(err);

        });

    },[]);

    return (

        <div
        style={{
            width:"900px",
            margin:"50px auto"
        }}
        >

            <h1>

                Admin Panel

            </h1>

            {/* FORM */}

            <form onSubmit={addProduct}>

                <input
                placeholder="Product Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                style={{
                    width:"100%",
                    padding:"10px",
                    marginBottom:"10px"
                }}
                />

                <input
                placeholder="Price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                style={{
                    width:"100%",
                    padding:"10px",
                    marginBottom:"10px"
                }}
                />

                {/* IMAGE FILE */}

                <input
                type="file"
                ref={imageRef}
                style={{
                    marginBottom:"20px"
                }}
                />

                <textarea
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                style={{
                    width:"100%",
                    padding:"10px",
                    marginBottom:"10px",
                    height:"100px"
                }}
                />

                <button
                style={{
                    padding:"10px 20px",
                    background:"#6366f1",
                    color:"white",
                    border:"none",
                    borderRadius:"10px",
                    cursor:"pointer"
                }}
                >

                    Add Product

                </button>

            </form>

            <hr
            style={{
                margin:"50px 0"
            }}
            />

            {/* PRODUCTS */}

            <h1>

                Products

            </h1>

            {

                products.map((product)=>(

                    <div
                    key={product._id}
                    style={{
                        border:"1px solid #ddd",
                        borderRadius:"15px",
                        padding:"20px",
                        marginBottom:"20px",
                        background:"white",
                        boxShadow:
                        "0 5px 15px rgba(0,0,0,0.05)"
                    }}
                    >

                        <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            width:"120px",
                            borderRadius:"10px",
                            marginBottom:"10px"
                        }}
                        />

                        <h3>

                            {product.name}

                        </h3>

                        <p>

                            ৳ {product.price}

                        </p>

                        <button
                        onClick={()=>
                            deleteProduct(product._id)
                        }
                        style={{
                            background:"red",
                            color:"white",
                            border:"none",
                            padding:"10px 20px",
                            borderRadius:"10px",
                            cursor:"pointer"
                        }}
                        >

                            Delete

                        </button>

                    </div>

                ))

            }

            <hr
            style={{
                margin:"50px 0"
            }}
            />

            {/* ORDERS */}

            <h1>

                Orders

            </h1>

            {

                orders.map((order)=>(

                    <div
                    key={order._id}
                    style={{
                        border:"1px solid #ddd",
                        borderRadius:"15px",
                        padding:"20px",
                        marginBottom:"20px",
                        background:"white",
                        boxShadow:
                        "0 5px 15px rgba(0,0,0,0.05)"
                    }}
                    >

                        <h3>

                            Product:
                            {order.product}

                        </h3>

                        <p>

                            Customer:
                            {order.name}

                        </p>

                        <p>

                            Mobile:
                            {order.mobile}

                        </p>

                        <p>

                            Quantity:
                            {order.quantity}

                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default Admin;