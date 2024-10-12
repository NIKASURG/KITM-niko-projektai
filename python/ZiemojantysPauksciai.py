pRusis = int(input('Kiek yra likusiu pauksciu ziemoti (vienos rusies): '))
dRusis = int(input('Kiek yra likusiu pauksciu ziemoti (vienos rusies): '))
tRusis = int(input('Kiek yra likusiu pauksciu ziemoti (vienos rusies): '))
daugiausei = max(pRusis,dRusis,tRusis)
maziausei = min(pRusis,dRusis,tRusis)
viduriukas = (pRusis + dRusis + tRusis) - (daugiausei + maziausei)
skirtumas = daugiausei - maziausei
print('\/\/' * 15)
print('Pauksciai nuo didziausios rusies iki maziausios:')
print(daugiausei,viduriukas,maziausei)
print('pauksciu skirtumas: ' + str(skirtumas))
print('\/\/' * 15)

