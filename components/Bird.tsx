import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Bird = () => {
  const bird = useSelector((state) => state.bird);
  
  
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    setList(bird);
  }, []);
  return (
    <View>
      <View style={tw`flex-row flex-wrap gap-3 justify-center`}>
        {list.map((item: any) => {
          return (
            <View key={item.Id}>
              <TouchableOpacity
                onPress={() => router.push(`/Detail/${item.Id}`)}
                style={tw`p-3 w-40 gap-3 bg-gray-700 rounded-xl shadow-lg`}
              >
                <Image
                  source={item.ImagePath}
                  resizeMode="cover"
                  style={tw`w-35 h-30 rounded-3xl`}
                />
               <View style={tw`gap-2`}>
               <Text
                  style={tw`uppercase text-gray-400 text-[13px] font-medium`}
                >
                  {item.BirdEnglishName}
                </Text>
                <Text style={tw`font-bold text-white text-lg`}>
                  {item.BirdMyanmarName}
                </Text>
               </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Bird;
