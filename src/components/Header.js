import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {
  return ( 
    <div>
      <header className='header'>
        <h1>{title}</h1>
        {showAddTask ? <Button color='#2e2e2e' text='Hide Form' onClick={onAdd} />
         : <Button color='darkgreen' text='Add New Task' onClick={onAdd} />
        } 
      </header>
      </div>
  )
}
 
Header.defaultProps = {
    title: 'Task Tracker', 
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

export default Header;
