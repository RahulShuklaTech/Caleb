import React from 'react';
import * as CustomCode from '../components.js';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';
import { StatusBar, StyleSheet, View } from 'react-native';

const GamesLeaguesScreen = props => {
  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <View style={styles.ViewOG} pointerEvents={'auto'}>
        <Utils.CustomCodeErrorBoundary>
          <CustomCode.Leagues />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewOG: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
});

export default GamesLeaguesScreen;
