import math
sautasX = int(input('Kiek sentimetru i šona pataikė x ašį: '))
sautasY = int(input('Kiek sentimetru i šona pataikė y ašį: '))
atstumas = math.sqrt((sautasX  - 0) ** 2 +(sautasY - 0 )**2 )

if atstumas < 5:
    print('Šaulys gaus 10 tašku')
elif atstumas < 10:
    print('Šaulys gaus 5 tašku')
else:
    print('Šaulys gaus 0 tašku')
    
    