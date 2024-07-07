import { Base64 } from "js-base64";

let $decodeBtn = document.getElementById("decode");
let $encodeBtn = document.getElementById("encode");

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
