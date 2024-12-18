import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MockBgCourse from '../../assets/mock-bg-course.png'
import Like from '../../assets/like.svg'
import Download from '../../assets/download.svg'
import Favorites from '../../assets/favorits.svg'
import Listening from '../../assets/listening.svg'
import Play from '../../assets/Play.svg'

const ComCourseModal = ({ open, setOpen }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    useEffect(() => {
        if (open) {
            bottomSheetModalRef.current?.present();
        } else {
            bottomSheetModalRef.current?.dismiss();
        }
    }, [open]); 
    return (
        <BottomSheetModal 
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            onDismiss={() => {setOpen(false)}}
            style={{borderRadius: 32}}
            snapPoints={[
                "90%"
            ]}
        >
            <BottomSheetView style={{ flex: 1 }}>
                <View className="absolute flex flex-row items-center top-[20px] right-[20px] z-[999] gap-x-2">
                    <TouchableOpacity className="p-[20px] rounded-full" style={{backgroundColor: 'rgba(3, 23, 76, 0.5)'}}>
                        <Like width={18} height={18} className="opacity-[1]"/>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-[20px] rounded-full" style={{backgroundColor: 'rgba(3, 23, 76, 0.5)'}}>
                        <Download width={18} height={18} className="opacity-[1]"/>
                    </TouchableOpacity>
                </View>
                <Image source={MockBgCourse} className="w-full rounded-b-xl"/>
                <View className="px-[20px] mt-3">
                    <Text className="text-[34px] font-Comfortaa mb-[15px]">Доброе утро</Text>
                    <Text className="text-[14px] font-Comfortaa text-[#A1A4B2] uppercase mb-[20px]">Курс</Text>
                    <Text className="text-[16px] font-Comfortaa mb-3">Облегчите свой разум спокойным ночным сном</Text>
                    <View className="flex flex-row justify-between mb-[30px]">
                        <View className="flex flex-row items-center">
                            <Favorites width={16} height={16}/>
                            <Text className="ml-3 font-Comfortaa">25.234 Понравилось</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <Listening width={16} height={16}/>
                            <Text className="ml-3 font-Comfortaa">25.234 Прослушано</Text>
                        </View>
                    </View>
                    <Text className="text-[20px] font-Comfortaa mb-3">Выберите рассказчика</Text>
                    {/* ...  */}
                    <ScrollView>
                        <View className="flex flex-row">
                            <TouchableOpacity className="p-[14px] rounded-full border flex items-center justify-center">
                                <Play width={12} height={12}/>
                            </TouchableOpacity>
                            <View className="ml-[20px] flex flex-col">
                                <Text className="font-Comfortaa">Фокус</Text>
                                <Text className="font-Comfortaa">10 МИН</Text>
                            </View>
                        </View>
                        <View className="h-[0.5] mx-3 bg-[#ADB8D9] my-3"></View>

                        <View className="flex flex-row">
                            <TouchableOpacity className="p-[14px] rounded-full border flex items-center justify-center">
                                <Play width={12} height={12}/>
                            </TouchableOpacity>
                            <View className="ml-[20px] flex flex-col">
                                <Text className="font-Comfortaa">Фокус</Text>
                                <Text className="font-Comfortaa">10 МИН</Text>
                            </View>
                        </View>
                        <View className="h-[0.5] mx-3 bg-[#ADB8D9] mt-3"></View>
                    </ScrollView>
                    
                </View>
                
            </BottomSheetView>
        </BottomSheetModal>
    );
};
export default ComCourseModal;