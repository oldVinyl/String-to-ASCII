str = input("What word would you like to convert to ASCII? ")
for i in range (0, len(str)) :
  print(str[i], " => ", ord(str[i]))