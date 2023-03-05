import { useState } from "react";
import { Filter } from "./api/auth";
import "./App.css";
import CatCard from "./component/cat-card/cat-card";
import Footer from "./component/footer/footer";
import HeroSection from "./component/hero-section/hero-section";
// import useFetch from "./hooks/useFetch";

function App() {
  const [check, setCheck] = useState({
    isChildFriendly: false,
    isDogFriendly: false,
    isStrangerFriendly: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = async (index) => {
    const newCheck = {};
    Object.keys(check).forEach((key, position) => {
      index === position
        ? (newCheck[key] = !check[key])
        : (newCheck[key] = check[key]);
    });
    setCheck(newCheck);
    setIsLoading(true);

    try {
      const { data } = await Filter(newCheck);
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">

      {/* <div className="rawJson">{isLoading ? <p>Loading...</p> : ""}</div> */}
      <HeroSection />
      <div></div>
      <div className="checkButtons">
        {Object.keys(check).map((friendStatus, index) => (
          <div key={index} className="checkBox__container">
            <input
              type="checkbox"
              id={friendStatus}
              name={friendStatus}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={friendStatus}>{friendStatus} </label>
          </div>
        ))}
      </div>
      <div className="card__wrapper">
            {data?.map((data, index) => (
        <CatCard key={index} cardData={data}/>
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default App;
