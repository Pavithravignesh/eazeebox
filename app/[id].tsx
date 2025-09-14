import dayjs from "dayjs";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
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
            <View className="absolute bottom-0 left-0 right-0 flex-row justify-between border-t-2 border-gray-400 p-3 pb-10 items-center">
                <Text className="text-xl font-semibold">Free</Text>
                <Pressable className="bg-red-400 p-5 px-8 rounded-xl">
                    <Text className="text-white text-lg font-bold">Join and RSVP</Text>
                </Pressable>
            </View>
        </View>
    );
}