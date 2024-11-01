n = int(input('Kiek pirkiniu reike nupirkti petriukui: '))
b = 0
s = 0
for i in range(1,n + 1):
    b += int(input('Kiek kainuoja ' + str(i)+ 'nr pirkinys: '))
    s += int(input('Kiek svere ' + str(i)+ 'nr pirkinys: '))
vK = b / n
eur = vK// 100
if eur:
    cnt = vK - (eur * 100)
    print('Vidutiniškai kainuos: ' + str(int(eur)) + ' Eur ' + str(int(cnt)) + ' cnt ' )
else:
    print('Vidutiniškai kainuos: ' + str(int(vK)) + 'cnt')
if s < 5000:
    print('Petriukas galės parnešti pirkinius')
else:
    print('Petriukas negalės parnešti pirkinius')
    