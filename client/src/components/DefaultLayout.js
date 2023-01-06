import React from 'react'
import {Row , Col} from 'antd'

function DefaultLayout(props) {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <div className='header bs1'>

        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between'>
              <h1>Nostalgia</h1>

              <div class="dropdown">
                <button class="dropbtn">{user.username}</button>
                <div class="dropdown-content">
                  <a href="/">Home</a>
                  <a href="/userbookings">Bookings</a>
                  <a href="/admin">Admin</a>
                  <a href="#">Profile</a>
                  <a onClick={() => {
                    localStorage.removeItem('user');
                    window.location.href = '/login'
                  }}>Logout</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout
