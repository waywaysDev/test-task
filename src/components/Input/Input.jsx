import '../styles.css';

export const Input = ({ value, type, onChange, placeholder, ...rest }) => {
    return (
        <input
            className="input-field"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    );
};