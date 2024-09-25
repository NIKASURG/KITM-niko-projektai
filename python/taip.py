kiekDarbuotojuBus = int(input('Kiek darbuotoju planuojata idėti: '))
class darbuotojas:
    def __init__(self ,pavarde,vardas,amzius):
        self.pavarde = pavarde
        self.vardas = vardas
        self.amzius = amzius
        self.tinka = False
darbuotojai = []

for i in range(kiekDarbuotojuBus):
    print('.' * 30)

    darbuotojai.append(darbuotojas(input('Vardas: '),input('Pavarde: '),input('Metai: ')))
    print('.' * 30)

for i in darbuotojai:
    print('.' * 30)
    
    print('Vardas: '+i.vardas)
    print('Pavarde: '+i.pavarde)
    print('Amzius: ' +i.amzius)
    if int(i.amzius) < 16:
        i.tinka = False
    else:   
        i.tinka = True
        print('.' * 30)

for i in darbuotojai:
    print('.' * 30)
    print(i.vardas+ ' ' + i.pavarde)
    
    if i.tinka:
        print('Tinka darbui')
    else: print('Netinka darbui')
    



# skaicius = 1
# skaiciukas = 2
# def kaskas(primas,antras):
#     print(primas)
#     print(antras)
# kaskas(skaicius, skaiciukas)