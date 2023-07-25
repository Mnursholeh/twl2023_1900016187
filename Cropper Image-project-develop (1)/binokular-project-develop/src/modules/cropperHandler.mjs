
import "../../node_modules/cropperjs/dist/cropper.js"

const cropBtn = document.getElementById("crop-button");
const resetBtn = document.getElementsByClassName('crop-reset')[0];
const detailX = document.getElementsByClassName('x')[0];
const detailY = document.getElementsByClassName('y')[0];
const detailH = document.getElementsByClassName('h')[0];
const detailW = document.getElementsByClassName('w')[0];


class RunCropper {


    sentElement(targetImage) {
        this.cropper = new Cropper(targetImage,
            {
                zoomable: false,
                scalable: false,
                background: false,
                modal: true,
                center: false,
                autoCrop: true,
                autoCropArea: 2 / 4,
                preview: ".preview",
                viewMode: 1,
                responsive: true,
                highlight: false,


                //showing detail
                crop(e) {
                    detailX.setAttribute("value", ` ${Math.floor(e.detail.x)} `);
                    detailY.setAttribute("value", ` ${Math.floor(e.detail.y)} `);
                    detailH.setAttribute("value", ` ${Math.floor(e.detail.height)}`);
                    detailW.setAttribute("value", ` ${Math.floor(e.detail.width)} `);
                },
            }
        );



    }


    // cropped url
    getCropped() {
        this.croppedURL = this.cropper.getCroppedCanvas().toDataURL("image/png");
        return (this.croppedURL)

    }

};



//cropped btn
cropBtn.addEventListener("click", function () {
    const croppedModal = document.getElementById("cropped-modal");
    const downloadBtn = document.getElementById('download');
    croppedModal.setAttribute("src", runCropper.getCropped());
    downloadBtn.setAttribute("href", runCropper.getCropped());
    window.localStorage.setItem('imageCropped', runCropper.getCropped());
})






// function RunCropper(targetImage) {


//     const croppedURL = null;

//     const cropper = new Cropper(targetImage,
//         {
//             zoomable: false,
//             scalable: false,
//             background: false,
//             modal: true,
//             center: false,
//             autoCrop: true,
//             autoCropArea: 2 / 4,
//             preview: ".preview",
//             viewMode: 1,
//             responsive: true,
//             highlight: false,


//             //showing detail
//             crop(e) {
//                 detailX.setAttribute("value", ` ${Math.floor(e.detail.x)} `);
//                 detailY.setAttribute("value", ` ${Math.floor(e.detail.y)} `);
//                 detailH.setAttribute("value", ` ${Math.floor(e.detail.height)}`);
//                 detailW.setAttribute("value", ` ${Math.floor(e.detail.width)} `);
//             },
//         }
//     );


//     // cropped url
//     this.getCropped = function () {
//         return croppedURL;
//     }

//     //cropped btn
//     cropBtn.addEventListener("click", function () {
//         const croppedModal = document.getElementById("cropped-modal");
//         const downloadBtn = document.getElementById('download')
//         croppedURL = cropper.getCroppedCanvas().toDataURL("image/png");
//         croppedModal.setAttribute("src", croppedURL);
//         downloadBtn.setAttribute("href", croppedURL)
//     })

//     //resetcropperbox
//     resetBtn.addEventListener("click", function () {
//         cropper.reset()
//     })

// }


export const runCropper = new RunCropper();


// export const runCropper = function (targetImage) {

//     let croppedURL = null;
//     const cropper = new Cropper(targetImage,
//         {
//             zoomable: false,
//             scalable: false,
//             background: false,
//             modal: true,
//             center: false,
//             autoCrop: true,
//             autoCropArea: 2 / 4,
//             preview: ".preview",
//             viewMode: 1,
//             responsive: true,
//             highlight: false,


//             //showing detail
//             crop(e) {
//                 detailX.setAttribute("value", ` ${Math.floor(e.detail.x)} `);
//                 detailY.setAttribute("value", ` ${Math.floor(e.detail.y)} `);
//                 detailH.setAttribute("value", ` ${Math.floor(e.detail.height)}`);
//                 detailW.setAttribute("value", ` ${Math.floor(e.detail.width)} `);
//             },
//         }
//     );

//     // cropped url
//     getCropped = () => {
//         return croppedURL;
//     }

//     // cropped btn
//     cropBtn.addEventListener("click", function () {
//         const croppedModal = document.getElementById("cropped-modal");
//         const downloadBtn = document.getElementById('download')
//         croppedURL = cropper.getCroppedCanvas().toDataURL("image/png");
//         croppedModal.setAttribute("src", croppedURL);
//         downloadBtn.setAttribute("href", croppedURL)
//     })

//     resetBtn.addEventListener("click", function () {
//         cropper.reset()
//     })
// }


