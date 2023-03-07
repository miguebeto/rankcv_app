import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_LOCATIONS } from "../../data/Querys";
import InputGroup from "../../helpers/InputGroup";
import { LocationCard } from "./LocationCard";

import { v1 as uuid } from "uuid";

export const LocationsList = () => {
    const [locationNumber, setLocationNumber] = useState(1);

    const { data, error, loading } = useQuery(ALL_LOCATIONS, {
        variables: { locationNumber },
    });
    const [search, setSearch] = useState("");

    let name = data?.location.name;
    let dimension = data?.location.dimension;
    let type = data?.location.type;

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    if (error) return <span style="color: red">{error}</span>;
    return (
        <>
            <div className="row mb-3">
                <h1 className="text-center mb-3">
          Location :
                    <span className="text-primary">
                        {" "}
                        {name === "" ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
                </h5>
                <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
            </div>
            <div>
                <InputGroup
                    key={uuid()}
                    name="Location"
                    changeID={setLocationNumber}
                    total={126}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter search name..."
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
            <div onClick={() => setLocationNumber(locationNumber + 1)}></div>
        </>
    );
};
