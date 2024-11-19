import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Home = () => {
  const bird = useSelector((state) => state.about);
  const [about, setAbout] = useState<any>("");
  useEffect(() => {
    setAbout(bird);
  }, []);
  return (
    <View>
      <ScrollView contentContainerStyle={tw`gap-5`}>
        <Image
          style={tw`w-[100%] h-50`}
          resizeMode="cover"
          source={require("@/assets/images/bird.jpg")}
        />
        <Text style={tw`text-white px-1`}>{about.info}</Text>
        <View
          style={tw`flex-row justify-center items-center bg-gray-800 m-3 gap-2 rounded-xl p-4`}
        >
          <View style={tw`flex-1 shadow-lg bg-gray-700 py-3 rounded-xl gap-3`}>
            <Text style={tw`text-white text-center text-lg`}>
              {about.species}
            </Text>
            <Text style={tw`text-white text-center text-[13px] text-gray-300`}>
              မျိုးစိတ်
            </Text>
          </View>
          <View style={tw`flex-1 shadow-lg bg-gray-700 py-3 rounded-xl gap-3`}>
            <Text style={tw`text-white text-center text-lg`}>
              {about.Genus}
            </Text>
            <Text style={tw`text-white text-center text-[13px] text-gray-300`}>
              မျိုးစု
            </Text>
          </View>
          <View style={tw`flex-1 shadow-lg bg-gray-700 py-3 rounded-xl gap-3`}>
            <Text style={tw`text-white text-center text-lg`}>
              {about.Breed}
            </Text>
            <Text style={tw`text-white text-center text-[13px] text-gray-300`}>
              မျိုးရင်း
            </Text>
          </View>
          <View style={tw`flex-1 shadow-lg bg-gray-700 py-3 rounded-xl gap-3`}>
            <Text style={tw`text-white text-center text-lg`}>
              {about.totalSpecies}
            </Text>
            <Text style={tw`text-white text-center text-[13px] text-gray-300`}>
              မျိုးစဉ်
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
