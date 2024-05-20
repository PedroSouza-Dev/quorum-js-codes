const imgLink = 'https://p2a-files.s3.amazonaws.com/production/campaigns/146824/louruhu4yiknhP6hObvk2i3RNm8877png'
const imgClass = 'p2a-image-s3-id'
const imgHeight = 65.21
const imgWidth = 200
const parentNode = document.querySelector('.p2a-header')
const elImage = new AddLogoImg(imgLink,imgClass,imgHeight,imgWidth,parentNode)

elImage.addToHeader()

function AddLogoImg(imgLink,imgClass,imgHeight,imgWidth,parentNode){

    this.img = document.createElement('img')
    this.img.className = imgClass
    this.img.src = imgLink
    this.img.height = imgHeight
    this.img.width = imgWidth
 
    this.addToHeader = function(){
        parentNode.appendChild(this.img)
    }
}