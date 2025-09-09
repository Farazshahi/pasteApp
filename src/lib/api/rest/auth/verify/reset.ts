import { ApiConfigs, BaseAxios } from "../../../rest";

export const verify_reset = async (data: { token: string,newPassword:string }) => {
    try {
        const { data: newData } = await BaseAxios({
            method: 'POST',
            url: ApiConfigs.verify_reset,
            data: data
        })
        return newData
    } catch (error) {
        console.log(error)

    }
}

