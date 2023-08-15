import random

attackers = ("Recruit",
             "Sledge", "Thatcher", "Ash", "Thermite", "Montagne", "Twitch", "Blitz", "IQ", "Fuze", "Glaz",
             "Buck", "Blackbeard", "Capitão", "Hibana",
             "Jackal", "Ying", "Zofia", "Dokkaebi",
             "Lion", "Finka", "Maverick", "Nomad",
             "Gridlock", "Nokk", "Amaru", "Kali",
             "Iana", "Ace", "Zero",
             "Flores", "Osa",
             "Sens", "Grim",
             "Brava")
defenders = ("Recruit", 
             "Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jäger", "Bandit",
             "Frost", "Valkyrie", "Caveira", "Echo",
             "Mira", "Lesion", "Ela", "Vigil",
             "Maestro", "Alibi", "Clash", "Kaid",
             "Mozzie", "Warden", "Goyo", "Wamai",
             "Oryx", "Melusi", "Aruni",
             "Thunderbird", "Thorn",
             "Azami", "Solis", 
             "Fennir")

def attackOrDefense():
    proper = "N"
    while proper == "N":
        
        side = input("Are you on attack or defense: ")
        side.lower()
        if side == "attack" or side == "defense" or side == "a" or side == "d":
            proper = "Y"
            print("\n")
            return side
        else:
            proper = "N"
            print("ERROR: Incorrect answer!")
            print("\n")
def getRandomOp(side):
    if side == "attack" or side == "a":
        op = random.choice(attackers)
    else:
        op = random.choice(defenders)
    return op
        


reset = "Y"

while reset == "Y":
    ttlPpl = int(input("How many players: "))
    print("\n")
    if ttlPpl == "1":
        side = attackOrDefense()
        op1 = getRandomOp(side)
    elif ttlPpl == "2":
        side = attackOrDefense()
        op1 = getRandomOp(side)
        
    elif ttlPpl == "3":
        side = attackOrDefense()
        op1 = getRandomOp(side)
    elif ttlPpl == "4":
        side = attackOrDefense()
        op1 = getRandomOp(side)
    elif ttlPpl == "5":
        side = attackOrDefense()
        op1 = getRandomOp(side)
    else:
        print("ERROR: Invalid player count!")
        print("\n")
        
    
