import { Link, Stack } from "expo-router";
import TabOneScreen from ".";
import ProductDetailsScreen from "./[id]";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";

export default function MenuStack() {
    return <Stack>
        <Stack.Screen name="index" options={{ title: "Menu - Admin",
            headerRight: () => (
                <Link href="/(admin)/menu/create" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="plus"
                                size={25}
                                color={Colors.light.tint}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            )
         }} />
         <Stack.Screen name="[id]" options={{ title: "Menu - Admin",
            headerRight: () => (
                <Link href="/" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="pencil"
                                size={25}
                                color={Colors.light.tint}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            )
         }} />
    </Stack>
}