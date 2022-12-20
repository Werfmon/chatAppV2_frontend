import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { updateUserAvatar } from './updateUserAvatar';
import { Dispatch, SetStateAction } from 'react';
import { ErrorProps } from '../../_Components/ErrorHanding/Types/ErrorProps';
import { Status } from '../../_Components/ErrorHanding/Helper/Status';
import { removeError } from '../../_Components/ErrorHanding/Error';

export function pickImage(setError: Dispatch<SetStateAction<ErrorProps>>): void {
    const options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        mediaType: 'photo',
    };
    // @ts-expect-error
    launchImageLibrary(options, (response: ImagePicker.ImagePickerResponse) => {
        if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
            setError({message: "Something went wrong", show: true, status: Status.ERROR})
            removeError(setError);
        } else {
            if (response.assets !== undefined && response.assets[0].uri !== undefined) {
                const uri: string = response.assets[0].uri;

                RNFS.readFile(uri, 'base64').then((base64: string) => {
                    const ext: string = uri.substring(uri.lastIndexOf('.') + 1);
                    const base64Image: string = `data:image/${ext};base64,${base64}`;
                    
                    updateUserAvatar(base64Image, setError);
                }).catch(err => {
                    console.error(err);
                    setError({message: "Something went wrong", show: true, status: Status.ERROR})
                    removeError(setError);
                });
            }
        }
    });
}