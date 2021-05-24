# reactjs-pdfmade-boilerplate

## Create PDF with custom font

1. Create `vfs_fonts.js` with `shell/makeFont.sh`

   - Place fonts file(tts) into `shell/fonts` folder
   - Run `./makeFont.sh fonts/*`

2. Move `vfs_fonts.js` into `src/build`

## Create PDF with image

1. Create `image_dict.js` with `shell/makeImage.sh`

   - Place fonts image into `shell/images` folder
   - Run `./makeImage.sh images/*`

2. Move `image_dict.js` into `src/build`
3. Call `imageDict.imageDict.src[<ImageName>]`
