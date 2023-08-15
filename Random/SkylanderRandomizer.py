import random


skylanders = (
    "Tree Rex", "Shroom Boom", "Camo", "Zook", "Stump Smash", "Stealth Elf",
    "Ninjini", "Pop Fizz", "Spyro", "VooDood", "Double Trouble", "Wrecking Ball",
    "Hot Head", "Hot Dog", "FlameSlinger", "Eruptor", "Ignitor", "Sunburn",
    "ThumpBack", "Chill", "Whamshell", "Slam Bam", "Zap", "Gill Grunt",
    "Eye Brawl", "Fright Rider", "Chop Chop 2", "Cynder 2", "Chop Chop", "Cynder", "Hex", "Ghost Roaster",
    "Crusher", "Flashwing", "Dino Rang", "Terrafin", "Prism Break", "Bash",
    "Bouncer", "Sprocket", "Drill Sergent", "Drobot", "Trigger Happy", "Boomer",
    "Swarm", "Jet Vac", "Lightning Rod", "Whirlwind", "Sonic Boom", "Warnado" 
)
cont = input("1 or 2: ")

while cont == "1" or cont == "2":
    if cont == "1":
        r1 = random.randint(0,49)
        print(skylanders[r1])
    if cont == "2":
        r1 = random.randint(0,49)

        print(skylanders[r1])
        r2 = random.randint(0,49)
        while r1 == r2:
            r2 = random.randint(0,49)

        print(skylanders[r2])

    cont = input("\n1 or 2: ")
    
    
    

    




