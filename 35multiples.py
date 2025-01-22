mul = []
sum3 = 0
sum5 = 0
while True:
    sum3 +=3
    if sum3 > 999:
        break
    mul.append(sum3)
while True:
    sum5 +=5
    if sum5 > 999:
        break
    if sum5 not in mul:
        mul.append(sum5)
ats = 0
for i in mul:
    ats += i
print(ats)