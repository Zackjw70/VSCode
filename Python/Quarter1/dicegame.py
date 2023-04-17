

import random
import time
proll = 0
gg = "y"

players = int(input("\t\t\tDo you have 1 or 2 players? "))

random.randint

if players == 2:
    
    while gg == "y":
        
        rollo = input("\nIs player one ready to roll? [y/n] ")
        rollo = rollo.lower()
        if rollo == "y":
            d1 = random.randint(1,20)
            print("\n\t\t\tPlayer one's roll is", d1)
        else:
            if proll == 5:
                print("\n\t\t\tWow you really don't want to roll")
                print("\t\t\t\t   I give up")
                print("\t\t\t\t      Bye")
                time.sleep(3)
                raise SystemExit
            else:
                print("\n\t\t\tplease roll")
                proll = proll + 1
                
            continue

        rollt = input("\nIs player 2 ready to roll [y/n] ")
        rollt = rollt.lower()

        if rollt == "y":
            d2 = random.randint(1,20)
            print("\n\t\t\tPlayer two's roll is", d2)
        else:
            print("\n\n\t\t\tnow you have to start over stupid")
            time.sleep(1)
            continue

        if d1 > d2:
            print("\n\n\t\t\tPlayer One wins")
            time.sleep(1)
      
        else:
            if d1 == d2:
                print("\n\n\t\t\tIt's a tie roll again")
                time.sleep(1)
                continue
            print("\n\n\t\t\tPlayer two wins")
            time.sleep(1)
        gg = input("\nDo you want to play again [y/n] ")
        gg = gg.lower()

        if gg == "y":
            continue
        else:
            import time
            print("\n\n\t\t\tThanks for playing...")
            time.sleep(3)

            raise SystemExit

       

        gg = input("Do you want to play again [y/n] ")
        gg = gg.lower()

if players == 1:
    print("\n\n\t\t\tThe Ai will be your opponent")
    proll = 0
    while gg == "y":
        
        rollo = input("\nIs player one ready to roll? [y/n] ")
        rollo = rollo.lower()
        if rollo == "y":
            d1 = random.randint(1,20)
            print("\n\t\t\tPlayer one's roll is", d1)
        else:
            if proll == 5:
                print("\n\t\t\tWow you really don't want to roll")
                print("\t\t\t\t   I give up")
                print("\t\t\t\t      Bye")
                time.sleep(3)
                raise SystemExit
            else:
                print("\n\t\t\tplease roll")
                proll = proll + 1
            continue
        
        da = random.randint(1,20)
        print("\n\t\t\tAI's roll is", da)
        time.sleep(1)
       
        if d1 > da:
            print("\n\n\t\t\tPlayer One wins")
            time.sleep(1)
        else:
            if d1 == da:
                print("\n\n\t\t\tIt's a tie roll again")
                time.sleep(1)
                continue
            print("\n\n\t\t\t\tAI wins")
            time.sleep(1)

       

        gg = input("\nDo you want to play again [y/n] ")
        gg = gg.lower()

        if gg == "y":
            continue
        else:
            import time
            print("\n\n\t\t\tThanks for playing...")
            time.sleep(3)

            raise SystemExit
