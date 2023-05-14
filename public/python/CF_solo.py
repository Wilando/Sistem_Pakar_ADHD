jawaban = []
for i in range(10):
    nilai = int(input(f"Masukkan nilai jawaban ke-{i+1}: "))
    if nilai == 0:
        jawaban.append(0)
    elif nilai == 1:
        jawaban.append(0.4**2)
    elif nilai == 2:
        jawaban.append(0.6**2)
    elif nilai == 3:
        jawaban.append(0.8**2)
    else:
        print("Input yang diterima hanya angka 0, 1, 2, atau 3.")

cf_old = 0

rentang_cf_kombinasi = range(9)

for i in rentang_cf_kombinasi:
    if i == 0:
        cf_old = jawaban[i] + jawaban[i + 1] * (1 - jawaban[i])
        print(f"cf_old[{i}]: {cf_old}")
    else:
        cf_old = cf_old + jawaban[i + 1] * (1 - cf_old)
        print(f"cf_old[{i}]: {cf_old}")
        
hasil_akhir = round(cf_old / 1 * 100, 3)
print(f"Nilai akhir: {hasil_akhir}")