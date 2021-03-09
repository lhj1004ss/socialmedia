import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
  padding: 15px;
`

function LoginForm({ setIsLoggedIn }) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  // @@ use useCallback to optimize when passing props in a component
  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onSubmit = useCallback(() => {
    console.log(id, password)
    setIsLoggedIn(true)
  }, [id, password])

  return (
    <>
      <FormWrapper onFinish={onSubmit}>
        <div>
          <label htmlFor='user-id'>ID</label>
          <br />
          <Input
            type='email'
            name='user-id'
            value={id}
            onChange={onChangeId}
            required
          />
        </div>
        <div>
          <label htmlFor='user-password'>Password</label>
          <br />
          <Input
            name='user-id'
            type='password'
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type='primary' htmlType='submit' loading={false}>
            Login
          </Button>
          <Link href='/signup'>
            <a>
              <Button>Sign Up</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  )
}

export default LoginForm
