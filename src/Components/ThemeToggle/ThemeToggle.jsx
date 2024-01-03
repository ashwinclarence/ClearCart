import './ThemeToggle.css'
function ThemeToggle({handleChange,isChecked}) {
  return (
    <div className='toggle-container'>
      <input 
      type="checkbox" 
      name="check" 
      id="check"
      className='toggle'
      onChange={handleChange}
      checked={isChecked} />
    </div>
  )
}

export default ThemeToggle
