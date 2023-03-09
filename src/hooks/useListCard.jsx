import { useQuery } from "@apollo/client";
import { useState } from "react";

export const useListCard = ( list ) => {
    const [number, setNumber] = useState(1);
    const [search, setSearch] = useState("");

    const { data, error, loading } = useQuery(list, {
        variables: { number },
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    if (error) return <span style="color: red">{error}</span>;

    return {
        data,
        error,
        loading,
        number,
        search,

        handleSearch,
        setNumber,
    };
};
