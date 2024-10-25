import { v4 as generate } from 'uuid';

export const generateId = () => {
    const id = generate();
    
    return id;
}