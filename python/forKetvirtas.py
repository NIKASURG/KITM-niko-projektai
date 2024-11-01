n = int(input('kiek sykiu ridens'))
maksTask = n * 6
tomoTaskai = 0
for i in range(1, n + 1):
    print('Kiek Tomas isrideno (nuo 1 iki 6)')
    tomoTaskai += int(input(str(i) + ' ridenimas: '))
print('Maksimalus taskai:',maksTask )
print('Tomo Taskai:', tomoTaskai)
print('Tasku Vidurkis', tomoTaskai / n)
if tomoTaskai > maksTask / 2:
    print('loterija laimėta')
else:
    print('loterija pralaimėta')