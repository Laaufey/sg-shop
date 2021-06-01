import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Popup from "../components/popup";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleProduct(props) {
  const [singleProduct, setSingleProduct] = useState(null);
  const { slug } = useParams();
  const [status, setStatus] = useState(true);

  const handleIncrement = () => {
    props.editCartItems(slug, 1);
    setIsOpen(!isOpen);
  };
  const closePopup = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      blurb,
      slug,
      variants{
        "imagesUrl": images.asset->url
      },
      defaultProductVariant{
        "imageUrl": images[0].asset->url,
        "extraImg": images[1].asset->url,
        price,
        sku
      },
      tags,
      body
    }`
      )
      .then((product) => setSingleProduct(product[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProduct) return <div>Loading...</div>;
  return (
    <main>
      {isOpen && (
        <Popup singleProduct={singleProduct} handleClose={closePopup} />
      )}
      <article className="singleProductPage">
        <div>
          <img
            className="singleImg"
            src={singleProduct.defaultProductVariant.imageUrl}
          />
        </div>
        <div>
          <div className="aboutProduct">
            <h1>{singleProduct.title}</h1>
            <h2>{singleProduct.defaultProductVariant.price + "kr"}</h2>

            <h4>***** Reviews</h4>

            <button onClick={handleIncrement}>Add to cart</button>
          </div>
        </div>
        <div>
          <div className="filtering">
            <li>
              <button onClick={() => setStatus(true)}>Description</button>
            </li>
            <li>
              <button onClick={() => setStatus(false)}>Ingrediants</button>
            </li>
          </div>
          {status ? (
            <div className="show">
              <BlockContent
                blocks={singleProduct.body.en}
                projectId="22c4orwp"
                dataset="production"
              />
            </div>
          ) : (
            <div className="show">
              <p>{singleProduct.defaultProductVariant.sku}</p>
            </div>
          )}
        </div>
        <div>
          <img
            src={singleProduct.defaultProductVariant.extraImg}
            className="extraImg"
          />
        </div>
      </article>
    </main>
  );
}
