import dayjs from "dayjs";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import events from "../assets/events.json";

export default function EventPage() {
    const { id } = useLocalSearchParams();
    const event = events.find((event) => event.id === id);
    if (!event) {
        return <Text>Event not found</Text>;
    }
    return (
        <View className="p-3 bg-white gap-3 flex-1">
            <Stack.Screen options={{ title: 'Event', headerBackTitle: "", headerTintColor: 'black' }} />
            <Image
                source={{
                    uri: event.image,
                }}
                className="aspect-video w-full rounded-xl"
            />

            <Text className="text-3xl font-bold">{event.title}</Text>
            <Text className="text-lg font-semibold uppercase text-amber-800">{dayjs(event.datetime).format("ddd, D MMM")} . {dayjs(event.datetime).format("hh:mm A")}</Text>
            <Text className="text-lg">{event.description}</Text>
            <Text className="text-gray-500">{event.location}</Text>
        </View>
    );
}