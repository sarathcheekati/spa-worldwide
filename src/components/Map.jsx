import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(setSearchParams);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      Map {lng} {lat}
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 90 });
        }}
      >
        change location
      </button>
    </div>
  );
};

export default Map;
