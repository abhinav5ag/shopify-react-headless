import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShopContext } from "../context/shopContext";

const HomePage = () => {
  const [showModel, setShowModel] = React.useState(true);
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  const handleFilter = () => {
    setShowModel(!showModel);
  };

  if (!products) return <div>loading...</div>;

  return (
    <Container>
      <Header>
        <img src="https://raw.githubusercontent.com/abhinav5ag/shopify-react-headless/6d5ab9fa973c9f85d5c2584dff13e70d731cfffb/public/boongg-white-logo-full.png" />
      </Header>
      <DateTime />
      <FilterProducts>
        <Filters>
          <SearchModel>
            <span onClick={handleFilter}>
              Search by model({products.length})
            </span>

            <Model>
              {products.map(
                (product) => showModel && <Title>{product.title}</Title>
              )}
            </Model>
          </SearchModel>
        </Filters>

        <Products>
          {products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Wrap>
                <img src={product.images[0].src} />
                <Title>{product.title}</Title>
                <BookNow>Book Now</BookNow>
              </Wrap>
            </Link>
          ))}
        </Products>
      </FilterProducts>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
const Header = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #e82231;
  box-shadow: 0 5px 10px rgb(0 0 0 / 30%);

  img {
    height: 50px;
    width: 140px;
    margin-left: 200px;
    margin-top: 10px;
  }
`;

const DateTime = styled.div`
  margin-top: 55px;
  background-color: #eee;
  min-height: 70px;
  box-shadow: 0 8px 6px -6px #ccc;
  position: fixed;
  width: 100%;
  z-index: 20;
`;

const FilterProducts = styled.div`
  display: flex;
`;

const Filters = styled.div`
  width: 260px;
  background-color: #fff;
  box-shadow: 0 0 12px rgb(0 0 0 / 40%);
  margin-top: 125px;
`;

const SearchModel = styled.div`
  width: 80%;
  margin-top: 10px;

  span {
    cursor: pointer;
  }
`;

const Model = styled.div`
  display: block;
`;

const Products = styled.div`
  margin-top: 130px;
  grid-gap: 35px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-left: 35px;
  background-image: linear-gradient(
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 100%, 0.1)
    ),
    url(https://www.boongg.com/static/media/BannerX.23d5a51f.png);
  background-size: contain;
`;

const Wrap = styled.div`
border:3px solid rgba(249, 249, 249, 0.1);
cursor:pointer;
border-radius:3px;
height: 400px;
width: 350px;
box-shadow: 0 0 10px rgb(0 0 0 / 20%);
text-transform: capitalize;
background-color: #fff;
background-clip: border-box;
display: block;


img {
    width:80%;
    height:70%
    object-fill:cover;
    margin-left: 35px;
}
&:hover {
    
  box-shadow: 0 0 12px rgb(0 0 0 / 40%)
    }
  `;
const Title = styled.text``;

const BookNow = styled.button`
  background: #e82231;
  border-radius: 5px;
  height: 50px;
  width: 160px;
  color: #fff;
`;
