import { navbarDetail } from "../components/navbarDetail.mjs";
import { runCropper } from "./cropperHandler.mjs";

const imageElement = document.getElementById("image");

export const uploadFile = function () {
    //selecting all required elements
    const dropArea = document.querySelector(".drag-area"),
        dragText = dropArea.querySelector("header"),
        button = dropArea.querySelector("label"),
        input = dropArea.querySelector("input");


    let file; //this is a global variable and we'll use it inside multiple functions


    button.onclick = () => {
        input.click(); //if user click on the button then the input also clicked
    }

    input.addEventListener("change", function () {
        //getting user select file and [0] this means if user select multiple files then we'll select only the first one
        file = this.files[0];
        dropArea.classList.add("active");
        showFile(); //calling function
    });


    //If user Drag File Over DropArea
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault(); //preventing from default behaviour
        dragText.textContent = "Release to Upload Image";
    });

    //If user leave dragged File from DropArea
    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload Image";
    });

    //If user drop File on DropArea
    dropArea.addEventListener("drop", (event) => {
        event.preventDefault(); //preventing from default behaviour
        //getting user select file and [0] this means if user select multiple files then we'll select only the first one
        file = event.dataTransfer.files[0];
        showFile(); //calling function
    });

    function showFile() {
        let fileType = file.type; //getting selected file type
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
        if (validExtensions.includes(fileType)) { //if user selected file is an image file
            let fileReader = new FileReader(); //creating new FileReader object
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                setSrcImage(fileURL)


                //runing modul cropperHandler
                runCropper.sentElement(imageElement);
            }
            fileReader.readAsDataURL(file);
        } else {
            alert("This is not an Image File!");
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
        }
    }

    function setSrcImage(fileURL) {
        imageElement.setAttribute("src", `${fileURL}`);
        dropArea.classList.add("active");
    }



    // drag and drop file end

}

