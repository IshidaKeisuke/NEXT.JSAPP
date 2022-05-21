import Form from '../../components/articles/Form'
import React, { useState } from 'react'

const CreateAritcle = (props: Text) => {
  // タイトルと本文に入力されている値
  const [inputTitle, setInputTitle] = useState('')
  const [inputBody, setInputBody] = useState('')

  return (
    <Form inputTitle={inputTitle} inputBody={inputBody} />
  )
}

export default CreateAritcle
