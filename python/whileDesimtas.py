a = int(input('Koks skaitmuo: '))
kart = 0
while 2**kart < a:
    kart += 1
if 2**kart != a:
    kart -= 1
print(2**kart)