import { ALL_EPISODES } from "../../data/Querys";
import InputGroup from "../../helpers/InputGroup";
import { useListCard } from "../../hooks/useListCard";
import { InputSearch } from "./InputSearch";
import { FilterSeach } from "./FilterSeach";

import { v1 as uuid } from "uuid";

export const EpisodesList = () => {
    const { data, setNumber, handleSearch, search, loading, number } =
    useListCard(ALL_EPISODES);

    let characters = data?.episode.characters;
    let episodeName = data?.episode.name;
    let airDate = data?.episode.air_date;

    return (
        <>
            <h1 className="text-center mb-3">
                Episode name :
                <span className="text-primary">
                    {episodeName === "" ? "Unknown" : episodeName}
                </span>
            </h1>
            <h5 className="text-center">
                Air Date: {airDate === "" ? "Unknown" : airDate}
            </h5>
            <InputGroup
                key={uuid()}
                name="Episode"
                changeID={setNumber}
                total={51}
            />
            <InputSearch handleSearch={handleSearch} search={search} />
            <FilterSeach data={characters} search={search} loading={loading} />
            <div onClick={() => setNumber(number + 1)}></div>
        </>
    );
};
