import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import { useCities } from "../context/CitiesContext";

const CountryList = () => {
  const { isLoading, cities } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else {
      return arr;
    }
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the Map" />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
