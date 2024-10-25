import { generateId } from "./services/generateId.js"


export let storage = [
    {
        id: generateId(),
        content: 'test'
    },
    {
        id: generateId(),
        content: 'test2'
    },
    {
        id: generateId(),
        content: 'test3'
    }
]