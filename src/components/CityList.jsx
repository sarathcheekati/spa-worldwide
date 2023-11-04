import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the Map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.cityName} />
      ))}
    </ul>
  );
};

export default CityList;
