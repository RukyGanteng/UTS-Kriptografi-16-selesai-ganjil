async function hitungHash(file) {

    let data = await file.arrayBuffer();

    // MD5
    let md5 = CryptoJS.MD5(
        CryptoJS.lib.WordArray.create(data)
    ).toString();

    // SHA256
    let shaBuffer = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    let sha256 = Array.from(
        new Uint8Array(shaBuffer)
    )
    .map(b => b.toString(16).padStart(2,"0"))
    .join("");

    return {
        md5,
        sha256
    };
}

async function bandingkanFile() {

    let fileAsli =
        document.getElementById("fileAsli").files[0];

    let fileMod =
        document.getElementById("fileMod").files[0];

    if(!fileAsli || !fileMod){
        alert("Pilih kedua file terlebih dahulu");
        return;
    }

    let asli = await hitungHash(fileAsli);
    let mod  = await hitungHash(fileMod);

    document.getElementById("md5Asli").value =
        asli.md5;

    document.getElementById("shaAsli").value =
        asli.sha256;

    document.getElementById("md5Mod").value =
        mod.md5;

    document.getElementById("shaMod").value =
        mod.sha256;

    let hasil =
        document.getElementById("hasil");

    if(asli.sha256 === mod.sha256){

        hasil.innerHTML =
            "✅ File sama, integritas terjaga";

    }else{

        hasil.innerHTML =
            "❌ File berbeda, integritas berubah";

    }
}