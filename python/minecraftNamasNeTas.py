x = 4
y = 4
z = 4
visoNamoTuris = x * y * z
namoOras = (x-2) * (y-2) * (y-2)
NamoBlokai = visoNamoTuris - namoOras
akmuo = x * z * 2
mediena = NamoBlokai - akmuo
rastai = y * 4
akmuo -= 8
mediena -= rastai - 8
stiklas = (x-2) + (z-2) * 2
mediena -= stiklas
# print(4%2)
# print(5%2)
print(4%2== True)
print(5%2 == True)

laikinas = z
blokuUzpildas = 0
# naudoju funkcija nes sirdis neliaidzia rasyti tiek atsikartojanci o kodo
def lyginisSkaiciavimasKrasto(plotis):
    blokuEileje = plotis / 2 
    return(blokuEileje- 1) * 2 + plotis
if z%2 == False:
    blokuIspjovojeSuOru = lyginisSkaiciavimasKrasto(z)
    while laikinas > 0:
        blokuUzpildas += lyginisSkaiciavimasKrasto(laikinas)
        print(lyginisSkaiciavimasKrasto(laikinas))
        laikinas -= 4 
else:
    blokuEileje = 2
stogoMedina = blokuIspjovojeSuOru * (x - 2) + blokuUzpildas * 2
print(blokuIspjovojeSuOru)    
print(blokuUzpildas)

print(akmuo,mediena,rastai,stiklas,stogoMedina)