import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';

const SplashScreen = () => {
    return (
        <ComSafeAreaView className="bg-[#8E97FD] flex items-center justify-center">
            <LottieView
                autoPlay
                style={{
                    width: Dimensions.get('screen').width - 16,
                    height: Dimensions.get('screen').width - 16,
                }}
                source={require('../../assets/lottie/animation.json')}
            />
        </ComSafeAreaView>
    );
};

export default SplashScreen;
