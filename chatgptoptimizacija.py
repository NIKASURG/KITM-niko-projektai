# # import math

# # def generate_primes(limit):
# #     primes = [True] * (limit + 1)
# #     primes[0] = primes[1] = False
# #     for i in range(2, int(math.sqrt(limit)) + 1):
# #         if primes[i]:
# #             for j in range(i * i, limit + 1, i):
# #                 primes[j] = False
# #     return [x for x in range(limit + 1) if primes[x]]

# # def get_rotations(num):
# #     s = str(num)
# #     return [int(s[i:] + s[:i]) for i in range(len(s))]

# # def is_circular_prime(prime, primes_set):
# #     rotations = get_rotations(prime)
# #     for rotation in rotations:
# #         if rotation not in primes_set:
# #             return False
# #     return True

# # # Nustatome ribą
# # limit = 10**6
# # primes = generate_primes(limit)
# # primes_set = set(primes)

# # circular_primes = []

# # # Tikriname tik skaičius, kuriuose nėra skaitmenų, kurie automatiškai eliminuoja rotacijas
# # for prime in primes:
# #     if any(d in str(prime) for d in "024568"):  # Filtras
# #         continue
# #     if is_circular_prime(prime, primes_set):
# #         circular_primes.append(prime)

# # print(f"Rasta {len(circular_primes)} circular primes iki {limit}:")
# # print(circular_primes)
# def is_prime(num):
#   """Patikrina, ar skaičius yra pirminis."""
#   if num <= 1:
#     return False
#   if num <= 3:
#     return True
#   if num % 2 == 0 or num % 3 == 0:
#     return False
#   i = 5
#   while i * i <= num:
#     if num % i == 0 or num % (i + 2) == 0:
#       return False
#     i += 6
#   return True

# def is_circular_prime(num):
#   """Patikrina, ar skaičius yra cirkuliarinis pirminis."""
#   num_str = str(num)
#   for i in range(len(num_str)):
#     rotated_num = int(num_str[i:] + num_str[:i])
#     if not is_prime(rotated_num):
#       return False
#   return True

# def find_circular_primes(limit):
#   """Randa visus cirkuliarinius pirminius skaičius iki nurodytos ribos."""
#   circular_primes = []
#   for num in range(2, limit):
#     if is_circular_prime(num):
#       circular_primes.append(num)
#   return circular_primes

# # Nustatome ribą
# limit = 1000000

# # Randame ir spausdiname cirkuliarinius pirminius skaičius
# result = find_circular_primes(limit)
# print(result)
import math

def find_primes_as_strings(limit):
    primes = []
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False  # 0 ir 1 nėra pirminiai

    for num in range(2, limit + 1):
        if is_prime[num]:
            primes.append(str(num))  # Į sąrašą pridedamas skaičius kaip string
            for multiple in range(num * num, limit + 1, num):
                is_prime[multiple] = False
    return primes

# Filtruoti pirminius skaičius iki 1 000 000 ir pašalinti tuos, kuriuose yra skaitmenys 0, 2, 4, 5, 6, 8
def filter_primes(primes):
    return [prime for prime in primes if not any(digit in prime for digit in '024568')]

# Rasti pirminius skaičius iki 1 000 000
primes = find_primes_as_strings(1000000)
filtered_primes = filter_primes(primes)

# Tikriname permutacijas
def is_permutation(p1, p2):
    return sorted(p1) == sorted(p2)

# Pagrindinė funkcija tikrinti visų skaičių permutacijas
def find_circular_primes(primes):
    circular_primes = []
    for prime in primes:
        all_permutations_prime = True
        for perm in set([''.join(p) for p in permutations(prime)]):
            if perm not in primes:
                all_permutations_prime = False
                break
        if all_permutations_prime:
            circular_primes.append(prime)
    return circular_primes

from itertools import permutations

# Gauti visus apvalius pirminius skaičius
circular_primes = find_circular_primes(filtered_primes)
print(f"Apvalūs pirminiai skaičiai: {circular_primes}")
print(f"Skaičius apvalių pirminių: {len(circular_primes)}")
