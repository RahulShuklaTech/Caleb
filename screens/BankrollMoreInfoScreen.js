import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const BankrollMoreInfoScreen = props => {
  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <View>
        <View style={styles.Viewtv}>
          <Text
            style={[styles.TextmQ, { color: theme.colors.background_inverse }]}
          >
            {'Net Profit'}
          </Text>
        </View>

        <View style={styles.ViewaB}>
          <Text
            style={[styles.TextAP, { color: theme.colors.background_inverse }]}
          >
            {
              '• Use the slider to select your level of confidence in a given bet hitting.*'
            }
          </Text>
        </View>

        <View style={styles.ViewAB}>
          <Text
            style={[styles.TextBx, { color: theme.colors.background_inverse }]}
          >
            {'Bankroll'}
          </Text>
        </View>

        <View style={styles.ViewJB}>
          <Text
            style={[styles.Textuc, { color: theme.colors.background_inverse }]}
          >
            {
              '• Click the Net Profit value at the top left of the screen to view Bankroll value.\n\n• Add notes to look back on.'
            }
          </Text>

          <Text style={[styles.Text_3I, { color: theme.colors.light }]}>
            {
              '*Configure the confidence level and tags before the game begins as they are locked in once it does.'
            }
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextmQ: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Viewtv: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextAP: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  ViewaB: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextBx: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewAB: {
    opacity: 1,
    marginTop: 56,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textuc: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  Text_3I: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 56,
  },
  ViewJB: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
});

export default withTheme(BankrollMoreInfoScreen);
