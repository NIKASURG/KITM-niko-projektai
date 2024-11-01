kelinto = int(input('Kelinto kraponačio iškote pone: '))
x1 = 1
x2 = 1
x3 = 0
for i in range(0,kelinto):
    x3 = x1 + x2
    x1 = x2
    x2 = x3
    print(x3)
    