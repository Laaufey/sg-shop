import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Popup from "../components/popup";
import Recommended from "../components/recommended";
import Similar from "../components/similar";
import Review from "../media/Review.png";

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
    console.log(singleProduct);
    //console.log(singleProduct.variants[0].title);
    //console.log(singleProduct.variants.length);
    //console.log(singleProduct.defaultProductVariant.grams);
  };

  const handleClick = () => {
    setClick(!clicked);
  };
  const [clicked, setClick] = useState(false);
  const [openImg, setImg] = useState(false);

  const handleImg = () => {
    setImg(!openImg);
    console.log("OPEN IMG");
  };

  function Choose() {
    if (singleProduct.variants === 0) {
      return <p>N/A</p>;
    } else {
      return (
        <label className="choose">
          <p>Choose:</p>
          <select>
            <option value="1">{singleProduct.variants[0].title}</option>
            <option value="1">{singleProduct.variants[1].title}</option>
          </select>
        </label>
      );
    }
  }

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
      variants[],
      defaultProductVariant{
        title,
        grams,
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
      <img
        onClick={handleImg}
        className={openImg ? "review active" : "review"}
        src={Review}
      />
      <article className="singleProductPage">
        <div>
          <img
            className="singleImg"
            src={singleProduct.defaultProductVariant.imageUrl}
          />
        </div>
        <div className="noBorder">
          <div className="aboutProduct">
            <h3>{singleProduct.tags[1]}</h3>
            <h1>{singleProduct.title}</h1>
            <h2>{singleProduct.defaultProductVariant.price + "kr"}</h2>
            <h4 className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> <p>(48)</p>{" "}
              <p className="reviews" onClick={handleImg}>
                Read reviews
              </p>
            </h4>
            <p className="prodInfo">
              {singleProduct.defaultProductVariant.title}
            </p>
            <select>
              <option className="dd" value="1">
                50 ml
              </option>
              <option className="dd" value="2">
                30 ml
              </option>
            </select>
            <br />
            <button onClick={handleIncrement}>Add to cart</button>
          </div>
        </div>
        <div className="mobView">
          <h3 onClick={handleClick}>More description</h3>
        </div>
        <div className={clicked ? "addBorder active" : "addBorder"}>
          <div className="filtering">
            <li>
              <button onClick={() => setStatus(true)}>Description</button>
            </li>
            <li>
              <button onClick={() => setStatus(false)}>Ingredients</button>
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
        <div className={clicked ? "imgBord active" : "imgBord"}>
          <img
            src={singleProduct.defaultProductVariant.extraImg}
            className="extraImg"
          />
        </div>
      </article>
      <Recommended />
      <Similar />
    </main>
  );
}
