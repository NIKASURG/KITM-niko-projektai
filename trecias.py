n = int(input('Degtuku skaičius: '))
m = int(input('Degtuko degimo laikas minutėmis:'))
vis = n * m / 60
val = int(n * m/60)
min = (vis - val) * 60
print('Degtukas degė: h '+str(val) + ' min'+str(min))