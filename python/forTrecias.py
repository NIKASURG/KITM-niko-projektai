print(7*0)
a = int(input('nuo kurios dienos ieškai'))
b = int(input('iki kurios dienos ie6kai'))
m = int(input('kure savaites diena prasideda mienuo'))
kelintas = 0
for i in range(a, b):
    if i - m < 7 * kelintas:    
        if i - m > 7 * kelintas:    

            kelintas += 1
        print(i, (i - m) -  (7 * kelintas))
            


        
 