k = int(input('kiek snaigiu nukrito pirma sekunde: '))
n = int(input('kiek laiko krito snaiges: '))
s = 0  # snaigiu bendras kiekis
for i in range(n):
    s += k 
    k *= 2
print(s)