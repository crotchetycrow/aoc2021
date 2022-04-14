# Take mass
# Divide by 3
# Round down
# Subtract 2


def cacl_fuel_from_mass(mass: int) -> int:
    mass_over_3 = mass // 3
    fuel_req = mass_over_3 - 2

    return fuel_req


# Examples:
print(cacl_fuel_from_mass(12))  # 12 ==> 2
print(cacl_fuel_from_mass(14))  # 14 ==> 2
print(cacl_fuel_from_mass(1969))  # 1969 ==> 654
print(cacl_fuel_from_mass(100756))  # 100756 ==> 33583

input_data = []
with open("input.txt") as file:
    for line in file.readlines():
        mass = int(line.strip())
        input_data.append(mass)

total = 0
for mass in input_data:
    module_fuel = 0
    # fuel needed for mass
    fuel_req = cacl_fuel_from_mass(mass)
    module_fuel += fuel_req
    # Fuel needed for fuel
    while True:
        extra_fuel = cacl_fuel_from_mass(fuel_req)
        if extra_fuel < 0:
            break
        else:
            module_fuel += extra_fuel
            fuel_req = extra_fuel
    total += module_fuel
print(total)

# Calculate fuel needed for mass
# Calculate fuel needed for that fuel
# Repeat (while)
# Stop when fuel needed would be negative and don't include
# Add up all fuel requirements
