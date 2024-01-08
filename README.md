# Reactive Portfolio
This is a website template for a simple photo portfolio, built in ReactJS
using Vite and vite-imagetools. It can be hosted on GitHub Pages, or on
any static webserver. A little bit of technical knowledge is helpful,
but setup is quite simple.

## Dependencies (for self-hosting)
- A OS compatible with the [sharp](https://sharp.pixelplumbing.com/install#prebuilt-binaries)
library
- Node.js v20.x
- NPM v10.2.5+

## Building
```
npm install
npm run build
```
Output is in the `dist` folder

## Configuration
The `albums` directory at the root of the project is scanned for
subdirectories that contain the displayed albums.
```
- /
  - albums
    - albumfolder1
      - img1.jgp
      - img2.jpg
    - albumfolder2
      - img1.jgp
      - img2.jpg
```
Any further subdirectories will not be scanned, so make sure all images
are directly inside their album. You can order the images by naming them in
ascending order.

Config options are in the `config.json` file:

### title
Title that appears at the top on the left
### description
Description that appears on the left. Optional.
### albums
List of albums to display. You can either give the name of the folder
that contains the album:
```
"albums": [
  "folder1",
  "folder2"
]
```
or an array with the first item being the display name of the album,
and the second being the folder name:
```
"albums": [
  ["Album 1", "folder1"],
  ["Album 2", "folder2"]
]
```
or a mix of both.

## Known Issues
- capitalized file extensions can mess with it (e.g. img.JPG)
- rotating an image using EXIF flags rather than actually 
having a rotated image messes with the image processing library.
use a proper image editor to rotate images, and fix any current images
[using IrfanView](https://exiftool.org/forum/index.php?PHPSESSID=02928edf530afe784db76d07de54677a&msg=59324)
or a different software
