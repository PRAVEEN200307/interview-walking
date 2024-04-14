import PropTypes from 'prop-types'; 

const InputForm = ({type="text",register,error,id,name,placeHolder,inputLabel}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
       {inputLabel}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={"px-4 py-3 rounded w-full bg-gray-200 outline-none "+(error?'border border-red-500':'border-none')}
        placeholder={placeHolder}
        {...register}
      />
       {error&&<span className='text-red-500'>{error.message}</span>}
    </div>
   
  );
};

export default InputForm;


InputForm.propTypes = {
    inputLabel : PropTypes.string,
    placeHolder : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    register: PropTypes.object,
    error : PropTypes.object,
    type : PropTypes.string,
}