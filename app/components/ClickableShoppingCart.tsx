import { Alert, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ClickableIconProps {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color?: string;
    size?: number;
    message?: string;
}

export default function ClickableShoppingCart({
                                                  name,
                                                  color = 'black',
                                                  size = 24,
                                                  message = 'Klikol si na ikonku!',
                                              }: ClickableIconProps) {
    const handlePress = () => {
        Alert.alert('Info', message);
    };

    return (
        <Pressable onPress={handlePress}>
            <FontAwesome name={name} size={size} color={color} />
        </Pressable>
    );
}
