import React from 'react';

const Option = (props) => {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value={props.value}
                    checked={props.isSelected}
                    onChange={props.onSelect}
                />
                {props.label}
            </label>
        </div>
    );
};

export {Option};