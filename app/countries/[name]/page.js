import Image from "next/image";

// Helper function to get countries list
async function getCountry(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Countries({ params }) {
  const { name } = await params;
  const countries = await getCountry(name);
  return (
    <>
      <ul>
        {countries.map((country, idx) => (
          <li key={idx}>
            <h1>Country name: {country.name.common}</h1>
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
