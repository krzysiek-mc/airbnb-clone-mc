import React, { FunctionComponent } from "react";
// eslint-disable-next-line import/namespace
import { View, Text, StyleSheet } from "react-native";

import { User } from "./RandomListOfItems";

interface UserItemProps {
  data: User;
}

export const RandomItem: FunctionComponent<UserItemProps> = ({ data }, { key }) => {
  const { email, gender, dob } = data;
  return (
    <View style={styles.itemStyle} key={key}>
      <Text>
        E-mail: <Text style={styles.dataStyle}>{email}</Text>
      </Text>
      <Text>
        Gender:<Text style={styles.dataStyle}>{gender}</Text>
      </Text>
      <Text>
        Age: <Text style={styles.dataStyle}>{dob.age}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  dataStyle: {
    fontWeight: "bold",
    marginLeft: 15,
    paddingStart: 15,
  },
});

export default RandomItem;
