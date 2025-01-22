import math
ies = 600851475143
pirminei = []
kiekReike = math.sqrt(ies) +1
for i in range(2,int(kiekReike)):
        sulusk = False
        for j in pirminei:
            if int(j) > math.sqrt(kiekReike):
                break
            if i % int(j) == 0 :
                sulusk = True
                break
           
        if sulusk == False:
           
            pirminei.append(str(i))
pirminei = pirminei[::-1]
# print(pirminei)
reikSkaiciai = []
esamas = ies
for i in pirminei:
    
    if esamas % int(i) == 0:
        # print(esamas % int(i))
        reikSkaiciai.append(i)
        esamas = esamas / int(i)
        print(esamas)
print(reikSkaiciai[0])