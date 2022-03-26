import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HeadProfile} from '../../components/atoms';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imgone from '../../assets/images/bl.png';
import Imgtwo from '../../assets/images/b.png';
import Imgtheree from '../../assets/images/p.png';
import Imgfour from '../../assets/images/k.png';
import {useNavigation} from '@react-navigation/native';
import {HomeStack} from '../../routes/root';
import {StackNavigationProp} from '@react-navigation/stack';

interface IData {
  id: number;
  title: string;
  description: string;
  rating: number;
  imgs: any;
  country: string;
  categories: string;
  long: number;
  lat: number;
}
interface ICategories {
  id: number;
  name: string;
}

const HomeScreen = () => {
  const category: ICategories[] = [
    {
      id: 1,
      name: 'Camp',
    },
    {
      id: 2,
      name: 'Mountains',
    },
    {
      id: 3,
      name: 'Beach',
    },
  ];
  const data: IData[] = [
    {
      id: 1,
      title: 'Bali Adventure',
      description:
        'Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. It owns the panorama and unique culture that make this island is exclusive than others. Furthermore, It’s location is in the tropical situation as Dream Island for a vacation. Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people. Moreover, the local people present daily community ritual and a lot of things make your holiday unforgettable. In Bali, the spirits are coming out to play in the moonlight. You can discover a festival and even a funeral on the island.',
      rating: 4.5,
      imgs: Imgone,
      country: 'Indonesia',
      categories: 'Beach',
      long: -8.269825779262653,
      lat: 115.20301125497409,
    },
    {
      id: 2,
      title: 'Bromo Adventure',
      description:
        'Bromo is from the nearby mountain village of Cemoro Lawang. From there it is possible to walk to the volcano in about 45 minutes, but it is also possible to take an organized jeep tour, including stops at the viewpoint of Mount Penanjakan (2,770 m or 9,088 ft) (Indonesian: Gunung Penanjakan). The sights on Mount Penanjakan can also be reached on foot in about two hours. Depending on the level of volcanic activity, the Indonesian Center for Volcanology and Disaster Mitigation sometimes issues a warning not to visit Mount Bromo.',
      rating: 4.3,
      imgs: Imgtwo,
      country: 'Indonesia',
      categories: 'Mountain',
      long: -7.941515772498885,
      lat: 112.95316234695156,
    },
    {
      id: 3,
      title: 'Papuma Adventure',
      description:
        'Beside Watu Ulo beach, there is Papuma beach with its white sands that make it more interesting. The beautiful white sand is pleasure to see and to walk on. The beach is always used as the place for sunbathing by foreign tourists. Besides its natural scenic beauty, it is also rich of animals, such as the lizard, forest cock, various birds, wild pig, deer porcupine, scaly anteater and many others. The scenery and atmosphere can be enjoyed more completely at a restaurant which provides Indonesian and Papuma food, a variety of baked fish. Visitors can reach the location by public transportation or via rental car. The journey takes approximately 30 minutes from Jember downtown',
      rating: 4.2,
      imgs: Imgtheree,
      country: 'Indonesia',
      categories: 'Beach',
      long: -8.429853230325085,
      lat: 113.55358691116584,
    },
    {
      id: 4,
      title: 'Korea Wonderful',
      description:
        'South Korea, a yet undiscovered piece of Asia, awaits you. Travelling around South Korea will take you through five thousand years of history and culture, coupled with gorgeous landscape of tall mountains and calm bays. Trips across South Korea offer all the interesting things for travellers, from large bright cities to small fishing villages in the middle of rice fields.',
      rating: 4.6,
      imgs: Imgfour,
      country: 'Korea',
      categories: 'City',
      long: 36.376963554578616,
      lat: 127.60155783706183,
    },
  ];
  type SignInscreenProp = StackNavigationProp<HomeStack, 'Screendefault'>;

  const navigation = useNavigation<SignInscreenProp>();

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={Styles.container}>
          <HeadProfile />
        </View>
        <View style={Styles.ContentSearch}>
          <View style={Styles.search}>
            <TextInput
              placeholder="Search.."
              style={Styles.input}
              placeholderTextColor="#b2bec3"
            />
            <View>
              <Ionicons name="search-outline" color="gray" size={30} />
            </View>
          </View>
          <View style={Styles.Content}>
            <Text style={Styles.Text}>Categories</Text>
          </View>
          <View style={Styles.CardContainer}>
            <FlatList
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View style={Styles.cardCategory}>
                    <Text style={Styles.TextCategory}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              data={category}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={Styles.CardContainer}
            />
          </View>
          <View style={Styles.Content}>
            <Text style={Styles.Text}>Popular</Text>
          </View>
          <View style={Styles.CardContainer}>
            <FlatList
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Screendetail', {params: item})
                  }>
                  <View style={Styles.card}>
                    <Image source={item.imgs} style={Styles.img} />
                    <Text style={Styles.TextItem}>{item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{color: 'gray'}}>{item.rating}</Text>
                      <Ionicons name="star" color="#FF9900" size={12} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={Styles.CardContainer}
            />
          </View>
          <View style={Styles.Content}>
            <Text style={Styles.Text}>Destination</Text>
          </View>
          <View style={Styles.CardContainer}>
            <FlatList
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Screendetail', {params: item})
                  }>
                  <View style={Styles.card}>
                    <Image source={item.imgs} style={Styles.img} />
                    <Text style={Styles.TextItem}>{item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{color: 'gray'}}>{item.rating}</Text>
                      <Ionicons name="star" color="#FF9900" size={12} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={Styles.CardContainer}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const Styles = StyleSheet.create({
  TextCategory: {
    color: '#636e72',
    borderWidth: 1,
    borderColor: '#FF9900',
    fontSize: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
  },
  TextItem: {
    color: 'gray',
    fontSize: 23,
  },
  CardContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  container: {
    padding: 13,
  },
  card: {
    marginLeft: 8,
    backgroundColor: 'white',
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    shadowColor: 'gray',
  },
  cardCategory: {
    marginLeft: 8,
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#b2bec3',
  },
  input: {
    width: '87%',
    color: 'gray',
    paddingLeft: 12,
    paddingRight: 12,
  },
  img: {
    width: 230,
    borderRadius: 10,
    height: 150,
  },
  Text: {
    color: 'gray',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: 10,
  },
  Content: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  ContentSearch: {
    padding: 13,
  },
});
