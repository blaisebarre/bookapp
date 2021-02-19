'use strict';

import React, { Component } from 'react';
import {Image, StyleSheet, Text} from 'react-native';
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

export default class PageHome extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this._loadAsync();
    }

    _loadAsync = async () => {
        // code eventuel
    };

    render(){
        return(
            <Text>Bienvenue sur mon application !</Text>
        );
    }
}
