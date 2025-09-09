import { ApiConfigs, BaseAxios } from "../../../rest";

export const signup_with_email = async (data: { email: string, password: string,consent: boolean, referralCode?: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.signup_with_email,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

