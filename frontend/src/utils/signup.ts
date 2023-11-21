import { api } from "./apiConfig";

export const signup = async () => {
    try {
        const res = await api.post('sign-up', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return false;
        }
    }
}