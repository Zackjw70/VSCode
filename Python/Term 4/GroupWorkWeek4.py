a = int(input("Enter number one "))
b = int(input("Enter number two "))
c = int(input("Enter number three "))


if a > b and a > c:
    if b > c:
        print(a,b,c)
    else:
        print(a,c,b)
else:
    if b > a and b > c:
        if a > c:
            print(b,a,c)
        else:
            print(b,c,a)
    else:
        if a > b:
            print(c,a,b)
        else:
            print(c,b,a)