skaicius = ''
kit = 1
ats = 1
while len(skaicius) < 10**6:
    skaicius += str(kit)
    kit += 1
for i in range(0 , 7):
    # print(10**i)
    print(int(skaicius[10**i-1]))
    ats *= int(skaicius[10**i-1])
print(ats)
