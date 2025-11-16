import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/global-provider";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Cards, { FeaturedCards } from "@/components/Cards";
import Filters from "@/components/Filters";
import images from "@/constants/images";

export default function Index() {
  const { user } = useGlobalContext();
  const recommendationsData = [1, 2, 3, 4, 5, 6]; // Add more items to test scroll
  
  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={recommendationsData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={{ width: '50%', paddingHorizontal: 8, marginBottom: 16 }}>
            <Cards image={images.oran} />
          </View>
        )}
        keyExtractor={(_, index) => `recommendation-${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={() => (
          <View>
            {/* Header */}
            <View className="flex flex-row items-center justify-between mt-5 px-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-10 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-200">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <View className="px-5">
              <Search />
            </View>

            {/* Featured Section */}
            <View className="my-5">
              <View className="flex flex-row items-center justify-between px-5">
                <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>
              
              <FlatList
                data={[1, 2, 3]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => <FeaturedCards image={images.alg} />}
                keyExtractor={(_, index) => `featured-${index}`}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 16, marginTop: 16 }}
              />
            </View>

            {/* Recommendations Section */}
            <View className="my-5 px-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendations
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-5">
              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}