g = int(input('kiek duoda: '))
simtoBanknotu = g // 100
g -= simtoBanknotu * 100 
pemBanknotu = g // 50
g -= pemBanknotu * 50
dvidesimtBanknotu =  g // 20
g -= dvidesimtBanknotu * 20
desimtBanknotu =  g // 10
g -= desimtBanknotu * 10
penkiuBanknotu =  g // 5
g -= penkiuBanknotu * 5
dvejumonetu =  g  // 2
g -= dvejumonetu * 2
monetu = g // 1
print('Šimto banknotu: ' + str(simtoBanknotu) + ' penkesdešimties banknotu: ' + str(pemBanknotu)+ ' dvidešimties banknotu: ' + str(dvidesimtBanknotu) + ' dešimties banknotu: ' + str(desimtBanknotu) + ' penkiu banknotu: ' + str(penkiuBanknotu) + ' dveju monetu: ' +  str(dvejumonetu) + ' monetu: '+ str(monetu)) 