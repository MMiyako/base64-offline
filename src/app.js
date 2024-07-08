import { Base64 } from "js-base64";

let $decodeBtn = document.getElementById("decode");
let $encodeBtn = document.getElementById("encode");
let $clearBtn = document.getElementById("clear");
let $copyEncodedBtn = document.getElementById("copy-encoded");
let $copyDecodedBtn = document.getElementById("copy-decoded");

$decodeBtn.addEventListener("click", () => {
    let $encoded = document.getElementById("encoded");
    let $decoded = document.getElementById("decoded");

    let encoded = $encoded.value;
    let decoded = Base64.decode(encoded);

    $decoded.value = decoded;
});

$encodeBtn.addEventListener("click", () => {
    let $encoded = document.getElementById("encoded");
    let $decoded = document.getElementById("decoded");

    let decoded = $decoded.value;
    let encoded = Base64.encode(decoded);

    $encoded.value = encoded;
});

$clearBtn.addEventListener("click", () => {
    let $encoded = document.getElementById("encoded");
    let $decoded = document.getElementById("decoded");

    $encoded.value = "";
    $decoded.value = "";
    $encoded.focus();
});

$copyEncodedBtn.addEventListener("click", function () {
    let encoded = document.getElementById("encoded").value;
    copy(this, encoded);
});

$copyDecodedBtn.addEventListener("click", function () {
    let decoded = document.getElementById("decoded").value;
    copy(this, decoded);
});

function copy(button, value) {
    if (button.dataset.timeoutId) {
        clearTimeout(button.dataset.timeoutId);
    }

    button.childNodes[0].nodeValue = "Copied";
    button.classList.add("copied");
    navigator.clipboard.writeText(value);

    let timeoutId = setTimeout(() => {
        button.childNodes[0].nodeValue = "Copy";
        button.classList.remove("copied");
        button.dataset.timeoutId = "";
    }, 1000);

    button.dataset.timeoutId = timeoutId;
}
