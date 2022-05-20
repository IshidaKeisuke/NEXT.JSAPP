function Form() {
  return (
    <form>
      <input type='text' name='title' placeholder='タイトルを入力してください' />
      <input type='text' name='body' />

      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form
