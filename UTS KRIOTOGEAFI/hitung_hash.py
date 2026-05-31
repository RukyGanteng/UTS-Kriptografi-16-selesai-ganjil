import hashlib

def hash_file(nama_file):
    with open(nama_file, "rb") as file:
        data = file.read()

    md5 = hashlib.md5(data).hexdigest()
    sha256 = hashlib.sha256(data).hexdigest()

    return md5, sha256

md5_asli, sha_asli = hash_file("klp 4_Sistem Basis Data Modern.docx")
md5_mod, sha_mod = hash_file("klp 4_Sistem Basis Data Modern - modif.docx")

print("=== FILE ASLI ===")
print("MD5     :", md5_asli)
print("SHA-256 :", sha_asli)

print("\n=== FILE MODIFIKASI ===")
print("MD5     :", md5_mod)
print("SHA-256 :", sha_mod)

print("\n=== HASIL ===")

if md5_asli == md5_mod:
    print("MD5     : File Sama")
else:
    print("MD5     : File Berubah")

if sha_asli == sha_mod:
    print("SHA-256 : File Sama")
else:
    print("SHA-256 : File Berubah")