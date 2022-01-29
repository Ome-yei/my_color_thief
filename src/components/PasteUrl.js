
export default function PasteUrl({ handleInputChange, handleSubmit, inputUrl }){
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputUrl} onChange={handleInputChange}/>
      <button>Get Colors</button>
    </form>
  )
}