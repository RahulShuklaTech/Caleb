import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const DashboardOverallStatsHelpScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <View>
        <View>
          <View style={styles.Viewt0}>
            <Text
              style={[
                styles.TextJk,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'Record'}
            </Text>
          </View>

          <View style={styles.ViewmF}>
            <Text
              style={[
                styles.Textir,
                { color: theme.colors.background_inverse },
              ]}
            >
              {
                '• Displays your overall win % and W-L-P values. This accounts for every bet placed across all of the sportsbooks you have synced.\n\n• Filter in/out bets and analyze these results in more detail on the My Bets screen.'
              }
            </Text>
          </View>

          <View style={styles.View_8E}>
            <Text
              style={[
                styles.TextDr,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'Net Profit'}
            </Text>
          </View>

          <View style={styles.View_1E}>
            <Text
              style={[
                styles.TexteP,
                { color: theme.colors.background_inverse },
              ]}
            >
              {
                '• The total amount made or lost for every bet placed across all of the sportsbooks you have synced.\n\n• Total units won or lost is based on your Default Unit Size. This can be modified in Settings > Modify Your Preferences.'
              }
            </Text>
          </View>

          <View style={styles.ViewUp}>
            <Text
              style={[
                styles.TextaY,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'ROI (Return On Investment)'}
            </Text>
          </View>

          <View style={styles.View_6c}>
            <Text
              style={[
                styles.TextO7,
                { color: theme.colors.background_inverse },
              ]}
            >
              {
                '• The percentage ratio between net income/loss and amount of money wagered.'
              }
            </Text>
          </View>

          <View style={styles.Viewap}>
            <Text style={[styles.TextFT, { color: theme.colors.background }]}>
              {'CLV (Closing Line Value)'}
            </Text>
          </View>

          <View style={styles.ViewM6}>
            <Text style={[styles.Texthk, { color: theme.colors.background }]}>
              {
                "• Closing Line Value (CLV) is a comparison between the line/odds that your bet was placed at and the closing line/odds (price of the bet just before the event starts).\n\n• A good CLV is an indicator of A. one's ability to line shop and find the best number, and B. a bettor winning over the long-term.\n\n• Vault measures CLV using the Expected Value Approach."
              }
            </Text>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextJk: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Viewt0: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textir: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  ViewmF: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextDr: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  View_8E: {
    opacity: 1,
    marginTop: 56,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TexteP: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  View_1E: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextaY: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewUp: {
    opacity: 1,
    marginTop: 56,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextO7: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  View_6c: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
  },
  TextFT: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Viewap: {
    opacity: 1,
    marginTop: 56,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Texthk: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
  },
  ViewM6: {
    opacity: 1,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
    marginBottom: 56,
  },
});

export default withTheme(DashboardOverallStatsHelpScreen);
