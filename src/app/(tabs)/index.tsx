import * as QuickActions from 'expo-quick-actions'
import { useQuickActionCallback } from 'expo-quick-actions/hooks'
import { useEffect } from 'react'
import { Platform, Text, View } from 'react-native'

export default function Home() {
	useQuickActionCallback((action) => {
		console.log(action)
	})

	useEffect(() => {
		QuickActions.setItems([
			{
				id: '1',
				title: 'Perfil',
				icon:
					Platform.OS === 'ios'
						? 'symbol:person.circle.badge.questionmark'
						: 'help_icon',
				params: {
					href: '/profile',
				},
			},
			{
				id: '2',
				title: 'Sobre nós',
				icon:
					Platform.OS === 'ios'
						? 'symbol:person.circle.badge.questionmark'
						: 'help_icon',
				params: {
					href: '/about',
				},
			},
			{
				id: '3',
				title: 'Fale conosco',

				icon:
					Platform.OS === 'ios'
						? 'symbol:person.circle.badge.questionmark'
						: 'help_icon',
				params: {
					href: '/contat',
				},
			},
		])
	}, [])

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text
				style={{ fontSize: 32, justifyContent: 'center', alignItems: 'center' }}
			>
				Home
			</Text>
		</View>
	)
}
