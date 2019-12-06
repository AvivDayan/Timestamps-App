import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getTimeStamps, addTimeStamp } from '../Utils/AsyncStorageHelper';
import moment from "moment";

class ListScreen extends Component {

	constructor(props) {
		super(props);
		this.addNewStamp = null;
	}

	state = {
		timestamps: []
	}

	componentDidMount() {
		this.setState({ timestamps: [...getTimeStamps()] });
		this.addNewStamp = setTimeout(() => {
			addTimeStamp(new Date());
			this.setState({ timestamps: [...getTimeStamps()] });
		}, 60000);
	}

	componentWillUnmount() {
		clearTimeout(this.addNewStamp);
		addTimeStamp(new Date());
	}

	render() {
		return (
			<View>
				<FlatList
					inverted
					keyExtractor={(timeStamp) => timeStamp.toString()}
					data={this.state.timestamps}
					renderItem={({ item }) => {
						return (
							<Text style={styles.textStyle}>
								{moment(item).format("dddd, MMMM Do YYYY, h:mm:ss a")}
							</Text>
						);
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 10
	}
});

export default ListScreen;