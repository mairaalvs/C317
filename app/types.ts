import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserModel } from './api/user';

export type StackParamList = {
    Login: undefined;
    Register: undefined;
    Welcome: undefined;
    Group: undefined;
    Redirection: undefined;
    Confirmation: undefined;
    Services: undefined;
    ProfileService: { id: string };
    Studies: undefined;
    Studies2: undefined;
    Profile: undefined;
    Profile2: undefined;
    ProfileSettings: {
        user: UserModel | undefined,
    };
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;