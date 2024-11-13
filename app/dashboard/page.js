import { colors } from "@material-ui/core";
import Image from "next/image";

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
    <>
      <h1>Dashboard</h1>
      <ul>
        {countries.map((country, idx) => (
          <li key={idx}>
            <Image
              src={country.flags.svg}
              alt={country.flag + " flag"}
              width={270}
              height={150}
            />
            <span>{country.name.common}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
