import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function NewArrivals() {
  const [postProduct, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cosmetics"]{
        title,
        slug,
        defaultProductVariant{
          "imageUrl": images[0].asset->url,
          price
        },
        tags
      }`
      )
      .then((product) => setPost(product))
      .catch(console.error);
  }, []);

  return (
    <div className="headers">
      <h1>New Arrivals!</h1>
      <div className="newarrivals">
        {postProduct &&
          postProduct.map((product, index) => {
            if (product.tags[0] == "newarrivals") {
              return (
                <article>
                  <Link
                    to={"/product/" + product.slug.current}
                    key={product.slug.current}
                  >
                    <span key={index}>
                      <img src={product.defaultProductVariant.imageUrl} />
                      <h3 className="productTitle">
                        {product.tags[1] + " " + product.title}
                      </h3>
                    </span>
                  </Link>
                  <p>{product.defaultProductVariant.price + "kr"}</p>
                  <h4 className="stars">*****</h4>
                  <button>Add to cart</button>
                </article>
              );
            }
            return;
          })}
      </div>
    </div>
  );
}
