def bubbleSort(nlist):
    for passnum in range(1,len(nlist)):
        for i in range(0,len(nlist) - passnum):
            if nlist[i]>nlist[i+1]:
                temp = nlist[i]
                nlist[i] = nlist[i+1]
                nlist[i+1] = temp

                
def jSearch(nlist,snum):
    
    found = False
    pos = 0
    
    
    for n in range(0,len(nlist)):
        pos = int(n/2)
        while found == False:
            if nlist[pos] == snum:
                found = True
            elif nlist[pos] > snum:
                pos = int(pos/2)
                round(pos)
            else:
                pos =  int(pos * 1.5)
                round(pos)
    return pos
                
                
                
                
                
newlist = [6,7,36,25,84,69,2]
bubbleSort(newlist)
pos = jSearch(newlist,7)


print(pos)