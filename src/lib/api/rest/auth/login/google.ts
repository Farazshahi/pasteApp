import { ApiConfigs, BaseAxios } from "../../../rest";

export const login_with_google = async (data: { token: string}) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.login_with_google,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

