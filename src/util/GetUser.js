// this function will grab data from the local storage,
// when the user logged in, we are storing user's data in the local storage
// and this data is stored in the local storage as a string
// so, we convert the data into JSON format

// export function getUserDetails() {
//     let user = JSON.parse(localStorage.getItem('todoAppUser'));
//     // console.log(user);
//     return user;
// }

// Import Axios for making HTTP requests
// import axios from 'axios';

// Function to get user details from local storage
export function getUserDetails() {
    try {
        // Fetching the user details from local storage
        let user = JSON.parse(localStorage.getItem('todoAppUser'));
        return user;
    } catch (error) {
        // Handling errors, such as parsing errors
        console.error('Error fetching user details:', error);
        return null;
    }
}

export function getTodoDetails(){
    try {
        // Fetching the user details from local storage
        let user = JSON.parse(localStorage.getItem('response of get all'));
        return user;
    } catch (error) {
        // Handling errors, such as parsing errors
        console.error('Error fetching user details:', error);
        return null;
    }

}

export function getTodosFromLocalStorageAfterDelete () {
    const todoDataJSON = localStorage.getItem('todoTasks');
    const todoData = JSON.parse(todoDataJSON);
    return todoData?.todos || [];
  };
  