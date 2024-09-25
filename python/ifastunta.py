import math
a = int(input('a reikšme'))
b = int(input('b reikšme'))
c = int(input('c reikšme'))

D = b**2 - 4*a*c
if D > 0:


    ats1 = ((-b)-math.sqrt(D))/(2*a)
    print(-b)
    ats2 = ((-b)+math.sqrt(D))/(2*a )
    print(ats1,ats2)  
elif D == 0:
    ats1 = ats2= (-b) / (2*a)
    print(ats1,ats2)
elif D< 0:
    print('sprendiniu nėra')

