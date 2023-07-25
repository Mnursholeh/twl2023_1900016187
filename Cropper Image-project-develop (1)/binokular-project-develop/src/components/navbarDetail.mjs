
const workArea = document.getElementsByClassName("crop-detail-container")[0];



export function navbarDetail() {
    const navbarDetailTag =
     `
        <h1>Crop Details</h1>
    <div class="image-preview">
        <div class="preview">

        </div>
    </div>

    <div class="crop-data">

        <div>
            <p>X-index :</p>
            <input class="x" value=""></input>
            <label for="x">px</label>
        </div>
        <div>
            <p>Y-index :</p>
            <input class="y" value=""></input>
            <label for="y">px</label>
        </div>
        <div>
            <p>Height :</p>
            <input class="h" value=""></input>
            <label for="h">px</label>
        </div>
        <div>
            <p>Width :</p>
            <input class="w" value=""></input>
            <label for="w">px</label>
        </div>
    </div>
    <div class="crop-button-container d-flex flex-column align">
        <label for="crop-button" id="crop-button" data-bs-toggle="modal"
            data-bs-target="#croppedModal">Crop</label>
        <button name="crop-button" class="crop-button" type="submit" hidden></button>

        <label for="crop-reset" class="crop-reset">Reset</label>
        <button name="crop-reset" type="reset" hidden></button>
    </div>
    ` ;

    workArea.innerHTML = navbarDetailTag;
}