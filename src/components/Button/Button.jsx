import '../styles.css';

export const Button = ({ onClick, children, ...rest }) => {
    return (
        <button
            className="button"
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};