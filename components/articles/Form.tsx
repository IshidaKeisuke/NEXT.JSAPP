const Form = ({ inputTitle, inputBody }: any) => {
  return (
    <form>
      <input type='text' value={inputTitle} placeholder='タイトルを入力してください' />
      <input type='text' value={inputBody} />

      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form
