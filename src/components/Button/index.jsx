import "./style.css";
export const Button = ({id, type, className, name, onClick, btnText, value}) => {
    return (
        <button
        id={id}
        type={type} 
        className={className}
        name={name}
        onClick={onClick}
        value={value}
        >
         {btnText}
        </button>
    
    );
};