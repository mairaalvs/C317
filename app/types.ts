import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
        userId: string,
        serviceId: string | undefined,
    };
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;