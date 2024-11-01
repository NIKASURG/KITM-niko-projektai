a = int(input('Skaičius: '))
l = len(str(a))
print(l)

# Arba

sK = 1
ilg = 0
while a > sK:
    ilg += 1
    sK *= 10
print(ilg)