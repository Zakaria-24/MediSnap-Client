import PropTypes from 'prop-types'
const ToggleBtn = ({ toggleHandler, toggle, updateStatusHandler }) => {
  return (
    <>
      <label
        htmlFor='Toggle3'
        className='inline-flex w-full justify-ceenter items-center  rounded-md cursor-pointer text-gray-800'
      >
        <input
        onClick={updateStatusHandler}
          onChange={toggleHandler}
          id='Toggle3'
          type='checkbox'
          className='hidden peer'
          checked={toggle}
        />
        <span className='px-4 py-1 rounded-l-md bg-green-400 peer-checked:bg-gray-300'>
          Add
        </span>
        <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
          Remove
        </span>
      </label>
    </>
  )
}

ToggleBtn.propTypes = {
  toggleHandler: PropTypes.func,
  toggle: PropTypes.bool,
  updateStatusHandler: PropTypes.func,
}
export default ToggleBtn