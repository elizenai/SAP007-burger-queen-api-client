import "./style.css";
export const Button = ({id, type, className, name, onClick, children, value}) => {
    return (
        <button
        id={id}
        type={type} 
        className={className}
        name={name}
        onClick={onClick}
        value={value}
        >
         {children}
        </button>
    
    );
};