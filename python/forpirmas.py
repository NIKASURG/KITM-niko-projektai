kiekZingsniu = int(input("iveskite kiek zingsniu nueita"))
suplojimai = 0
sragtelijimai = 0
for i in range(1, kiekZingsniu):
    if str(i)[-1] == '0':
        suplojimai += 1
    if str(i)[-1] == '5':
        sragtelijimai += 1
print(suplojimai,sragtelijimai)