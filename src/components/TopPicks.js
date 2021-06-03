import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function TopPicks(props) {
  const [postProduct, setPost] = useState(null);
  const cartArray = props.cartItems;

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

  const handleIncrement = (slug) => {
    props.editCartItems(slug, 1);
  };

  return (
    <div className="headers">
      {console.log(cartArray)}
      <h1>Our Top Picks</h1>
      <div className="topPicks">
        {postProduct &&
          postProduct.map((product, index) => {
            if (product.tags[0] == "toppicks") {
              return (
                <article>
                  <Link
                    to={"/product/" + product.slug.current}
                    key={product.slug.current}
                  >
                    <span key={index}>
                      <img src={product.defaultProductVariant.imageUrl} />
                      <h3 className="productTitle">{product.tags[1]}</h3>
                      <h3>{product.title}</h3>
                    </span>
                  </Link>
                  <p>{product.defaultProductVariant.price + "kr"}</p>
                  <h4 className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </h4>
                  <button onClick={() => handleIncrement(product.slug.current)}>
                    Add to cart
                  </button>
                </article>
              );
            }
            return;
          })}
      </div>
    </div>
  );
}
