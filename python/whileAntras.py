a = int(input('Skaičius: '))
l = len(str(a))
s = 1
while l > 0:
    s *= int(str(a)[l - 1 ])
    l -= 1
print(s)