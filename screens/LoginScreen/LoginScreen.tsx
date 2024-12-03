
import { ImageBackground, Pressable, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import LoginBG from '../../assets/LoginBackground.png'
import ComInput from '../../shared/ComInput/ComInput'
import ComButton from '../../shared/ComButton/ComButton'
import Arrow from '../../assets/BackArrow.svg'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaData } from './form.validation'
import { useLoginMutation } from '../../store/api/mainApiSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loginAction } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

const LoginScreen = () => {
    const {goBack} = useNavigation();
    const [isEmailChaged, setIsEmailChaged] = useState(false)
    const [isPasswordChaged, setPasswordChaged] = useState(false)
    const [login, {isLoading}] = useLoginMutation()
    const dispath = useDispatch()
    useEffect(() => {
      StatusBar.setBackgroundColor("#FFFFFF", true)
    }, [])

    const {control, handleSubmit, formState: {errors}, trigger} = useForm<LoginSchemaData>({
      resolver: zodResolver(LoginSchema)
    })

    const onSubmit = handleSubmit(async _data => {
        try {
          const data = await login(_data).unwrap();
          await AsyncStorage.setItem("x-token-access", data.accessToken)
          await AsyncStorage.setItem("x-token-refresh", data.refreshToken)
          dispath(loginAction(data.accessToken))
        } catch (e) {
          console.log(e)
        }
    })
  return (
    <ComSafeAreaView className='bg-white'>
        <TouchableOpacity onPress={goBack} className='absolute rounded-full border border-[1px] border-[#EBEAEC] w-[55px] h-[55px] z-[999] bg-white top-[20px] left-[20px] flex justify-center items-center'>
            <Arrow width={18} height={18}/>
        </TouchableOpacity>
        <View className='h-1/3'>
            <ImageBackground source={LoginBG} className='w-full h-full flex justify-center items-center'>
                <Text className='font-Comfortaa text-[28px]'>Добро пожаловать!</Text>
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
            <ComButton onPress={onSubmit} isLoading={isLoading} title="Начнем!" className='mt-[30px]' size='medium'/>
            <Text className='font-Comfortaa mt-[20px] underline text-center'>Забыли пароль?</Text>
        </View>
        <View className='flex flex-row w-full px-1 justify-center mt-auto mb-[60px]'>
          <Text className='font-Comfortaa text-gray-400 mr-2'>
            Еще нет аккаунта?
          </Text>
          <Pressable onPress={() => {}}>
            <Text className='font-Comfortaa text-blue-600'>
              Зарегистрироваться
            </Text>
          </Pressable>
        </View>
    </ComSafeAreaView>
  )
}

export default LoginScreen