# import math
# kiekReike = 10**6
# pirminei = ['2']
# for i in range(2,kiekReike):
#         sulusk = False
#         for j in pirminei:
#             if int(j) > math.sqrt(kiekReike):
#                 break
#             if i % int(j) == 0 :
#                 sulusk = True
#                 break
           
#         if sulusk == False:
           
#             pirminei.append(str(i))
# temp = pirminei.copy() 
# for i in pirminei:
    
#     if '0' in list(i) or'2' in list(i) and i != '2'or'4' in list(i) or'6' in list(i) or '8' in list(i)or '5' in list(i)  and i != '5':
#         temp.pop(temp.index(i))
# pirminei = temp.copy()

# ats = []
# for i in pirminei:
#     ktb = len(i)
#     es = 0
#     laik = i
#     for j in range(0,ktb):
#         laik = laik[-1]+laik[:-1]
#         if laik in pirminei:
#             es += 1
        
#     if ktb == es:
#         ats.append(i)
# print(ats)
# print(len(ats))
from sympy import primerange

# Finding prime numbers up to 1 billion
primes_up_to_1_billion = list(primerange(1, 10**9))

# Checking if 5761455 is in the list of primes
is_prime = 5761455 in primes_up_to_1_billion
is_prime
