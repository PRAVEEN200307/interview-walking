import PropTypes from 'prop-types'

const TextAreaForm = ({inputLabel,name,id,placeHolder,register,error}) => {
  return (
    <div>
      <label htmlFor={id} className=" block mb-2">
        {inputLabel}
      </label>
      <textarea
        name={name}
        id={id}
        className={"bg-gray-200 w-full outline-none px-4 py-3 rounded "+(error?'border border-red-500':'border-none')}
        placeholder={placeHolder}
        {...register}
      ></textarea>
      {error && <small className='text-red-500'>{error.message}</small>}
    </div>
  );
};

export default TextAreaForm;



TextAreaForm.propTypes = {
    inputLabel : PropTypes.string,
    placeHolder : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    register: PropTypes.object,
    error : PropTypes.object
  }