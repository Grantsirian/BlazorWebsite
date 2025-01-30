export function validateEmailInput(emailInputText) {
    console.log("Validating email input:", emailInputText);

    // Simple validation check
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // if (!emailInputText) {
    //     console.warn("Email input is empty.");
    //     return "Email input is empty.";
    // }

    // if (emailPattern.test(emailInputText)) {
    //     console.log("Valid email address.");
    //     return "";
    // } else {
    //     console.warn("Invalid email address. Wololololol");
    //     return "Invalid email address. Wololololol";
    // }

    if (!emailInputText.trim()) {
        return "Email cannot be empty!";
    }

    if (!emailInputText.includes("@")) {
        return "Your email must contain an '@' symbol!";
    }

    let parts = emailInputText.split("@");
    if (parts.length !== 2 || parts[1].indexOf(".") === -1) {
        return "Your email must have a domain name!";
    }

    let domainParts = parts[1].split(".");
    if (domainParts.length < 2 || domainParts[1].trim() === "") {
        return "Your email must have a valid domain extension!";
    }

    return "";
}