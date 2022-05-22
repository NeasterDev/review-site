import React from 'react';

export const Dropdown = ({dropdownArray, change}) => {
    return (
        <select className="select is-size-6 w-100 select-location" onChange={(e) => {change(e)}}>
            {dropdownArray.map(item => {
                return (
                    <option>{item}</option>
                )
            })}
        </select>
    )
}