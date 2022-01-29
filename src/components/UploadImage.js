
export default function UploadImage({ handleImageChange }){
  return (
    <div>
      <input type='file'  onChange={handleImageChange}/>
    </div>
  )
}