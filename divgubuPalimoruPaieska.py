polibonai = []
binpolibonas = []
bindesimtainisplobonas = []
suma = 0
for i in range(1,10 **6):
    if str(i) == str(i)[::-1]:
        polibonai.append(i)
for i in polibonai:
    if str(bin(i))[2:] == str(bin(i))[::-1][:-2]:
        bindesimtainisplobonas.append(i)
        binpolibonas.append(str(bin(i))[2:])
print(bindesimtainisplobonas,binpolibonas)    
for i in  bindesimtainisplobonas:
    suma += i   
print(suma)