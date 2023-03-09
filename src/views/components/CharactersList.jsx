import { ALL_CHARACTERS } from "../../data/Querys";
import { useListCard } from "../../hooks/useListCard";
import { FilterSeach } from "./FilterSeach";
import { InputSearch } from "./InputSearch";
import { Pagination } from "./Pagination";

export const CharactersList = () => {
    const { data, setNumber, handleSearch, search, loading, number } =
    useListCard(ALL_CHARACTERS);

    let results = data?.characters.results;
    let info = data?.characters.info;

    return (
        <>
            <div>
                <InputSearch handleSearch={handleSearch} search={search} />
                <FilterSeach data={results} search={search} loading={loading} />
                <Pagination
                    info={info}
                    pageNumber={number}
                    updatePageNumber={setNumber}
                />
            </div>
        </>
    );
};
