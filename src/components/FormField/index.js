import React from 'react';

function FormField({ label, value, name, onChange, type }) {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;
