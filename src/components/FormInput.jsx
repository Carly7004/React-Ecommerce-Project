const FormInput = ({ label, name, type, defaultValue, classColor }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${classColor}`}
      />
    </div>
  );
};
export default FormInput;
