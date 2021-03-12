import { useState } from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'
import LoginForm from '../LoginForm/LoginForm'
import UserProfile from '../UserProfile/UserProfile'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'
const { Search } = Input

const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`

function AppLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput placeholder='Search here' enterButton size='large' />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='http://www.hyojelee.com/'
            target='_blank'
            rel='noreferer noopener'
          >
            Made by Hyoje
          </a>
        </Col>
      </Row>
      common {children}
    </div>
  )
}

// @@ desc - to check props, children is a  type of node that is inside return
AppLayout.propTypes = {
  children: propTypes.node.isRequired,
}

export default AppLayout
