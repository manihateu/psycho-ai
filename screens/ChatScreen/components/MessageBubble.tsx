import React from 'react'
import { Text, View } from 'react-native'

type TMessageBubbleProps = {
    message: string,
    owner: boolean,
    owner_name?: string
}

function MessageBubble({message, owner, owner_name}:TMessageBubbleProps) {
  return (
    <View className='flex flex-row '>
      <View>
        <Text>
          {owner_name && owner_name[0]}
        </Text>
        
      </View>
      <View>

      </View>
    </View>
  )
}

export default MessageBubble 