n = int(input('gavo balionu: '))
k = int(input('Sproge balionai: '))
d = int(input('Draugu: '))
balionu = n - k 
poKiekDalina = balionu // (d+1)
aBalionai = balionu - poKiekDalina * (d+1) + poKiekDalina
print('Draugai gavo: ' + str(poKiekDalina) + ' Andrius gavo: ' + str(aBalionai))

