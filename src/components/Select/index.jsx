export const Select = ({className, name, onChange, optionValues}) => {
  return (
    <>
      <select
        className={className}
        name={name}
        onChange={onChange}
        defaultValue={optionValues[0].id}
      > 
        {/* <option disabled>Selecione</option>    */}
        {optionValues.map((option,key) => {
          return( 
            <option value={option.id} key={key}> {option.title} </option>
          );
        })}
      </select>
    </>
  );
};

