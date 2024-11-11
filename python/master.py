import sys
kelinto = int(input('Kelinto fobonačio iškote pone: '))
x1 = 1
x2 = 1
x3 = 0
sys.set_int_max_str_digits(50000000)
for i in range(0,kelinto):
    x3 = x1 + x2
    x1 = x2
    x2 = x3
    print(x3)
    print(i)
    