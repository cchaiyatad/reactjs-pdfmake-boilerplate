import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../build/vfs_fonts";
import imageDict from "../build/image_dict";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew_Bold.ttf',
    italics: 'THSarabunNew_Italic.ttf',
    bolditalics: 'THSarabunNew_BoldItalic.ttf'
  },
  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },

}

function printPDF() {
  var docDefinition = {
    content: [
      { text: 'Hello, World!', fontSize: 24 },
      { text: 'สวัสดี, โลก!', fontSize: 15 },
      {
        image: imageDict.imageDict.src["world.jpg"],
        width: 150,
        height: 150
      },
    ],
    defaultStyle: {
      font: 'THSarabunNew'
      // font: 'Roboto'
    }
  };
  pdfMake.createPdf(docDefinition).open()
}

function App() {
  console.log(imageDict)
  return (
    <div className="App">
      <div>
        Test PDF
      </div>
      <button onClick={printPDF}> create</button>
    </div>
  );
}

export default App;
