import { saveAs } from "file-saver"

const Image = ({ data }) => {

  const downloadImage = ()=>{

    saveAs(data.urls.small,`${data.urls.small}.png`);
  }
  return (
    <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} style={{cursor:'pointer'}} onClick={downloadImage} />
  )
}

export default Image