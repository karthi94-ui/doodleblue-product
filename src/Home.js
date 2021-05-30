import React, { useState, useEffect } from "react";
import "./Home.css";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header/Header";
import ProductList from "./Components/Products/ProductList";
import TopProductList from "./Components/Products/TopProductList";
import SliderInput from "./Components/utlis/SliderInput";
import Pagination from "@material-ui/lab/Pagination";
function Home() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const loadPosts = () => {
    const currentPosts = productDetails.slice((-1 + page) * 9, 9 * page);
    console.log("current", currentPosts);
    console.log("page", (-1 + page) * 9, 9 * page);
    setPosts(currentPosts);
  };
  const [priceRange, setPriceRange] = useState([20, 599]);
  const [filterCategory, setFilterCategory] = useState("default");
  const productCategory = ["Laptop", "Band", "Smart Phone", "Tablet"];
  const [productDetails, setProductDetails] = useState([
    {
      productTitle: "Lenovo Flex",
      productPrice: 309,
      productCategory: "Laptop",
      isTopProduct: false,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg",
    },
    {
      productTitle: "Acer Aspire 5 Slim",
      productPrice: 289,
      productCategory: "Laptop",
      isTopProduct: false,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81vNRgHlqGL._AC_SL1500_.jpg",
    },
    {
      productTitle: "Asus Ultra Thin",
      productPrice: 339,
      productCategory: "Laptop",
      isTopProduct: false,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71%2BqrXP--vL._AC_SL1500_.jpg",
    },
    {
      productTitle: "HP Stream ",
      productPrice: 273,
      productCategory: "Laptop",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81RCOr3hJOL._AC_SL1500_.jpg",
    },
    {
      productTitle: "FitBit Band",
      productPrice: 80,
      productCategory: "Band",
      isTopProduct: false,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      productTitle: "Xiaomi Mi Band 5",
      productPrice: 110,
      productCategory: "Band",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51mhkH7H50L._AC_SL1000_.jpg",
    },
    {
      productTitle: "Amazfit Band 5 ",
      productPrice: 90,
      productCategory: "Band",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61xSjdpeU0L._AC_SL1500_.jpg",
    },
    {
      productTitle: "FITWORTH High End",
      productPrice: 70,
      productCategory: "Band",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71WIbmpS1xS._AC_SL1500_.jpg",
    },
    {
      productTitle: "Nokia 5.4",
      productPrice: 249,
      productCategory: "Smart Phone",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/611EqT4FLzL._AC_SL1500_.jpg",
    },
    {
      productTitle: "Google Pixel 4a",
      productPrice: 319,
      productCategory: "Smart Phone",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._AC_SL1500_.jpg",
    },
    {
      productTitle: "Samsung Galaxy A21",
      productPrice: 194,
      productCategory: "Smart Phone",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61pwE8H34zL._AC_SL1000_.jpg",
    },
    {
      productTitle: "Xiaomi Redmi Note 8 Pro",
      productPrice: 204,
      productCategory: "Smart Phone",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/819X9bJV3zL._AC_SL1500_.jpg",
    },
    {
      productTitle: "Fire 7 tablet",
      productPrice: 109,
      productCategory: "Tablet",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71POuqajw1L._AC_SL1500_.jpg",
    },
    {
      productTitle: "Samsung Galaxy Tab A 8.0",
      productPrice: 128,
      productCategory: "Tablet",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61Rjge5oR1L._AC_SL1500_.jpg",
    },
    {
      productTitle: "Windows 10 Fusion5",
      productPrice: 219,
      productCategory: "Tablet",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71BxfoVwLlL._AC_SL1500_.jpg",
    },
    {
      productTitle: "VANKYO MatrixPad P31",
      productPrice: 179,
      productCategory: "Tablet",
      isTopProduct: true,
      productImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71L3sI8B5vL._AC_SL1500_.jpg",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(productDetails);
  function setFilter(category) {
    setFilterCategory(category);
    let filteredProducts = productDetails.filter((product) => {
      if (product.productCategory === category || category === "default") {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(filteredProducts);
    console.log(filteredProducts);
  }
  function filterProducts() {
    let filteredProducts = productDetails.filter((product) => {
      if (
        product.productCategory === filterCategory ||
        filterCategory === "default"
      ) {
        if (
          product.productPrice >= priceRange[0] &&
          product.productPrice <= priceRange[1]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    setFilteredProducts(filteredProducts);
  }
  useEffect(() => {
    loadPosts();
    console.log("useeffect", page, posts);
  }, [page]);
  return (
    <div>
      <div className="Header-container">
        <Header
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      <div className="main-container">
        <div className="side-container">
          <Categories productCategory={productCategory} setFilter={setFilter} />
          <SliderInput
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            filterProducts={filterProducts}
          />
          {console.log(priceRange)}
          <TopProductList productDetails={productDetails} />
        </div>
        <div className="product-container">
          <ProductList filteredProducts={posts} />
        </div>
      </div>
      <div className="footer-container">
        {/* {posts.map((post) => (
          <Grid item sm={3} key={post.id}>
            <Card style={{ height: 250 }}>
              <CardContent>
                <Typography>
                  {post.id}.{post.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))} */}
        <Pagination
          count={Math.ceil(filteredProducts.length / 9)}
          color="secondary"
          shape="rounded"
          default={page}
          hidePrevButton={true}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
