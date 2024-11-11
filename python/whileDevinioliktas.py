p = int(input('Kiek plytu turim: '))
reiksPlyt = 0
auklst = 0
while p > reiksPlyt:
    auklst+= 1
    reiksPlyt += auklst
if reiksPlyt > p:
    reiksPlyt -= auklst  
    auklst -= 1
print(reiksPlyt)
liksNepanaudot = p - reiksPlyt
print(liksNepanaudot)
print(auklst)
print(auklst)