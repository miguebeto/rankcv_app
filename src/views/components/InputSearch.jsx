export const InputSearch = ({ handleSearch, search }) => {
    return (
        <input
            className="form-control"
            type="text"
            placeholder="Enter search name..."
            onChange={handleSearch}
            value={search}
        />
    );
};
