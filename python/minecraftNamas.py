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
# print(4%2== True)
# print(5%2 == True)
sonoMediena = 0 
# if z%2== False:
laikinas = z
while laikinas > 0:
    sonoMediena += laikinas
    laikinas -=2    
stogoMediena = sonoMediena * 2 + z * (x-2)
mediena += stogoMediena
print(akmuo,mediena,rastai,stiklas,stogoMediena)