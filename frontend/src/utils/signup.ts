import { api } from "./apiConfig";

import type { FormBodyType } from "screens/Signup/Signup";

export const signup = async (data: FormBodyType) => {
    const formData = JSON.stringify(data);

    try {
        const res = await api.post('sign-up', formData, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        );
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return false;
        }
    }
}