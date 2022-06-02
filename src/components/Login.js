import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Background>
        <LoginButton></LoginButton>
        <ImageTitle>
          <img src="https://raw.githubusercontent.com/abhinav5ag/shopify-react-headless/6d5ab9fa973c9f85d5c2584dff13e70d731cfffb/public/boongg-white-logo-full.png" />
          <h1>START YOUR DREAM ADVENTURE</h1>
          <h2>Own Experiences not Bikes</h2>
        </ImageTitle>
        <Rent>
          <span>Rent a Bike in Pune</span>
        </Rent>
        <Search>
          <Contain>
            <City>
              <span>Current City</span>
              <Name>
                <span>Pune</span>
              </Name>
            </City>
            <StartDate>
              <span>Start Date and Time</span>
              <Start>
                <span>1 June 2022 12:00 p.m.</span>
              </Start>
            </StartDate>
            <EndDate>
              <span>End Date and Time</span>
              <End>
                <span>1 June 2022 06:00 p.m.</span>
              </End>
            </EndDate>
            <RentNow>
              <Link to="/products">
                <RentButton>
                  <span>Rent Now</span>
                </RentButton>
              </Link>
            </RentNow>
          </Contain>
        </Search>
      </Background>
      <WhyChoseUs>
        <Headings>
          <h2>WHY CHOSE US?</h2>
          <h6>
            We simplified bike rentals, so you can focus on what's important to
            you.
          </h6>
        </Headings>
      </WhyChoseUs>
      <Sanatise>
        <Image>
          <img src="https://www.boongg.com/static/media/1d8(reworked).bbc6237e.png" />
          <p>We Sanatize Bike After Every Ride..!!</p>
        </Image>
        <Helmet>ABCD</Helmet>
      </Sanatise>
      <FeaturedIn></FeaturedIn>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), hsla(0, 0%, 100%, 0.1)),
    url(https://cdn.boongg.com/Images%20-%20CDN/Home/background1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;
const LoginButton = styled.button`
  border-radius: 10px;
  font-size: 15px;
  padding: 0px 14px;
  display: flex;
  margin-left: 1250px;

  align-items: center;
  height: 46px;
  background: #212529;
  opacity: 0.8;

  border: none;
  letter-spacing: 1.1px;
  cursor: pointer;
  &:hover {
    background: #dc3545;
    opacity: 1;
  }
  span {
    color: white;
    font-weight: 500;
  }
`;

const ImageTitle = styled.div`
  display: block;
  text-align: center;
  img {
    height: 150px;
    width: 390px;
    margin-left: 580px;
    margin-top: 50px;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 3px 3px grey;
    line-height: 1.2;
    margin-top: 5px;
  }
  h2 {
    margin-bottom: 0.5rem;
    font-weight: 400;
    line-height: 1.2;
    text-shadow: 0 2px 2px grey;
    font-size: 2rem;
    margin-top: 10px;
  }
`;

const Rent = styled.button`
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.5rem 0.5rem 0.1rem;
  box-shadow: 0 0 15px -2px #444;
  width: 17em;

  margin-top: 20px;
  span {
    color: #e82231;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 650;
  }
`;
const Search = styled.div`
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  color: #fff;
  border-radius: 8px;
  margin: auto;
  padding-bottom: 0.5rem;
  width: 60%;
  display: flex;
  height: 115px;
`;
const Contain = styled.div`
  display: flex;
  margin-top: 12px;
`;

const City = styled.div`
  display: block;
  align-items: center;

  span {
    margin-left: 55px;
  }
`;
const Name = styled.div`
  height: 40px;
  width: 240px;
  background: white;
  margin-top: 10px;
  margin-left: 40px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border-right-width: 3px;
  padding-top: 6px;

  span {
    margin-left: -1px;
    color: black;
  }
`;

const StartDate = styled.div`
  span {
    margin-left: 10px;
  }
`;
const Start = styled.div`
  height: 40px;
  width: 240px;
  background: white;
  margin-top: 10px;
  border-right-width: 3px;
  padding-top: 6px;

  span {
    margin-left: -1px;
    color: black;
  }
`;

const EndDate = styled.div`
  span {
    margin-left: 10px;
  }
`;
const End = styled.div`
  height: 40px;
  width: 240px;
  background: white;
  margin-top: 10px;
  padding-top: 6px;

  span {
    margin-left: -1px;
    color: black;
  }
`;

const RentNow = styled.div`
  margin-top: 24.3px;
`;
const RentButton = styled.div`
  height: 40px;
  width: 120px;
  background: #e82231;
  margin-top: 10px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  cursor: pointer;
  padding-top: 6px;

  &:hover {
    background: red;
  }

  span {
    margin-left: -1px;
    color: white;
  }
`;

const WhyChoseUs = styled.div`
  background: #fff;
  transform: skewY(-3deg);

  -webkit-transform: skewY(-3deg);
  margin: -7em auto 3em;
  height: auto;
  min-height: 150px;
`;

const Headings = styled.div`
  -webkit-transform: skewY(3deg);
  h2 {
    padding-top: 20px;
    font-size: 30px;
    font-weight: 500;
    text-align: right;
    margin-right: 200px;
  }

  h6 {
    margin-right: 200px;
    font-size: 1.2rem;
    color: #e82231;
    text-align: right;
  }
`;

const Sanatise = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.div`
  padding-bottom: 20px;
  img {
    vertical-align: middle;
    border-style: none;
    height: 400px;
    width: 720px;
    margin-top: -100px;
    margin-left: 200px;
  }
  p {
    margin-top: -40px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0;
    text-align: right !important;
    border-bottom-width: 2px;
    border-bottom-color: red;
    width: 720px;
    margin-left: 190px;
  }
`;

const Helmet = styled.div``;

const FeaturedIn = styled.div``;
