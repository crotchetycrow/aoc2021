# Intcode = integers (1,0,0,3,99)
# Look at first int (index 0) <<< opcode
# opcode = 1, 2 ,99
# 99 = finished (break)
# 1 = adds 2 pos together and puts in pos 3 ( [1, 10, 20 ,30] = add 10 and 20 = [1,10,20,30]
# Overwrites pos 3
# 2 = same as 1 but *

# Once done move to pos 4 and repeat

# Unknown opcode = error

def calc_code(intcode: list) -> list:
    intcode.append()