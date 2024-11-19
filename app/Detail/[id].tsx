import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const bird = useSelector((state) => state.bird);
  const detail = bird.find((item: any) => item.Id == Number(id));
  const [data, setData] = useState<any>("");

  useEffect(() => {
    setData(detail);
  }, []);
  return (
    <View style={tw`bg-black h-full`}>
      <ScrollView contentContainerStyle={tw`gap-5 p-4`}>
        <View style={tw`flex-row p-3 gap-4`}>
          <Image style={tw`w-50 h-40 rounded`} source={data.ImagePath} />
          <View style={tw`flex-1 gap-3`}>
            <Text style={tw`font-bold text-white mt-2 text-lg`}>
              {data.BirdMyanmarName}
            </Text>
            <Text style={tw`font-bold text-gray-400 uppercase text-[13px]`}>
              {data.BirdEnglishName}
            </Text>
          </View>
        </View>

        <Text style={tw`font-bold text-gray-500`}>{data.Description}</Text>

        
      </ScrollView>
    </View>
  );
};

export default Detail;
