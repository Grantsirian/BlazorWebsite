export function validateEmailInput(emailInputText) {
    console.log("Validating email input:", emailInputText);

    // Simple validation check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailInputText) {
        console.warn("Email input is empty.");
        return false;
    }

    if (emailPattern.test(emailInputText)) {
        console.log("Valid email address.");
        return true;
    } else {
        console.warn("Invalid email address.");
        return false;
    }
}