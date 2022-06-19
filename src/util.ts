import axios from "axios"

export const checkHyperionURL = async(url: string): Promise<string> => {
    let result;
    try {
        result = await axios.get(url, {
            timeout: 2000
        })
    } catch (error) {
        return Promise.reject();
    }
    return Promise.resolve(url);
}