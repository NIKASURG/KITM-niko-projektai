n = int(input('Kiek rišutų yra: '))
jonukoR = 0
petriukoR = 0
likeRiesutai = n 
duotiRiesutu = 0
e = True
while e:
    duotiRiesutu += 1
    likeRiesutai -=1
    if likeRiesutai == 0:
        e = False
    if duotiRiesutu < likeRiesutai: 
        jonukoR += duotiRiesutu
        duotiRiesutu += 1
        likeRiesutai -=1
        if duotiRiesutu < likeRiesutai:
            petriukoR += duotiRiesutu
           

            
        else:
            e = False
            # jonukoR += (n - duotiRiesutu)
    else:
        e = False
        # petriukoR += (n - duotiRiesutu)
      
print(jonukoR)
print(petriukoR)
print(likeRiesutai)