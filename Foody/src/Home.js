import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
  <div className="home">
      <div className="home__container">
          <img
            className="home__image"
            src="https://play-lh.googleusercontent.com/G6_0X95jT4ngXvsDhIHy0asB9zwC7Z2H978gOwDSC-CPbqm2OTlLZ-qQvBAKAQGvXjdv"
            alt=""
            />

            <div className="home__row">
                <Product 
                    id="12321458"
                    title="Burger"
                    price={140}
                    image="https://cdn.yemeksepeti.com/ProductImages/TR_ISTANBUL/momsteak/momsteakburger_20210511115657_big.jpg"
                    rating={5}
                />
                <Product
                    id="12321458"
                    title="Meatball"
                    price={60}
                    image="https://cdn.yemeksepeti.com//ProductImages/TR_ISTANBUL/sutis/kasarlikofte_20210203222033_big.jpg"
                    rating={5}
                 />
                
            </div>

            <div className="home__row">
                <Product 
                    id="B0794W1SKP"
                    title="Pizza"
                    price={85}
                    image="https://cdn.yemeksepeti.com/productimages/TR_ISTANBUL/papa_johns/pz_pepperoni_big.jpg"
                    rating={5}
                />
                <Product
                    id="123214548"
                    title="Cheesecake"
                    price={90}
                    image="https://cdn.yemeksepeti.com/ProductImages/TR_ISTANBUL/nuts_shop/nutshopbeyoglucihangirmah._baskcheesecake_20200229140257_big.jpg"
                    rating={4}
                 />
                
                 <Product
                    id="120264458"
                    title="GreenSalad"
                    price={55}
                    image="data:image/jpeg;base64,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"
                    rating={4}
                 /> 
                 <Product
                    id="120264458"
                    title="Big Mac"
                    price={35}
                    image="https://cdn.yemeksepeti.com/productimages/TR_ISTANBUL/mcdonalds/big-mag-menu_big.jpg"
                    rating={3}
                 /> 
            </div>

            <div className="home__row">
                <Product
                    id="120264458"
                    title="İce Cream"
                    price={25}
                    image="https://cdn.yemeksepeti.com/productimages/TR_ISTANBUL/mcdonalds/mcflury-kitkat_big.jpg"
                    rating={5}
                 />
                <Product
                    id="120264458"
                    title="Noodle"
                    price={100}
                    image="https://cdn.yemeksepeti.com//ProductImages/TR_ISTANBUL/onlysushi/onlysushichinesesisliergenekonmah.pangalti_sebzelinoodlevegetablenoodle_20201202001208_big.jpg"
                    rating={5}
                 />
                

                
                
            </div>
      </div>
  </div>
  );
}

export default Home;
