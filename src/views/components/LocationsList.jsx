import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_LOCATIONS } from "../../data/Querys";
import { LocationCard } from "./LocationCard";
import { Pagination } from "./Pagination";

export const LocationsList = () => {
  const [locationNumber, setLocationNumber] = useState(1);

  const { data, error, loading } = useQuery(ALL_LOCATIONS, {
    variables: { locationNumber },
  });
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  if (error) return <span style="color: red">{error}</span>;
  return (
    <>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter search name..."
          style={{ width: "99%", margin: "0.5rem " }}
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="grid_container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          data?.location.residents
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((location) => <LocationCard key={location.id} {...location} />)
        )}
      </div>
      <Pagination pageNumber={locationNumber} setPageNumber={setLocationNumber}/>
    </>
  );
};
