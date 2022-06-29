import bcrypt from 'bcryptjs';

export const encryptPassword = (password: string)=> {
    const salt = bcrypt.genSaltSync(6);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
} //jaoeivan