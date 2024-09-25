n1 = int(input('vino cento vertės monetos: '))
n2 = int(input('dvieju centu vertes monetos:'))
n5 = int(input('penkiu centu: '))
n10 = int(input('dezimties centu monetu: '))
verCentais = n1 * 1 + n2 * 2 + n5 * 5 + n10 *10
euru = verCentais // 100
centu = verCentais - euru * 100
print('taupykleja yra: ' + str(euru) + ' euru ir ' + str(centu) +' centu')