import time

amnt = int(input("How Many Times Would You Like top Loop?: "))

for x in range(amnt):
    print("*** Value of x = " + str(x) + "\r\n")
    print("Repetition #: " + str(x) + "\r\n")
    print("1. Render Graphics" + "\r\n")
    print("2. Render Audio" + "\r\n")
    print("3. Execute AI" + "\r\n")
    print("4. Preform Networking" + "\r\n")
    print("5. Strobe keyboard/mouse" + "\r\n")
    print("--- End of Game Loop ---" + "\r\n")
    time.sleep(2)