import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Router } from "next/navigation";

// Helper function to get countries list
async function getCountry(name) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Countries({ params }) {
  const { name } = await params;
  const countries = await getCountry(name);
  return (
    <div className="wrapper">
      <ul className={styles.countriesList}>
        {countries.map((country, idx) => (
          <li
            key={idx}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <Image
              src={country.flags.svg}
              alt={country.flag + " flag"}
              width={300}
              height={150}
              className="card mb-2"
            />
            <ul className={styles.countriesList}>
              <li>Country: {country.name.common}</li>
              <li>Capital: {country.capital}</li>
              <li>Continent: {country.continents}</li>
              <li>
                Location:
                <Link
                  className="btn btn-sm btn-success w-100 mb-2"
                  target="_blank"
                  href={country.maps.googleMaps}
                >
                  {" "}
                  Google Maps
                </Link>
                <Link
                  className="btn btn-sm btn-success mb-2 w-100"
                  target="_blank"
                  href={country.maps.openStreetMaps}
                >
                  {" "}
                  Open Street Maps{" "}
                </Link>
                <Link className="btn btn-sm btn-light w-100" href="/dashboard">
                  Back
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
