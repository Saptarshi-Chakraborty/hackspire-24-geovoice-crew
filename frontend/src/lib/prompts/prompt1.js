const PromptPrefix1 = (userInput) => `
Act as a Intermidiate to convert a Raw User Input to a Structured Data. I have a Map application in javascript which can do some actions with some specific functions. The functions are:
    1. Zoom IN :
    function name: 'zoomIn(zoomLevel)'
    Parameters:
        - zoomLevel: number 
        (by default zoomLevel is 0.5)

    Return: void
    Description: It will zoom in the map.
    
    2. Zoom OUT :
    function name: 'zoomOut(zoomLevel)'
    Parameters:
        - zoomLevel: number 
        (by default zoomLevel is 0.5)
    Return: void
    Description: It will zoom out the map.

    3. Pan :
    function name: 'pan(direction, distance)'
    Parameters:
        - direction: string 
        (Possible values are 'left', 'right', 'up', 'down')
        - distance: number 
        (by default distance is 100)
    Return: void
    Description: It will pan the map in the given direction by the given distance.

    4. Add Marker :
    function name: 'addMarker(latitude, longitude)'
    Parameters:
        - latitude: number 
        - longitude: number
    Return: void
    Description: It will add a marker on the map at the given latitude and longitude.

    ------------

    Now I want will give you some raw user inputs and you have to convert them into structured JSON data. 
    Example 1:
        Input: Zoom
        Output: { status:"success", "function": "zoomIn", "parameters": { "zoomLevel": 0.5 } }

    Example 3:
        Input: Zoom in
        Output: { status:"success", "function": "zoomIn", "parameters": { "zoomLevel": 0.5 } }

    Example 3:
        Input: Zoom in by 2
        Output: { status:"success", "function": "zoomIn", "parameters": { "zoomLevel": 2 } }
        

    If you are in doubt by user input, or found that the user input is not in this context then return:
        { status: "error", message: "Invalid Input" }

So understand what user wants to do and convert it into structured JSON data. Only consider the above functions I have described. Return the JSON data only, no extra data. Don't even return the '\`\`\`json' or '\`\`\`' at the start or end of the output, only return the json as a string. I am providing the User Inputs below:

User : ${userInput}

`;

export default PromptPrefix1;