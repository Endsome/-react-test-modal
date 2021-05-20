import React, { useEffect } from 'react';
import '../styles/select.scss'
import customSelect from "../helpers/custom-select";

const ModalSelect = () => {

    useEffect(() => {
        customSelect()
    }, []);

    return (
        <div className="custom-select">
            <select>
                <option value="0">Column 1: Date</option>
                <option value="1">Value 1</option>
                <option value="2">Value 2</option>
                <option value="3">Value 3</option>
                <option value="4">Value 4</option>
                <option value="5">Value 5</option>
            </select>
        </div>
    );
}

export default ModalSelect;
