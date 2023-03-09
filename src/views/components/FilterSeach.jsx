import { LocationCard } from "./LocationCard";

export const FilterSeach = ({data, search, loading}) => {
    return (
        <div className="grid_container">
            {loading ? (
                <p>Loading ...</p>
            ) : (
                data
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
    );
};
