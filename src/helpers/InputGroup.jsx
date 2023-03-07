import { v1 as uuid } from "uuid";

const InputGroup = ({ name, changeID, total }) => {
    return (
        <div className="input-group mb-2">
            <select
                onChange={(e) => changeID(e.target.value)}
                className="form-select"
                id={uuid()}
            >
                <option value="1">Choose...</option>
                {[...Array(total).keys()].map((x) => {
                    return (
                        <option key={uuid()} value={x + 1}>
                            {name} - {x + 1}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default InputGroup;
