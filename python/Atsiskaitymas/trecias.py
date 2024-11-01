a = int(input('a reikšmė'))
b = int(input('b reikšmė'))
if (a + b) ** 3 == (a**3)  + (3 * (a ** 2) * b) + (3*a*(b**2)  + (b**3)): 
    print('pirma formule tinka')
if (a - b) ** 3 == (a**3)  - (3 * (a ** 2) * b) + (3*a*(b**2)  - (b**3)): 
    print('antra formule tinka')
if( a ** 3 ) - (b **3) ==(a - b) * ((a **2) + 2 * a * b + (b **2)):
    print('Trecias taisyngas')
if( a ** 3 ) + (b **3) ==(a + b) * ((a **2) - 2 * a * b + (b **2)):
    print('Ketvirtas taisyngas')