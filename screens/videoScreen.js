import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { Colors, Fonts, Default } from "../constants/style";
import React from "react";

const VideoScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`videoScreen:${key}`);
  }

  const breakingNews = [
    {
      key: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video1.png"),
      time: "10 min ago",
    },
    {
      key: "2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video2.png"),
      logo: require("../assets/image/icon2.png"),
      time: "10 min ago",
    },
    {
      key: "3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video3.png"),
      logo: require("../assets/image/icon3.png"),
      time: "10 min ago",
    },
    {
      key: "4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video4.png"),
      logo: require("../assets/image/icon.png"),
      time: "10 min ago",
    },
    {
      key: "5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video5.png"),
      logo: require("../assets/image/icon2.png"),
      time: "10 min ago",
    },
    {
      key: "6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video6.png"),
      logo: require("../assets/image/icon3.png"),
      time: "10 min ago",
    },
    {
      key: "7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video7.png"),
      logo: require("../assets/image/icon2.png"),
      time: "10 min ago",
    },
    {
      key: "8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscin elit.justo nunc ornare dui ",
      image: require("../assets/image/video8.png"),
      logo: require("../assets/image/icon3.png"),
      time: "10 min ago",
    },
  ];
  const renderItemBreakingNews = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("videoDetailScreen")}
        style={{
          ...Default.shadow,
          backgroundColor: Colors.white,
          borderRadius: 10,
          marginHorizontal: Default.fixPadding * 1.5,
          marginTop: isFirst ? Default.fixPadding * 1.5 : 0,
          marginBottom: Default.fixPadding * 1.5,
          borderColor: Colors.primary,
          flexDirection: isRtl ? "row-reverse" : "row",
          overflow: "hidden",
        }}
      >
        <Image source={item.image} />
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: Colors.white,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            alignSelf: "center",
            marginHorizontal: Default.fixPadding * 5,
          }}
        >
          <Ionicons name="caret-forward" size={20} color={Colors.black} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding,
          }}
        >
          <Text
            style={{
              ...Fonts.Medium16Black,
              maxWidth: "80%",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              ...Fonts.Medium14Grey,
              marginVertical: Default.fixPadding * 0.5,
            }}
          >
            {item.time}
          </Text>
          <View style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
            <Ionicons
              name="bookmark-outline"
              size={18}
              color={Colors.primary}
            />
            <Ionicons
              name="share-social-outline"
              size={18}
              color={Colors.primary}
              style={{ marginHorizontal: Default.fixPadding }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <View
        style={{
          paddingVertical: Default.fixPadding,
          backgroundColor: Colors.white,
        }}
      >
        <Text
          style={{
            ...Fonts.Bold18Black,
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        >
          {tr("video")}
        </Text>
      </View>

      <FlatList
        style={{ backgroundColor: Colors.white }}
        data={breakingNews}
        renderItem={renderItemBreakingNews}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;
