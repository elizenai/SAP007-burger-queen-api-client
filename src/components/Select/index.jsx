export const Select = ({className, name, onChange, optionValues}) => {
  return (
    <>
      <select
        className={className}
        name={name}
        onChange={onChange}
      > 
        <option selected disabled>Selecione</option>   
        {optionValues.map((option,key) => {
          return( 
            <option value={option.a} key= {key}>
              {option.b}
            </option>
          );
        })}
      </select>
      <p>
        {name}
      </p>
    </>
  );
};

