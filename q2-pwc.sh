#Initilises a variable to store the password
VALID_PASSWORD="password"
#Asks the user for there password as input
echo "Enter your password"
#Reads the entered password and stores the input in the variable ANSWER
read ANSWER
#If the password is correct then display "You have access" else display "Access Denied"
if [ "$ANSWER" = "$VALID_PASSWORD" ]; then
	echo "You have access"
else
	echo "Access Denied"
fi
