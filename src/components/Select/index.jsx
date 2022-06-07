export const Select = ({optionValues, ...rest}) => {
  return (
    <>
      <select
        defaultValue={optionValues[0].id}
        {...rest}
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

