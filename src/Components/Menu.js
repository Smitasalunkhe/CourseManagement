import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

function Menu() {
  return (
    <div>
      <ListGroup>
        <Link tag='a' to='/' className='bg-success list-group-item list-group-action text-white' action>Home
        </Link>
        <Link tag='a' to='/add-course' className='bg-success list-group-item list-group-action text-white' action>Add Course
        </Link>
        <Link tag='a' to="/view-courses" className='bg-success list-group-item list-group-action text-white' action>view Courses
        </Link>
        <Link tag='a'className='bg-success list-group-item list-group-action text-white' action>
          About
        </Link>
        <Link tag='a' className='bg-success list-group-item list-group-action text-white' action>
          Contact
        </Link>
      </ListGroup>
    </div>
  )
}

export default Menu
