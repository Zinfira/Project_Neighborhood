# _Beep Boop Converter_

#### _The program takes an inputted number and returns with some exceptions, 04/03/2020_

#### By _**Zinfira Safargalieva**_

## Description

_This program takes a number inputted by a user and counts up to that number, but output of certain numbers based on specifications._

## Project Specifications
| Behavior | Input | Output| 
|----------|-------|-------|
|Return string of numbers counting up from 0 to users number | 5 | 0,1,2,3,4,5|
|All numbers that have three return "Won't you be my neighbor?" | 4 | 0,1,2,Won't you be my neighbor?, 4 |
|All numbers that have 2 but not 3 return "Boop!"| 2 | 0,1,"Boop!"|
|All numbers that have 2 and 3| 23 | 0,1,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,1,1,Boop!,Won't you be my neighbor?,1,1,1,1,1,1,Boop!,Boop!,Boop!,Won't you be my neighbor? |
|All numbers that have 1 but not 2 or 3, return "Beep!" | 11 | 0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep! |
|All numbers that have 1 and 2 and 3 | 23 | 0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,Won't you be my neighbor? |
|When user input number divisible by 3, it returns with input name | 15 | 0, Beep!, Boop!, Won't you be my neighbor, Zinfira?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor, Zinfira?, Beep!, Beep! |
|When user input number not divisible by 3| 16 | 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!


## Setup/Installation Requirements

* This program requires to have a web browser as Google Chrome, Safari or Mozilla Firefox
* You can clone this program to your Desktop or download the zip file in this page <https://github.com/Zinfira/Project_Neighborhood.git> 
##### OR #####
* clone and open the file locally:
* _run in terminal:_
>$git clone https://github.com/Zinfira/Project_Neighborhood.git
* _open index.html in your browser._

## Known Bugs

_No known bugs_

## Support and contact details

_If you have any issues with the program or you have any suggestions, email me [zsafargalieva@gmail.com](href="mailto:zsafargalieva@gmail.com")_

## Technologies Used

_HTML, CSS, JavaScript, jQuery 3.4.1, Bootstrap_

### License

*Licensed under [MIT](href="https://en.wikipedia.org/wiki/MIT_License") license*

Copyright (c) 2020 **_Zinfira Safargalieva_**