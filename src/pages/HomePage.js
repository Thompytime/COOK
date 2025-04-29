import React from 'react';
import './HomePage.css'; // We'll create this CSS file for homepage styling

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="/cooklogo.png"
        alt="COOK Meals Logo"
        style={{
          maxWidth: '200px',
          height: 'auto',
          marginBottom: '20px',
        }}
      />
      <h1>Our Delicious Chicken Meals</h1>
      <p>Click on a meal to learn more.</p>
      <div className="meal-list-container">
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/moroccan-spiced-harissa-chicken">
              Moroccan Spiced Harissa Chicken
            </a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_921_6564.jpg"
            alt="Moroccan Spiced Harissa Chicken"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-with-mushrooms-bacon">
              Creamy Chicken with Mushrooms & Bacon
            </a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_2283_6259.jpg"
            alt="Creamy Chicken with Mushrooms & Bacon"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/coq-au-vin">Coq au Vin</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_588_6243.jpg"
            alt="Coq au Vin"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-pea-bacon-risotto">Chicken, Pea & Bacon Risotto</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_2050_5229.jpg"
            alt="Chicken, Pea & Bacon Risotto"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-mushroom">Chicken & Portobello Mushroom Pie</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_1692_6810.jpg"
            alt="Chicken & Portobello Mushroom Pie"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-asparagus-pie">Spring Chicken & Asparagus Pie</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_1764_6815.jpg"
            alt="Spring Chicken & Asparagus Pie"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-dinosaur-pie">Kids Chicken Dinosaur Pie</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_2230_6784.jpg"
            alt="Kids Chicken Dinosaur Pie"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/coronation-chicken">Coronation Chicken</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_421_4628.jpg"
            alt="Coronation Chicken"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-tikka-masala">Chicken Tikka Masala</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_46_4294.jpg"
            alt="Chicken Tikka Masala"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-korma">Chicken Korma</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_45_6244.jpg"
            alt="Chicken Korma"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-jalfrezi">Chicken Jalfrezi</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_47_4334.jpg"
            alt="Chicken Jalfrezi"
            className="meal-image"
          />
        </div>
        <div className="meal">
          <h2 className="meal-name">
            <a href="https://www.cookfood.net/products/chicken-balti">Chicken Balti</a>
          </h2>
          <img
            src="https://assets.cookfood.net/product_2455_6382.jpg"
            alt="Chicken Balti"
            className="meal-image"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;