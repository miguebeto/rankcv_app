import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_EPISODES } from "../../data/Querys";
import InputGroup from "../../helpers/InputGroup";
import { EpisodeCard } from "./EpisodeCard";
import { v1 as uuid } from "uuid";

export const EpisodesList = () => {
    const [search, setSearch] = useState("");
    const [episodeNumber, setEpisodeNumber] = useState(1);

    const { data, error, loading } = useQuery(ALL_EPISODES, {
        variables: { episodeNumber },
    });

    let episodeName = data?.episode.name;
    let airDate = data?.episode.air_date;
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    if (error) return <span style="color: red">{error}</span>;
    return (
        <>
            <h1 className="text-center mb-3">
        Episode name :{" "}
                <span className="text-primary">
                    {episodeName === "" ? "Unknown" : episodeName}
                </span>
            </h1>
            <h5 className="text-center">
        Air Date: {airDate === "" ? "Unknown" : airDate}
            </h5>
            <div>
                <InputGroup
                    key={uuid()}
                    name="Episode"
                    changeID={setEpisodeNumber}
                    total={51}
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
                    data?.episode.characters
                        .filter((value) => {
                            if (search === "") {
                                return value;
                            } else if (
                                value.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                        .map((espisode) => <EpisodeCard key={espisode.id} {...espisode} />)
                )}
            </div>
            <div onClick={() => setEpisodeNumber(episodeNumber + 1)}></div>
        </>
    );
};
