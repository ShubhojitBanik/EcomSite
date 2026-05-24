import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductList() {

    const [products,setProducts] = useState([]);
    const [filtered,setFiltered] = useState([]);

    const [search,setSearch] = useState("");

    useEffect(()=>{

        axios.get("https://ujtrading-backend.onrender.com/api/products")
        .then((res)=>{

            setProducts(res.data);

            setFiltered(res.data);

        })

        .catch((err)=>{

            console.log(err);

        });

    },[]);

    // SEARCH

    useEffect(()=>{

        const result = products.filter((product)=>

            product.name
            .toLowerCase()
            .includes(search.toLowerCase())

        );

        setFiltered(result);

    },[search,products]);

    return (

        <div>

            {/* SEARCH BAR */}

            <div
            style={{
                textAlign:"center",
                marginBottom:"30px"
            }}
            >

                <input
                placeholder="Search products..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                style={{
                    width:"400px",
                    padding:"15px",
                    borderRadius:"10px",
                    border:"1px solid gray",
                    fontSize:"16px"
                }}
                />

            </div>

            {/* PRODUCTS */}

            <div
            style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"30px",
                padding:"20px"
            }}
            >

                {

                    filtered.map((product)=>(

                        <ProductCard
                        key={product._id}
                        product={product}
                        />

                    ))

                }

            </div>

        </div>

    );

}

export default ProductList;