import Head from 'next/head'

const Form = ({ inputTitle, inputBody }: any) => {
  return (
    <div>
      <Head>
        <title>ブログ新規作成</title>
      </Head>
      <form>
        <input type='text' value={inputTitle} placeholder='タイトルを入力してください' />
        <input type='text' value={inputBody} />

        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form
