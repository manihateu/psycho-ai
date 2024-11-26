import React from 'react'
import { Image, Text, View } from 'react-native'

type TMessageBubbleProps = {
    message: string,
    owner: boolean,
    owner_name?: string
}

function MessageBubble({message, owner, owner_name}:TMessageBubbleProps) {
  return (
    <View className='flex flex-row'>
      {owner ? 
        <View className='w-[32px] h-[32px] rounded-full bg-red-400 flex justify-center items-center'>
          <Text>
            {owner_name && owner_name[0]}
          </Text>
        </View>
        :
        <Image className='w-[32px] h-[32px] rounded-full bg-red-400 flex justify-center items-center' source={{uri: 'https://xcy960815.gallerycdn.vsassets.io/extensions/xcy960815/vscode-chatgpt-plugin/0.1.4/1716357068005/Microsoft.VisualStudio.Services.Icons.Default'}}/>
      }
      
      <View>

      </View>
    </View>
  )
}

export default MessageBubble 