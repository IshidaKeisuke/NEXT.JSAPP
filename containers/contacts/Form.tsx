import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

enum Gender {
  Female = '女性',
  Male = '男性'
}

// フォームの型
type FormValueType = {
  email: string,
  name: string,
  content: string
}

// バリデーションスキーマ
const validationSchema = Yup.object({
  email: Yup.string().email('メールアドレスの形式に誤りがあります').required('メールアドレスは必須です'),
  name: Yup.string().max(15, "15文字以下で入力してください").required("名前は必須項目です"),
  content: Yup.string().required('お問い合わせ内容は必須です')
});

// 送信処理
const onSubmit = (values: FormValueType) => {
  alert(JSON.stringify(values, null, 2));
}

// 送信フォーム
const ContactForm = () => {
  const formik = useFormik<FormValueType>({
    initialValues: { email: "", name: "", content: "" },
    validationSchema: validationSchema,
    onSubmit: onSubmit
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
        {formik.touched.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="name">名前</label>
        <input id="name" name="name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input>
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="content">お問い合わせ内容</label>
        <input id="content" name="content" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.content}></input>
        {formik.touched.content && formik.touched.content ? (
          <div>{formik.errors.content}</div>
        ) : null}
        <button type="submit" onSubmit={() => { formik.handleSubmit(); }}>送信</button>
      </form>
    </div>
  )
}

export default ContactForm
