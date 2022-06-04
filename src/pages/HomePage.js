import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShopContext } from "../context/shopContext";

const HomePage = () => {
  const location = [
    { title: "Pune" },
    { title: "Delhi" },
    { title: "Mumbai" },
    { title: "Bangalore" },
    { title: "Goa" },
  ];
  const [showModel, setShowModel] = React.useState(true);
  const [showLocation, setShowLocation] = React.useState(true);
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  const handleFilter = () => {
    setShowModel(!showModel);
  };

  const handleLocation = () => {
    setShowLocation(!showLocation);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  if (!products) return <div>loading...</div>;

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src="https://raw.githubusercontent.com/abhinav5ag/shopify-react-headless/6d5ab9fa973c9f85d5c2584dff13e70d731cfffb/public/boongg-white-logo-full.png" />
        </Link>
      </Header>
      <DateTime />
      <FilterProducts>
        <Filters>
          <SearchModel>
            <span onClick={handleFilter}>
              SEARCH BY MODEL ({products.length})
            </span>

            <Model>
              {products.map(
                (product) =>
                  showModel && (
                    <label>
                      <input
                        type="checkbox"
                        value={product.title}
                        onClick={handleChange}
                      />
                      {product.title}
                    </label>
                  )
              )}
            </Model>
          </SearchModel>
          <SearchModel>
            <span onClick={handleLocation}>
              SEARCH BY LOCATION ({location.length})
            </span>

            <Model>
              {location.map(
                (location) =>
                  showLocation && (
                    <label>
                      <input
                        type="checkbox"
                        value={location.title}
                        onClick={handleChange}
                      />
                      {location.title}
                    </label>
                  )
              )}
            </Model>
          </SearchModel>
        </Filters>
        <Contain>
          <Quantity>Models Found: {products.length}</Quantity>
          <Products>
            {products.map((product) => (
              <Link to={`/products/${product.handle}`} key={product.id}>
                <Wrap>
                  <img src={product.images[0].src} />
                  <Price>Rs 180.00 </Price>
                  <Title>{product.title}</Title>
                  <SelectLocation>
                    <span>Select Your Nearest Location</span>{" "}
                  </SelectLocation>
                  <BookNow>Book Now</BookNow>
                  <Image>
                    <img src="phoneicon.png" />
                  </Image>
                </Wrap>
              </Link>
            ))}
          </Products>
        </Contain>
      </FilterProducts>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  overflow-x: hidden;
`;
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
  position: fixed;
  height: 100%;
`;

const SearchModel = styled.div`
  width: 80%;
  margin-top: 20px;

  span {
    margin-left: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
  }
`;

const Model = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  display: grid;
  grid-template-rows: repeat(10, minmax(0, 1fr));
  grid-gap: 6px;
  border-bottom-width: 2px;

  label {
    display: flex;
    align-items: center;
    font-size: 12px;

    input {
      margin-right: 10px;
    }
  }
`;
const Contain = styled.div`
  grid-template-rows: repeat(2, minmax(0, 1fr));
`;

const Quantity = styled.div`
  height: 55px;
  width: 100%;
  margin-left: 300px;
  margin-top: 150px;
  color: black;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  border-bottom-width: 2px;
`;

const Products = styled.div`
  margin-top: 10px;
  grid-gap: 35px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-left: 320px;
  background-image: linear-gradient(
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 100%, 0.1)
    ),
    url(https://www.boongg.com/static/media/BannerX.23d5a51f.png);
  background-size: contain;
`;

const Wrap = styled.div`
border:3px solid rgba(249, 249, 249, 0.1);

border-radius:3px;
height: 450px;
width: 350px;
box-shadow: 0 0 10px rgb(0 0 0 / 20%);
text-transform: capitalize;
background-color: #fff;
background-clip: border-box;
display: grid;
grid-template-rows: repeat(6, minmax(0, 1fr));


img {
    width:75%;
    height:60%
    object-fill:cover;
    margin-left: 35px;
    margin-top: 30px;
}
&:hover {
    
  box-shadow: 0 0 12px rgb(0 0 0 / 40%)
    }
  `;

const Price = styled.div`
  height: 34px;
  width: 100px;
  margin-top: -60px;
  margin-left: 248px;
  color: #fff;
  font-size: 1.1rem;
  background-color: #4c4b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
`;

const Title = styled.text`
  font-weight: 500;
  font-size: 18px;
  margin-top: 100px;
  margin-left: 20px;
`;

const SelectLocation = styled.div`
  height: 40px;
  width: 280px;
  border-width: 1px;
  margin-left: 30px;
  border-radius: 5px;
  border-color: rgb(170, 170, 170);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  transition: all 100ms ease 0s;

  &:hover {
    border-color: #dc3545;
  }
  span {
    margin-left: -60px;
    color: rgb(128, 128, 128);
    font-family: "Source Sans Pro", sans-serif;
  }
`;

const BookNow = styled.button`
  background: #dc3545;
  border-radius: 5px;
  border-color: #dc3545;
  height: 50px;
  width: 160px;
  color: #fff;
  margin-top: 40px;
  margin-left: 90px;
`;

const Image = styled.div`
  margin-left: 260px;
  margin-top: -5px;
  height: 50px;
  width: 50px;
`;
