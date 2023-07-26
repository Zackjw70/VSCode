#Zachary Wyeth
#
#Intermidiate Python
#Quest 1
#
# Variables:
#  roomCapacity     Total Capacity of the meeting room
#  ttlAttend        Total number of people attending the event
#  leftOver         Total amount of people that can still attend
#  tooMuch          Total amount of people over the limit of the room Capacity
#  accepted         Whether or not the meeting is possible
#  checkAnother       Would the user like to check another room
#  end                  brings the user to the end of the program/ done checking rooms
####################################################################################
def capacity():
    roomCapacity = int(input("What is the Capacity of the room? "))
    totalAttend = int(input("How many people plan to attend the event? "))

    
    return(roomCapacity, totalAttend)


def exceedBy(roomCapacity, totalAttend):
    if (roomCapacity > totalAttend):
        left = roomCapacity - totalAttend
        accepted = "y"
    else:
        left = totalAttend - roomCapacity
        accepted = "n"
    return(left, accepted)

def tryAgain():
    end = "n"
    while end == "n":
        checkAgain = input("Would you like to check another room? [y/n] ")
        checkAgain = checkAgain.lower()
        if checkAgain == "y":
            end = "y"
        else:
            if checkAgain == "n":
                end = "y"
            else:
                end = "n"
    return(checkAgain)



    
            



#Start of program!!!!!
checkAnother = "y"
while checkAnother == "y":
    roomCapacity, totalAttend = capacity()
    leftOver, accepted = exceedBy(roomCapacity, totalAttend)

    if accepted == "y":
        print("The meeting can be attended in this room.", leftOver, "more people can attend!")
    else:
        print(leftOver, "people need to be told they can not attend the meeting.")

    end = tryAgain()

    if end == "y":
        checkAnother = "y"
    else:
        checkAnother = "n"




