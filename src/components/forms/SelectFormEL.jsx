import PropTypes from 'prop-types'
const SelectFormEL = ({register, error,name}) => {
  return (
    <div>
      <select
        name={name}
        id="role"
        className={"px-4 py-3 rounded w-full "+(error?"border border-red-500":" border-none") }
        {...register}
      >
        <option value="">---- Select Role ----</option>
        <option value="ui-developer">UI Developer</option>
        <option value="backend-developer">Backend developer</option>
        <option value="database-developer">Database developer</option>
        <option value="fullstack-developer">Full stack developer</option>
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

SelectFormEL.propTypes ={
  register: PropTypes.object,
  error:PropTypes.object,
  name : PropTypes.string
}

export default SelectFormEL;
