import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import SingleProduct from "./SingleProduct";

export default function Makeup(props) {
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
        <div className="filters">
          <h2>Filters</h2>

          <label>
            <h3>Brand</h3>
            <input name="brand" type="radio" />
            All
            <br />
            <input name="brand" type="radio" />
            Chanel
            <br />
            <input name="brand" type="radio" />
            Guerlain
            <br />
            <input name="brand" type="radio" />
            Lancôme
            <br />
            <input name="brand" type="radio" />
            Biotherm
            <br />
            <input name="brand" type="radio" />
            Bioeffect
            <br />
            <input name="brand" type="radio" />
            Helena Rubinstein
            <br />
            <input name="brand" type="radio" />
            Elizabeth Arden
          </label>

          <label>
            <h3>Type</h3>
            <input name="type" type="radio" />
            All
            <br />
            <input name="type" type="radio" />
            Face
            <br />
            <input name="type" type="radio" />
            Eyes
            <br />
            <input name="type" type="radio" />
            Lips
            <br />
            <input name="type" type="radio" />
            Body
          </label>

          <label>
            <h3>Colours</h3>
            <input name="cat" type="radio" />
            All
            <br />
            <input name="cat" type="radio" />
            Black
            <br />
            <input name="cat" type="radio" />
            White
            <br />
            <input name="cat" type="radio" />
            Beige
            <br />
            <input name="cat" type="radio" />
            Red
            <br />
            <input name="cat" type="radio" />
            Blue
            <br />
            <input name="cat" type="radio" />
            Yellow
            <br />
            <input name="cat" type="radio" />
            Pink
          </label>
        </div>
        <div>
          <h1 className="pageName">Makeup</h1>
          <div className="showProducts">
            {postProduct &&
              postProduct.map((product, index) => {
                if (product.tags[2] == "makeup") {
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
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
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
        </div>
      </section>
    </main>
  );
}
