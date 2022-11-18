function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
  
    imageInput.addEventListener("change", function(){
      const reader = new FileReader()
  
      reader.addEventListener("load", ()=>{
        const uploadImage = reader.result
  
        changeMemePicture(uploadImage)
        
        // document.querySelector("#display-image").style
        // .backgroundImage = `url(${uploadImage})`
  
      })
  
      reader.readAsDataURL(this.files[0])
  
    })
  
  }
 async function mapImageList(){
    const memesObjetc = [
        {
            "name" : "ciclope",
            "path" : "pictures/ciclope.png"
        },
        {
            "name" : "cheguei",
            "path" : "pictures/cheguei.png"
        },
        {
            "name" : "asirpa",
            "path" : "pictures/asirpa.png"
        },
        {
            "name" : "meudinheiro",
            "path" : "pictures/meudinheiro.png"
        },
        {
            "name" : "shhh",
            "path" : "pictures/shhh.png"
        },
        {
            "name" : "chloe",
            "path" : "pictures/chloe.jpg"
        }
    
    ]

    return memesObjetc
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list")
  
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
  }

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}



async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[1].path)
}

main()