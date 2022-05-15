export const Input = ({type, className, name, onChange, value, placeholder, minLength}) => {
    return (
    <input 
        type= {type} 
        className= {className}
        name= {name}
        onChange= {onChange}
        value= {value}
        placeholder= {placeholder}
        minLength = {minLength}
    />
    );
};