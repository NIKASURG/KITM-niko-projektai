vaikai = 564
mesa = 0.50
druska = 0.001
pipirai = 0.001
bulves = 0.9
krakmolas = 0.03
bendMesa = mesa * vaikai
bendDrus = druska * vaikai
bendPip = vaikai * pipirai
bendBulv = bulves * vaikai
bendKrak = krakmolas * vaikai

print('Mesos reikemas kiekis: ' + str(bendMesa) , 
      'Druskos reikemas kiekis: ' + str(bendDrus),
      'Pipiru reikemas kiekis: ' + str(bendPip) ,
      'Bulviu reikiamas kiekkis: ' + str(bendBulv) ,
      'Reikemas krakmolo kiekis: ' + str(bendKrak))

