'''
Problem:

I bought a new car that takes a specific fuel of octane value 91. 
However, local gas station only provides fuel of octane value 89 and 93.
To prepare the fuel with at least 91 octane reading, I use the following
way to adjust the octane value:

1. Add #93 gas to full.
2. Whenever the gas tank become half empty:
    2.1. If last time fueling #93, then add #89 gas to tank full.
    2.2. else add #93 gas to tank full.
Please write a program that output the octane value of gas at every refuel.
Assume that the mixed octane value will be the average of current octane value 
in the gas tank and the octane value added fuel.
'''

def calc_octane_value(refuel_times):
    gas_tank_val = 93
    last_refuel_val = 93
    for i in range(refuel_times):
        print(f"{i}-th refuel, octane value={gas_tank_val}.")
        if(last_refuel_val == 93):
            #fuel in 89
            #print("fueling in #89")
            gas_tank_val = (gas_tank_val + 89) / 2
            last_refuel_val = 89
        else:
            #fuel in 93
            #print("fueling in #93")
            gas_tank_val = (gas_tank_val + 93) / 2
            last_refuel_val = 93
    pass

calc_octane_value(10)