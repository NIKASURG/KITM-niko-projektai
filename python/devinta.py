n = int(input('kiek zmoniu rinko:'))
m = int(input('po kiek rinko: '))
p = int(input('piestuko kaina: '))
biudzetas = n * m
nupirktuPiestukuKiekis = biudzetas // p
pasidalintiPiestukai = nupirktuPiestukuKiekis // n
kFondas = biudzetas - nupirktuPiestukuKiekis * p
kFondasPies = nupirktuPiestukuKiekis - pasidalintiPiestukai * n
print('centai fonde: ' + str(kFondas) + ' piestukai fonde: ' + str(kFondasPies))