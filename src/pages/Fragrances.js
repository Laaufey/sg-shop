import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Fragrances(props) {
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
    <main className="fragrance pageStructure">
      {console.log(cartArray)}
      <h1 className="pageName">Fragrances</h1>
      <div className="showProducts">
        {postProduct &&
          postProduct.map((product, index) => {
            if (product.tags[2] == "fragrance") {
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
                  <button onClick={() => handleIncrement(product.slug.current)}>
                    Add to cart
                  </button>
                </article>
              );
            }
            return;
          })}
      </div>
    </main>
  );
}

// import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import sanityClient from "../client";

//export default function Fragrances() {
//const [postData, setPost] = useState(null);

//useEffect(() => {
//sanityClient
//.fetch(
//`*[_type == "product"]{
//title,
//slug,
//categories,
//defaultProductVariant{
//"imageUrl": images.asset->url,
// price
//}
//}`
// )
//.then((data) => setPost(data))
//.catch(console.error);
//}, []);

//return (
//<main>
//<section>
//<h1>Fragrances Page!</h1>
//<h2>Products</h2>
//<div>
// {postData &&
// postData.map((product, index) => (
// <article>
// {console.log(product.defaultProductVariant)}
//<Link
//   to={"/product/" + product.slug.current}
//  key={product.slug.current}
// >
// <span key={index}>
//  <img
//   src={product.defaultProductVariant.imageUrl}
//  alt={product.title}
// />
// <span>
// <h3>{product.title}</h3>
// <h3></h3>
// </span>
//  </span>
//  </Link>

//  <h4>price: {product.defaultProductVariant.price} </h4>
//   </article>
//   ))}
//  </div>
//  </section>
//  </main>
// );
// }
