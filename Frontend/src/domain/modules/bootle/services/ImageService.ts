import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import { AxiosResponse} from "axios";
import api from "../../../../core/config/Api.ts";

class ImageService extends AbstractService<File> {
    async save(data: File): Promise<AxiosResponse> {
        // Create a FormData object
        const formData = new FormData();

        // Check if data is a Blob
        if (data instanceof Blob) {
            // Create a File object from the Blob
            const file = new File([data], data.name, { type: 'image/png' });
            // Append the File object to the FormData
            formData.append('file', file);
        } else {
            // If it's not a Blob, directly append it to FormData
            formData.append('file', data);
        }

        // Call the parent class's post method with the FormData
        return api.post(this.base, formData);
    }

    imageUrl(imageId: string): string {
        const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;

        return `${baseURL}${this.base}${imageId}`;
    }
}

export default new ImageService("/storage/");
