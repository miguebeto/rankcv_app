export const LocationCard = ({ image, name, gender, species, status }) => {
    return (
        <>
            <div className="grid__itemBig">
                <img src={image} alt="image no found" />
                <div className="card__content">
                    <h4>{name}</h4>
                    <p>{gender}</p>
                    <span>{species}:</span>
                    {(() => {
                        if (status === "Dead") {
                            return <div className={"badges  badge bg-danger"}>{status}</div>;
                        } else if (status === "Alive") {
                            return <div className={"badges badge bg-success"}>{status}</div>;
                        } else {
                            return (
                                <div className={"badges badge bg-secondary"}>{status}</div>
                            );
                        }
                    })()}
                </div>
            </div>
        </>
    );
};
