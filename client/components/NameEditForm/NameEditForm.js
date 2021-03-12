import { Input, Form } from 'antd'
import React from 'react'
import styled from 'styled-components'

function NameEditForm() {
  const FormWrapper = styled(Form)`
    margin-bottom: '20px';
    border: '1px solid #d9d9d9';
    padding: 20px;
  `

  return (
    <FormWrapper>
      <Input.Search addonBefore='name' enterButton='Change' />
    </FormWrapper>
  )
}

export default NameEditForm
