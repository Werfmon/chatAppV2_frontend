import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { MainView } from '../_Components/MainView'
import Error from '../_Components/ErrorHanding/Error'
import { ErrorProps } from '../_Components/ErrorHanding/Types/ErrorProps';
import { Status } from '../_Components/ErrorHanding/Helper/Status';
import { Heading } from '../Settings/Components/Heading';
import { ContainerHeading } from '../Settings/Components/ContainerHeading';
import { Form } from '../Login/Components/Form';
import { CustomTextInput } from '../_Components/CustomTextInput';
import { Color } from '../../Components/Style/Color';
import { ButtonsInline } from '../_Components/ButtonsInline';
import TextButton from '../_Components/TextButton';
import Button from '../_Components/Button';
import { changePassword } from './Services/changePassword';
import { navigate } from '../../Components/Navigation/RootNavigation';

export default function PasswordChange() {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPasswordAgain, setNewPasswordAgain] = useState<string>('');
    const [error, setError] = useState<ErrorProps>({message: '', status: Status.INFO});

    return (
        <MainView>
            <Error message={error.message} status={error.status} show={error.show}/>
            <ContainerHeading>
                <Heading>Password Change</Heading>
            </ContainerHeading>
            <Form>
                <CustomTextInput
                    onChangeText={(text: string) => setOldPassword(text)}
                    placeholder="Old password"
                    secureTextEntry={true}
                    placeholderTextColor={Color.INPUT_PLACEHOLDER}
                />
                <CustomTextInput
                    onChangeText={(text: string) => setNewPassword(text)}
                    placeholder="New password"
                    secureTextEntry={true}
                    placeholderTextColor={Color.INPUT_PLACEHOLDER}
                />
                <CustomTextInput
                    onChangeText={(text: string) => setNewPasswordAgain(text)}
                    placeholder="New password again"
                    secureTextEntry={true}
                    placeholderTextColor={Color.INPUT_PLACEHOLDER}
                />
                <ButtonsInline>
                    <TextButton
                        title="Exit"
                        onPress={() => navigate('Settings')}
                    />
                    <Button title='Change' onPress={() => changePassword(oldPassword, newPassword, newPasswordAgain, setError)} />
                </ButtonsInline>
            </Form>
        </MainView>
    )
}