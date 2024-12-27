import Play from '../../assets/Play.svg';
import Categories from '../../assets/categoryes.svg';
import Edit from '../../assets/edit.svg';
import Like from '../../assets/favorits.svg';
import Listening from '../../assets/listening.svg';
import Options from '../../assets/options.svg';
import Quit from '../../assets/quit.svg';
import { StackNavigation } from '../../components/RootNavigator/RootNavigator';
import { mixins } from '../../constans';
import { useQuit } from '../../shared/hooks/useQuit';
import { useGetUserQuery } from '../../store/api/authorizeApiSlice';
import { toast } from '@backpackapp-io/react-native-toast';
import { useNavigation } from '@react-navigation/native';
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Image } from 'react-native';

const ProfileScreen = () => {
    const { data, error, isLoading } = useGetUserQuery({});
    if (error) {
        toast.error('Произошла ошибка');
    }
    const { quitHandler } = useQuit();
    const navigation = useNavigation<StackNavigation>();
    return (
        <ScrollView className="py-3">
            <View className="w-full flex flex-row justify-around">
                <TouchableOpacity
                    className="rounded-3xl p-3 shandow bg-white"
                    style={[{ minWidth: Dimensions.get('window').width / 2 - 16 }, mixins.shadow]}
                >
                    <View className="flex flex-row">
                        <Image
                            source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }}
                            className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
                        />
                        <Edit width={32} height={32} style={{ marginLeft: 'auto' }} />
                    </View>
                    <Text className="font-Comfortaa mt-3">{!isLoading && data.name}</Text>
                    <Text className="font-Comfortaa mt-3">{!isLoading && data.email}</Text>
                </TouchableOpacity>
                <View
                    className="rounded-3xl p-3 shandow bg-white bg-[#8E97FD] flex justify-center"
                    style={[{ minWidth: Dimensions.get('window').width / 2 - 16 }, mixins.shadow]}
                >
                    <View className="flex flex-row justify-center">
                        <Text className="font-Comfortaa text-white">Спокойствие</Text>
                    </View>
                    <View className="flex flex-row justify-center mt-3">
                        <TouchableOpacity className="rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center">
                            <Play width={12} height={12} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="w-full flex flex-row justify-around mt-3">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('LikedScreen');
                    }}
                    className="rounded-3xl p-3 shandow bg-white relative"
                    style={[
                        { minWidth: Dimensions.get('window').width / 2 - 16, minHeight: 150 },
                        mixins.shadow,
                    ]}
                >
                    <Like width={32} height={32} style={{ marginLeft: 'auto' }} />
                    <Text className="font-Comfortaa mt-auto ">Понравившиеся</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="rounded-3xl p-3 shandow bg-white "
                    style={[
                        { minWidth: Dimensions.get('window').width / 2 - 16, minHeight: 150 },
                        mixins.shadow,
                    ]}
                >
                    <Listening width={32} height={32} style={{ marginLeft: 'auto' }} />
                    <Text className="font-Comfortaa mt-auto  ">История</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                className="rounded-3xl p-5 flex flex-row items-center shandow bg-white mx-[8px] mt-3"
                style={[{ minWidth: Dimensions.get('window').width / 2 - 32 }, mixins.shadow]}
            >
                <Text className="font-Comfortaa">Мои категории</Text>
                <Categories width={20} height={20} style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
            <TouchableOpacity
                className="rounded-3xl p-5 flex flex-row items-center shandow bg-white mx-[8px] mt-3"
                style={[{ minWidth: Dimensions.get('window').width / 2 - 32 }, mixins.shadow]}
            >
                <Text className="font-Comfortaa">Настройки</Text>
                <Options width={20} height={20} style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={quitHandler}
                className="rounded-3xl p-5 flex flex-row items-center shandow bg-white mx-[8px] mt-3 bg-red-400"
                style={[{ minWidth: Dimensions.get('window').width / 2 - 32 }, mixins.shadow]}
            >
                <Text className="font-Comfortaa text-white">Выйти</Text>
                <Quit width={20} height={20} style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileScreen;
