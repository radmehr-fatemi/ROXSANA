const { hash ,compare } = require("bcryptjs")

export const hashedPassword = async (password) => {
    const hashPassword = await hash(password ,12);
    return hashPassword
}

export const verifyPassword = async (password ,hashedPassword) => {
    try {
        const verify = await compare(password ,hashedPassword);
        return verify
    } catch {
        return false
    }
}