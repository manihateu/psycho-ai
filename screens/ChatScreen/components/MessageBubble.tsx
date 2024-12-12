import React from 'react'
import { Image, Text, View } from 'react-native'

type TMessageBubbleProps = {
    message: string,
    owner: boolean,
    owner_name?: string
}

function MessageBubble({message, owner, owner_name}:TMessageBubbleProps) {
  return (
    <View className= {`flex pb-6 flex-row gap-x-3 items-end ${owner && "ml-auto flex-row-reverse"}`}>
      {owner ? 
        <View className='w-[32px] h-[32px] rounded-full bg-red-400 flex justify-center items-center'>
          <Text className="font-Comfortaa">
            {owner_name && owner_name[0]}
          </Text>
        </View>
        :
        <Image className='w-[32px] h-[32px] rounded-full bg-red-400 flex justify-center items-center' source={{uri: 'https://xcy960815.gallerycdn.vsassets.io/extensions/xcy960815/vscode-chatgpt-plugin/0.1.4/1716357068005/Microsoft.VisualStudio.Services.Icons.Default'}}/>
      }
      
      <View className={`p-3 bg-blue-200 max-w-[250px] ${owner? 'rounded-l-[18px] rounded-tr-[18px]' : 'rounded-r-[18px] rounded-tl-[18px]'}`}>
        <Text className="font-Comfortaa leading-5">
          {message}
        </Text>
      </View>
    </View>
  )
}

export default MessageBubble 