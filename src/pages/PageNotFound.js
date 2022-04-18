import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='error-page section'>
        <div className="error-container">
            <h1>oops! Page not found</h1>
        <Link to='/' className='btn btn-primary'>
            Back to home
        </Link>
        </div>
    </section>
  )
}

export default PageNotFound
