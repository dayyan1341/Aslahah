import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Review from "../components/Review";
import details from "../context/details";
import expertise from "../context/expertise";
import serviceBanners from "../context/serviceBanners";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";
import RenderHTML from "react-native-render-html";

export default function ServiceDesc({ route, navigation }) {
  const ins = useSafeAreaInsets();
  const { service } = route.params;
  const { locale } = useAuth()
  const { width } = useWindowDimensions();

  const desc = details[service][locale];
  const exp = expertise[service][locale];
  const img = serviceBanners[service];

  return (
    <View style={[styles.container, { paddingTop: ins.top }]}>
      <View style={styles.x}>
        <Image
          source={img}
          style={styles.bannerimg}
        />
        <Pressable onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/black_back.png")}
            style={styles.backbtn}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.headings}>{i18n[locale][service]}</Text>
          <Text style={styles.description}>{desc}</Text>
          <Text style={[styles.headings, { marginTop: 20 }]}>
            {i18n[locale]["ourExpertise"]}
          </Text>
          <RenderHTML contentWidth={width-10} source={{ html: exp }} />
        </View>
        {/* <View style={styles.box}>
          <Text style={styles.headings}>Our Expertise:</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio
            quis. Reprehenderit fugit ducimus porro fuga, fugiat autem alias,
            assumenda ex ut impedit facere placeat provident a animi ipsam
            eveniet maiores esse nihil non at vitae. Itaque, ad ullam,
            voluptates, aliquam hic mollitia repudiandae rem natus perspiciatis
            id quam.
          </Text>
        </View>
        <View style={styles.box}>
          <View style={styles.ratingbox}>
            <Text style={styles.headings}>Ratings & Reviews</Text>
            <View style={styles.starbox}>
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
            </View>
          </View> */}
        {/* <Review /> */}
        {/* </View> */}
        {/* <Pressable>
          <View style={styles.rightbox}>
            <Text>See all reviews</Text>
          </View>
        </Pressable> */}
      </ScrollView>
      <Pressable
        style={styles.rightbox}
        onPress={() => navigation.navigate("Form", route.params)}
      >
        <Text style={styles.contactbtn}>{i18n[locale]["bookNow"]}</Text>
      </Pressable>
    </View>
  );
}

const dim = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },

  x: {
    position: "relative",
  },
  backbtn: {
    width: 40,
    height: 40,
    // zIndex: 10 ,
    position: "absolute",
    top: -210,
    left: 0,
  },

  wrapper: {
    display: "flex",
    width: dim.width * 0.9,
    alignSelf: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  bannerimg: {
    width: dim.width,
    height: 200,
    marginBottom: 15,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // borderRadius:50,
  
  },
  box: {
    marginBottom: 20,
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
  },
  iconimg: {
    width: 20,
    height: 20,
  },
  ratingbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  starbox: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    // width:'80%'
  },
  contactbtn: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "black",
    width: "80%",
    borderRadius: 30,
  },
});
