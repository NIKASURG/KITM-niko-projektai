var = input('varijantas Pirmas variantas: x = ab+3 Spausti 1; Antras variantas: x = 2a+b Spausti 2; Trečias variantas: x = a-3b Spausti3 :')
a = int(input('a reikšmė: '))
b = int(input('b Reikšmė: ')) 
if var == '1':
    x = a * b+3
elif var == '2':
     x = 2 * a+b
elif var == '3':
    x = a-3 * b
print('Uždavinio atsakymas: ' + str(x))
