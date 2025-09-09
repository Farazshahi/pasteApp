import { ApiConfigs, BaseAxios } from "../../../rest";

export const verify_email = async (data: { token: string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.verify_email,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

