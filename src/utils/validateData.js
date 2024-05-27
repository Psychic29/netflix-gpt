

export const validateData = (email, password) => {

    console.log(email, password)

    const isEmailCorrect = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordCorrect = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if (!isEmailCorrect)
        return "Email Not Valid";
    if (!isPasswordCorrect)
        return "Password Not Valid";

    return null;

}