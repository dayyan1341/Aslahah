import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Banner from "../components/Banner";
import ServicesShowcase from "../components/ServicesShowcase";
import ReviewCard from "../components/ReviewCard";
import Header from "../components/Header";
import BlinkerText from "../components/BilnkerText";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import i18n from "../context/i18n";

function Home({ navigation }) {
  const { locale, getToken } = useAuth();
  const [name, setname] = React.useState();

  React.useEffect(() => {
    getProf();
  }, []);

  async function getProf() {
    try {
      const token = getToken();

      const response = await axios.get(
        "https://server.aslahah.com/api/auth/profile",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Details:", response.data);
      setname(response.data.user.name);
    } catch (error) {
      console.error("Something went wrong while fetching profile", error.response.data.message );
      Alert.alert("Something went wrong while fetching profile",error.response.data.message || "Unknown error occurred");
    }
  }

  return (
    <>
      <Header name={name} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <ServicesShowcase />
        <View style={styles.reviewbox}>
          <View style={styles.reviewboxhead}>
            <Text style={styles.reviewboxtext}>
              {i18n[locale].whatOurClientsSay}
            </Text>
            <Image
              source={require("../assets/static/dotdotdot.png")}
              style={styles.tripledot}
            />
          </View>
          <ScrollView
            style={styles.scroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            fadingEdgeLength={10}
          >
            <View style={styles.cardholder}>
              <ReviewCard
                text={
                  "Incredible service! Quick response time and fixed my leaking faucet in no time. Highly recommend this app for all your plumbing needs!"
                }
                reviwer={"Zidaan"}
                stars={4.7}
              />
              <ReviewCard
                text={
                  "خدمة إصلاح المصاعد لدينا ممتازة. الفريق محترف ومهني، ويقوم بعمل رائع في تحديد وإصلاح المشكلات بسرعة وفعالية. الآن يعمل المصعد بسلاسة وأمان تام. أنصح بشدة باستخدام خدماتهم."
                }
                reviwer={"Furkaan"}
                stars={4.2}
              />
              <ReviewCard
                text={
                  "Fantastic carpentry service! The carpenter was skilled and attentive to detail. Built me a beautiful custom wardrobe exactly to my specifications. Will definitelyuseagain!"
                }
                reviwer={"Ayan"}
                stars={4.4}
              />
            </View>
          </ScrollView>
        </View>
        {/* <Pressable
        android_ripple={{ color: "#eee", radius: 60 }}
        style={styles.btn}
        onPress={() => navigation.navigate("SelectLanguage")}
      >
        <BlinkerText style={styles.btnText}>
          {i18n[locale].becomeTechnician}
        </BlinkerText>
      </Pressable> */}
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  reviewbox: {
    // padding: 20,
    margin: 20,
  },
  reviewboxtext: {
    fontWeight: "bold",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewboxhead: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tripledot: {
    height: 50,
    width: 50,
  },
  scroll: { margin: -20 },
  cardholder: {
    display: "flex",
    flex: 0.5,
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
    margin: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 45,
    padding: 5,
    gap: 3,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "middle",
  },
  btnText: {
    color: "beige",
    textAlign: "center",
    fontSize: 25,
    marginLeft: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    width: "50%",
    borderRadius: 38,
  },
});
