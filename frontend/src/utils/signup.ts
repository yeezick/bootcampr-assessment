import { api } from "./apiConfig";

import type { FormBodyType } from "screens/Signup/Signup";

export const signup = async (data: FormBodyType) => {
    try {
        const res = await api.post('sign-up', { data }, {
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