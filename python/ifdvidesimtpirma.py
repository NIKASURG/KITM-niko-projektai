import math

n = int(input('n'))
m = int(input('m'))
p = int(input('p'))
max = max(n,m,p)
min = min(n,m,p)
mid = (n + m + p) - (max + min) 
if mid - min == max - mid:
    mazat = mid - min    
elif mid - min > max - mid:
        mazat = mid - min
        print('mažiuases atstumas ' + str(mid - min))
elif  mid - min < max - mid:
        mazat = max - mid
        print('mažiuases atstumas ' + str(max - mid))
# komentaras