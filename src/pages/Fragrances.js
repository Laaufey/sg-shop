import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Fragrances() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          title,
          slug,
          categories,
          defaultProductVariant{
            "imageUrl": images.asset->url,
            price
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1>Fragrances Page!</h1>
        <h2>Products</h2>
        <div>
          {postData &&
            postData.map((product, index) => (
              <article>
                {console.log(product.defaultProductVariant)}
                <Link
                  to={"/product/" + product.slug.current}
                  key={product.slug.current}
                >
                  <span key={index}>
                    <img
                      src={product.defaultProductVariant.imageUrl}
                      alt={product.title}
                    />
                    <span>
                      <h3>{product.title}</h3>
                      <h3></h3>
                    </span>
                  </span>
                </Link>

                <h4>price: {product.defaultProductVariant.price} </h4>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
