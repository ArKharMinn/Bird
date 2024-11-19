import Bird from "@/components/Bird";
import Home from "@/components/Home";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  const [page, setPage] = useState("");
  const getPage = () => {
    switch (page) {
      case "bird":
        return <Bird />;

      default:
        return <Home />;
    }
  };
  return (
    <View style={tw`flex-1 bg-black`}>
      <View style={tw`flex-row justify-center items-center gap-3`}>
        <TouchableOpacity onPress={() => setPage("")}>
          <Text
            style={tw`${
              page === "" ? "text-blue-400 font-semibold text-xl" : "text-white"
            } p-5`}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("bird")}>
          <Text
            style={tw`${
              page === "bird" ? "text-blue-400 font-semibold text-xl" : "text-white"
            } p-5`}
          >
            Bird
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={tw`pb-5`}>{getPage()}</ScrollView>
    </View>
  );
}
