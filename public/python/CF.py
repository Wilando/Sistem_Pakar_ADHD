import sys
jawaban = sys.argv
jawaban.pop(0)

rentang_jawaban = range(10)

for i in rentang_jawaban:
	if jawaban[i] == '1':
		jawaban[i] = 0
	elif jawaban[i] == '2':
		jawaban[i] = 0.4 * 0.4
	elif jawaban[i] == '3':
		jawaban[i] = 0.6 * 0.6
	elif jawaban[i] == '4':
		jawaban[i] = 0.8 * 0.8

cf_old = 0

rentang_cf_kombinasi = range(9)

for i in rentang_cf_kombinasi:
	if i == 0:
		cf_old = jawaban[i] + jawaban[i+1] * (1 - jawaban[i])
		# print( "{} + {} * ( 1 - {}) = ".format(jawaban[i],jawaban[i+1],jawaban[i]) )
		# print(cf_old)
	else:
		# print( "{} + {} * ( 1 - {}) = ".format(cf_old,jawaban[i+1],cf_old) )
		cf_old = cf_old + jawaban[i+1] * (1 - cf_old)
		# print(cf_old)

hasil_akhir = round(cf_old/1*100)
print(hasil_akhir)