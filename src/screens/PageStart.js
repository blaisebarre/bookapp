'use strict';

import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
import SessionManager from '../utils/SessionManager';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
    image: {
        width:windowWidth,
        height:180,
        resizeMode:'contain',
    }
});

export default class PageStart extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._loadAsync();
    }

    _loadAsync = async () => {
        this.props.navigation.navigate('Home');
    };

    render(){
        return(
            <Image source={require('../assets/images/logo.png')} style={styles.image}/>
        );
    }
}
