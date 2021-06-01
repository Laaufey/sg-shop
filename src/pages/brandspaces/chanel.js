import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";

export default function Chanel(props) {
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
    <main className="Makeup pageStructure">
      {console.log(cartArray)}
      <section>
        <h1 className="pageName">Chanel</h1>
        <div className="showProducts">
          {postProduct &&
            postProduct.map((product, index) => {
              if (product.tags[1] == "CHANEL") {
                return (
                  <article>
                    {console.log(product.tags)}
                    <Link
                      to={"/product/" + product.slug.current}
                      key={product.slug.current}
                    >
                      <span key={index}>
                        <img src={product.defaultProductVariant.imageUrl} />
                        <h3>{product.title}</h3>
                      </span>
                    </Link>
                    <p>{product.defaultProductVariant.price + "kr"}</p>
                    <h4>*****</h4>
                    <button
                      onClick={() => handleIncrement(product.slug.current)}
                    >
                      Add to cart
                    </button>
                  </article>
                );
              }
              return;
            })}
        </div>
      </section>
    </main>
  );
}
