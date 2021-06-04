import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
//import banner from "../../media/brandImages/guerlain-longbanner.jpg";
export default function Guerlain(props) {
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
        <h1 className="guerlain brandspace">Guerlain</h1>
        <div className="showProducts">
          {postProduct &&
            postProduct.map((product, index) => {
              if (product.tags[1] == "GUERLAIN") {
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
                    <h4 className="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </h4>
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
