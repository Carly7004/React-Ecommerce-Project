const FormInput = ({ label, name, type, defaultValue, classColor, size }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${classColor} ${size}`}
      />
    </div>
  );
};
export default FormInput;
