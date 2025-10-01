export function CreateRecipe() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' name='create-author' id='create-author' />
      </div>
      <br />
      <div>
        <label htmlFor='create-image-url'>Image URL: </label>
        <input type='text' name='create-image-url' id='create-image-url' />
      </div>
      <br />
      <div>
        <label htmlFor='create-ingredients'>Ingredients: </label>
        <input type='textarea' name='create-title' id='create-title' />
      </div>
      <br />
      <input type='submit' value='Create' />
    </form>
  )
}
