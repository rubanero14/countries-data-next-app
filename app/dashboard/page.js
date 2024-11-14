import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// Helper function to get countries list
async function getCountries() {
  const res = await fetch(`https://restcountries.com/v3.1/all`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Dashboard() {
  const countries = await getCountries();
  return (
    <div className="wrapper">
      <h1>List of Countries</h1>
      <ul className={styles.countriesList}>
        {countries.map((country, idx) => (
          <li className="mb-3" key={idx}>
            <Link href={"/countries/" + country.cca2}>
              <Image
                src={country.flags.svg}
                alt={country.flag + " flag"}
                width={270}
                height={150}
              />
              <div>{country.name.common}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/login" className="btn btn-light">
        Logout
      </Link>
    </div>
  );
}
