class darbuotojas:
    def __init__(self ,pavarde,vardas,amzius):
        self.pavarde = pavarde
        self.vardas = vardas
        self.amzius = amzius
darbuotojai = []
darbuotojai.append(darbuotojas('savas','petras',66))
darbuotojai.append(darbuotojas('diedas','jonas',3))
darbuotojai.append(darbuotojas('zenius','ledas',30))
darbuotojai.append(darbuotojas('ziogas','zole',5))
print(darbuotojai[0].vardas)

for i in darbuotojai:
    print(i.vardas)
    print(i.pavarde)
    print(i.amzius)
   