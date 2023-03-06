import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_CHARACTERS } from "../../data/Querys";
import { CharacterCard } from "./CharacterCard";
import { Pagination } from "./Pagination";

export const CharactersList = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, loading } = useQuery(ALL_CHARACTERS, {
    variables: { pageNumber },
  });
  let info = data?.characters.info;

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
          data?.characters.results
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))
        )}
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </>
  );
};
