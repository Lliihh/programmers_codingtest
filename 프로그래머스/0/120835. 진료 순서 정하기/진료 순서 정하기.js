function solution(emergency) { 
    // Sort the emergency array in descending order
    let sortEmergency = emergency.slice().sort(function (a, b) {
        return b - a; 
    }); 
    
    let array = [];
    
    // Loop through the original emergency array
    for (let i = 0; i < emergency.length; i++) {
        // Find the index of the current element in the sorted array
        for (let j = 0; j < sortEmergency.length; j++) {
            if (emergency[i] === sortEmergency[j]) {
                array.push(j + 1); // Store the rank in the array
                break; // Exit the inner loop once the rank is found
            }  
        } 
    } 
    
    return array; // Return the array of ranks
}
