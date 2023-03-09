import { ALL_LOCATIONS } from "../../data/Querys";
import InputGroup from "../../helpers/InputGroup";
import { useListCard } from "../../hooks/useListCard";
import { InputSearch } from "./InputSearch";
import { FilterSeach } from "./FilterSeach";

import { v1 as uuid } from "uuid";

export const LocationsList = () => {
    const { data, setNumber, handleSearch, search, loading, number } =
    useListCard(ALL_LOCATIONS);

    let residents = data?.location.residents;
    let name = data?.location.name;
    let dimension = data?.location.dimension;
    let type = data?.location.type;

    return (
        <>
            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Location :
                    <span className="text-primary">
                        {name === "" ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                     Dimension: {dimension === "" ? "Unknown" : dimension}
                </h5>
                <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
            </div>
            <InputGroup
                key={uuid()}
                name="Location"
                changeID={setNumber}
                total={126}
            />
            <InputSearch handleSearch={handleSearch} search={search} />
            <FilterSeach data={residents} search={search} loading={loading} />
            <div onClick={() => setNumber(number + 1)}></div>
        </>
    );
};
