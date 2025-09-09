import { ApiConfigs, BaseAxios } from "../../rest";

export const reset_password = async (data: { email: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.reset_password,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

