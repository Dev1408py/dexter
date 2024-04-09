export function getErrorMessage (error) {
    let msg = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    msg += ". Please refresh the page.";
    return msg;
}