import React from 'react'
import styled from 'styled-components'
import { Card, Avatar, Button } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Meta } = Card

// const CardWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

function UserProfile({ setIsLoggedIn }) {
  return (
    <Card
      actions={[
        <div key='view'>
          view
          <br />0
        </div>,
        <div key='follwering'>
          follwering
          <br />0
        </div>,
        <div key='follwer'>
          follwer
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title='Hyoje Profile' avatar={<Avatar>hyojelee</Avatar>} />
      <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
    </Card>
  )
}

export default UserProfile
