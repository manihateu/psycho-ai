import React, { useEffect, useState } from 'react'
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import LoginBG from '../../assets/LoginBackground.png'
import ComInput from '../../shared/ComInput/ComInput'
import ComButton from '../../shared/ComButton/ComButton'
import ComCheckbox from '../../shared/ComCheckbox/ComCheckbox'
import Arrow from '../../assets/BackArrow.svg'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../components/RootNavigator/RootNavigator'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpSchemaData } from './form.validation'
import { TRegisterBody, useRegisterMutation } from '../../store/api/mainApiSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/slices/userSlice'

const SignUpScreen = () => {
    const {goBack, navigate} = useNavigation<StackNavigation>()
    const dispath = useDispatch()
    useEffect(() => {
        StatusBar.setBackgroundColor("#FFFFFF", true)
    }, [])
    const [register, {isLoading}] = useRegisterMutation()
    const {control, handleSubmit, formState: {errors}, trigger} = useForm<SignUpSchemaData>({
        resolver: zodResolver(SignUpSchema)
    })

    const [isNameChaged, setIsNameChaged] = useState(false)
    const [isEmailChaged, setIsEmailChaged] = useState(false)
    const [isPasswordChaged, setPasswordChaged] = useState(false)

    const onSubmit = handleSubmit(async data => {
        const {checked, ..._data} = data;
        try {
            if (!checked) throw new Error("")
            const data = await register(_data).unwrap()
            await AsyncStorage.setItem("x-token-access", data.accessToken)
            await AsyncStorage.setItem("x-token-refresh", data.refreshToken)
            dispath(loginAction(data.accessToken))
        } catch (e) {
            console.log(e)
        }
    });


  return (
    <ComSafeAreaView className='bg-white'>
        <TouchableOpacity onPress={goBack} className='absolute rounded-full border border-[1px] border-[#EBEAEC] w-[55px] h-[55px] z-[999] bg-white top-[20px] left-[20px] flex justify-center items-center'>
            <Arrow width={18} height={18}/>
        </TouchableOpacity>
        <View className='h-1/3'>
            <ImageBackground source={LoginBG} className='w-full h-full flex justify-center items-center'>
                <Text className='font-Comfortaa text-[28px]'>Создать аккаунт</Text>
            </ImageBackground>
        </View>
        <View className='px-[20px]'>
        <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => {
                const hasError = Boolean(errors.email);
                return (
                <>
                    <ComInput
                    placeholder="Email"
                    onChange={(text) => {
                        setIsEmailChaged(true);
                        onChange(text); 
                        trigger("email"); 
                      }}
                    value={value}
                    isAccepted={isEmailChaged ? !hasError : false}
                    classNames='mt-5'
                    />
                    {hasError && (
                    <Text className='text-red-500 mt-2'>
                        {errors.email?.message || "Некорректный email"}
                    </Text>
                    )}
                </>
                );
            }}
            />
            <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => {
                const hasError = Boolean(errors.name);
                return (
                <>
                    <ComInput
                    placeholder="Имя"
                    onChange={(text) => {
                        setIsNameChaged(true)
                        onChange(text); 
                        trigger("name"); 
                      }}
                    value={value}
                    isAccepted={isNameChaged ? !hasError : false}
                    classNames='mt-5'
                    />
                    {hasError && (
                    <Text className='text-red-500 mt-2'>
                        {errors.name?.message || "Слишком короткое имя"}
                    </Text>
                    )}
                </>
                );
            }}
            />
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => {
                    const hasError = Boolean(errors.password);
                    return (
                    <>
                        <ComInput
                        placeholder="Пароль"
                        onChange={(text) => {
                            setPasswordChaged(true)
                            onChange(text); 
                            trigger("password"); 
                          }}
                        value={value}
                        isAccepted={isPasswordChaged ? !hasError : false}
                        classNames='mt-5'
                        isPassword
                        />
                        {hasError && (
                        <Text className='text-red-500 mt-2'>
                            {errors.password?.message || "Слишком короткий пароль"}
                        </Text>
                        )}
                    </>
                    );
                }}
                name="password"
            />
            <View className='mt-[20px] flex flex-row justify-between'>
                <Text className='font-Comfortaa'>Я прочитал(а) <Text className='text-[#7583CA]'>Правила использования</Text></Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ComCheckbox checked={value} setChecked={onChange}/>
                    )}
                    name="checked"
                />
            </View>
            <ComButton isLoading={isLoading} title="Начнем!" className='mt-[30px]' size='medium' onPress={onSubmit}/>
        </View>
        
    </ComSafeAreaView>
  )
}

export default SignUpScreen