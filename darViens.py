primes = [2,3,5,7,11,13,17,19]
ats = 1
# 2*2, 5, 2 * 3, 7, 2*2*2,3*3,2*5,11,2*2*3,13,2*7,5*3,2*2*2*2,17,2*3*3,19,2*2*5
primes = [2*2,2, 2 , 7, 3*3,5,11,13,17,19]
5,7,8,9,11,13,17,19
for i in primes:
    ats *= i

for i in range(1,20):
    print(ats /i)
print(ats)