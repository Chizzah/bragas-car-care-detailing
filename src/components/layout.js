import React from 'react'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
