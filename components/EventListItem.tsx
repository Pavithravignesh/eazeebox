import Feather from "@expo/vector-icons/Feather";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface Event {
  title: string;
  location: string;
  image: string;
  datetime: string;
}

export default function EventListItem({ event }: { event: Event }) {
  return (
    <Link href="/Event" asChild>
      <Pressable className="p-3 gap-3 border-b-7 border-black-200 pb-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-800">
              {dayjs(event.datetime).format("ddd, D MMM")} . {dayjs(event.datetime).format("hh:mm A")}
            </Text>
            <Text className="text-xl font-bold" numberOfLines={2}>
              {event.title}
            </Text>
            {/* <Text className="text-gray-700">{event.location}</Text> */}
          </View>
          <Image
            source={{
              uri: event.image,
            }}
            className="aspect-video w-2/5 rounded-xl"
          />
        </View>

        <View className="flex-row gap-3">
          <Text className="text-gray-500 mr-auto">16 going</Text>
          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={24} color="gray" />
        </View>
      </Pressable>
    </Link>
  );
}
