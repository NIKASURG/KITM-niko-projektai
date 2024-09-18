x = int(input('Kiek sveria centimetras metalinio strypo: '))
m = int(input('Strypo ilgis metrais: '))*100
c = int(input('strypo ilgis centimetrais: '))
ilgis = m + c
kg = x*ilgis//1000
g = x * ilgis - kg * 1000
print('kilogramu: ' + str(kg), 'gramu: ' + str(g))