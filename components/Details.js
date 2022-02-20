import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import featuredImg from "../public/images/img.jpg";
import Link from "next/link";
import { data } from "../util/data"; // Name variables very well, What the heck is data
import { GlobalContext } from "../helper/context/Provider";
import { CART_SUCCESS } from "../helper/context/actionsType/actiontypes";

export default function Details() {
  const { cartState, cartDispatch } = useContext(GlobalContext);
  const { cart } = cartState;
  const [featured, setFeatured] = useState({}); // Featured what?

  useEffect(() => {
    // const when you are not reassinging
    let product = data.products.filter((item) => {
      return item.featured;
    });
    // You can use .find here since all you want is the first one and the loop will break when it gets the first
    setFeatured(product[0]);
  }, []);

  const handleAddToCart = (product) => {
    // The cart variable below should be named `cartProduct`
    let products = [...cart, product];
    cartDispatch({
      // push product to global state // This comment is useless
      type: CART_SUCCESS,
      loading: false, // The loading state should be inferred by the reducer, it doesn't need to live here
      payload: products,
    });
  };

  // Weird, An actualy loading state should be used here
  if (Object.keys(featured).length == 0) {
    return <div className="py-4">Loading...</div>;
  } else // Else is not doing anything
    return (
      <section className="details">
        <div className="details__header flex justify-between items-center flex-wrap">
          <h4>{featured.name}</h4>
          <input 
          // Why not a button tag
            type="button"
            value="ADD TO CART"
            onClick={() => handleAddToCart(featured)}
          />
        </div>
        <div>
          <div className="details__image">
            <Image
              src={featured.image.src}
              width={1290}
              height={553}
              blurDataURL={featured.image.src}
              placeholder="blur"
              layout="intrinsic"
              alt={featured.image.alt}
            />
            <span>Photo of the day</span>
          </div>
          <input
            className="details__mobile-btn"
            type="button"
            value="ADD TO CART"
            onClick={() => handleAddToCart(featured)}
          />
          <div className="details__description-container flex justify-between flex-wrap">
            <div className="details__description">
              <h5>About {featured.name}</h5>
              <h6>{featured.category}</h6>
              <p>{featured.details.description}</p>
            </div>
            <div className="details__related grid justify-end">
              <h5>People also buy</h5>
              <div className="flex details__product">
                {/* Shouldn't this be a loop */}
                <Link href="/">
                  <a>
                    <Image
                      src="/images/item1.jpg"
                      alt="product"
                      width={117}
                      height={147}
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/item2.jpg"
                      alt="product"
                      width={117}
                      height={147}
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/item4.jpg"
                      alt="product"
                      width={117}
                      height={147}
                    />
                  </a>
                </Link>
              </div>
              <h5 className="h5">Details</h5>
              <p>
                Size: {featured.details.dimmentions.width} x{" "}
                {featured.details.dimmentions.height} pixel
              </p>
              <p>Size: {Math.floor(featured.details.size * 0.001)} mb</p>
            </div>
          </div>
        </div>
      </section>
    );
}
