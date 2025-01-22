import math
kiekReike = 10**6
tinkantys = ['2']
for i in range(2,kiekReike):
        sulusk = False
        for j in tinkantys:
            if int(j) > math.sqrt(kiekReike):
                break
            if i % int(j) == 0 :
                sulusk = True
                break
        if sulusk == False:
           
            tinkantys.append(str(i))
            
cop = tinkantys.copy()
for i in tinkantys:
    if '0' in list(i) or'2' in list(i) or'4' in list(i) or'6' in list(i) or '8' in list(i)or '5' in list(i):
        
        cop.pop(cop.index(i))
tinkantys = cop.copy()
print(tinkantys)
tikrinu = tinkantys.copy()
teisingiAts = []
for i in tinkantys:
       
        pasikartojimai = 0
        # kiek kartojasi simboliu skaiciuje fucturijalu sandauga
            
        x = list(i)
        x.sort() 
        l = list(i)
        k = []
        apacia = 1
        for j in x:
            ap = 0
            # try:
            #     print(tikrinu.index(i[::-1]))
            # except:
            #     tikrinu.pop(tikrinu.index(i))
            #     break    
            for m in l:
                
                if j == m:
                    ap += 1
            k.append(ap)

            while j in l:
                l.remove(j)
        while 0 in k:
                k.remove(0) 
        for j in k:
            apacia *= math.factorial(j)     
        kiekTuriKartotis = math.factorial(len(i))/apacia
        for j in tikrinu:
            
            y = list(j)
            y.sort()
            print(x ,y)
            if len(x)<len(y):
                
                break
            

            if x==y:
                pasikartojimai += 1
            print(teisingiAts)
        if pasikartojimai == kiekTuriKartotis:

                teisingiAts.append(i)
print(teisingiAts)
print(len(teisingiAts))