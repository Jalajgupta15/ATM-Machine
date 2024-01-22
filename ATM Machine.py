#for stopping program execution for some time
import time

print("Please insert the CARD")

#for card processing
time.sleep(5)

password = 2468

#taking atm pin from user
pin = int(input("Kindly Enter your ATM pin "))

#user account balance
balance = 10000

#checking pin is valid or not 
if pin == password:
    #loop will run user get free 
    while True:

        #Showing  info to user

        print(""" 
			1 == balance
			2 == withdraw balance
			3 == deposit balance
			4 == exit
			"""
              )

        try:    
             #taking an option from user
            option = int(input("Please enter your choice "))
        except:
            print("Please enter valid option")
        
        #for option 1        
        if option == 1:
            print(f"Your current balance is {balance}")
                                     
        if option == 2:

            withdraw_amount = int(input("please enter withdraw_amount "))

            

            balance = balance - withdraw_amount

            print(f"{withdraw_amount} is debited from your account")

            

            print(f"your updated balance is {balance}")

            

        if option == 3:

            deposit_amount = int(input("please enter the deposit_amount"))

            balance = balance + deposit_amount

            

            print(f"{deposit_amount} is successfully credited to your account")



            print(f"your updated balance is {balance}")



        if option == 4:

            break


else:
    print("wrong pin Please try again")
